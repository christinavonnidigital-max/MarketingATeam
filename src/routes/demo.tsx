import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { useState } from 'react'

const simulateMissedCallFn = createServerFn({ method: 'POST' })
  .validator((data: { phoneNumber: string }) => data)
  .handler(async ({ data }) => {
    console.log('Simulating missed call from:', data.phoneNumber)
    // In a real scenario, this would trigger the Twilio/Meta API
    // For the demo, we'll just return a success message and a mock response
    return {
      success: true,
      message: `WhatsApp sent to ${data.phoneNumber}`,
      conversation: [
        { role: 'system', text: `[Missed call detected from ${data.phoneNumber}]` },
        { role: 'business', text: "Hi! We saw you tried to call CallRescue. We're currently on another job, but how can we help you right now?" },
      ]
    }
  })

export const Route = createFileRoute('/demo')({
  component: DemoComponent,
})

function DemoComponent() {
  const [phoneNumber, setPhoneNumber] = useState('082 123 4567')
  const [logs, setLogs] = useState<{ role: string; text: string }[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSimulate = async () => {
    setIsLoading(true)
    try {
      const result = await simulateMissedCallFn({ data: { phoneNumber } })
      setLogs(result.conversation)
    } catch (error) {
      console.error(error)
      alert('Failed to simulate missed call')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">CallRescue Demo</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 mb-8">
        <h2 className="text-xl font-semibold mb-4">Simulate Inbound Missed Call</h2>
        <p className="text-gray-600 mb-6">
          Enter a phone number to simulate what happens when a customer calls and we miss it.
        </p>
        
        <div className="flex gap-4">
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 082 123 4567"
          />
          <button
            onClick={handleSimulate}
            disabled={isLoading}
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-300"
          >
            {isLoading ? 'Processing...' : 'Simulate Missed Call'}
          </button>
        </div>
      </div>

      {logs.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">WhatsApp Automation Log</h2>
          <div className="space-y-4">
            {logs.map((log, index) => (
              <div 
                key={index} 
                className={`p-3 rounded-lg max-w-[80%] ${
                  log.role === 'system' 
                    ? 'bg-yellow-100 text-yellow-800 text-sm mx-auto' 
                    : log.role === 'business'
                    ? 'bg-green-100 text-green-800 ml-auto'
                    : 'bg-white text-gray-800 border border-gray-200'
                }`}
              >
                {log.text}
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-2">
             <input
                type="text"
                placeholder="Type a reply..."
                className="flex-1 border border-gray-300 rounded-md px-3 py-1 text-sm"
                disabled
              />
              <button className="bg-green-600 text-white px-4 py-1 rounded-md text-sm opacity-50 cursor-not-allowed">
                Send
              </button>
          </div>
          <p className="text-xs text-gray-400 mt-2 italic text-center">
            AI Lead Qualification demo coming in the next phase.
          </p>
        </div>
      )}
    </div>
  )
}
