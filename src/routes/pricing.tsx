import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  component: Pricing,
});

function Pricing() {
  return (
    <main className="flex-grow">
      {/* Pricing Hero Section */}
      <section className="px-6 py-20 bg-gray-50 dark:bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl">
            Simple, Transparent <span className="text-indigo-600">Pricing</span>
          </h1>
          <p className="mb-10 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Choose the level of support that fits your growth stage. No hidden fees, just pure execution.
          </p>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="px-6 py-24 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Strategy Session */}
            <div className="flex flex-col p-8 border rounded-2xl border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2">Strategy & Audit</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold">$750</span>
                <span className="text-gray-500 text-sm">one-time</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow">
                A deep-dive into your current marketing efforts with a actionable 3-month roadmap.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "60-90min deep-dive session",
                  "Full channel audit",
                  "Competitor analysis",
                  "3-month growth roadmap"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <svg className="w-5 h-5 text-indigo-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="mailto:hello@channelready.com?subject=Strategy Session Inquiry" className="w-full py-3 px-4 text-center font-semibold text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-400 transition-colors">
                Book a Session
              </a>
            </div>

            {/* Monthly Retainer - FEATURED */}
            <div className="flex flex-col p-8 border-2 rounded-2xl border-indigo-600 bg-white dark:bg-gray-900 shadow-xl relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Monthly Retainer</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold">$3,500</span>
                <span className="text-gray-500 text-sm">/mo</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow">
                Full-service marketing execution for startups that need consistent throughput.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "4 Blog posts per month",
                  "12 Social media posts",
                  "2 Email newsletters",
                  "Monthly performance reporting",
                  "3-month minimum commitment"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium">
                    <svg className="w-5 h-5 text-indigo-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="mailto:hello@channelready.com?subject=Monthly Retainer Inquiry" className="w-full py-3 px-4 text-center font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 dark:shadow-none">
                Get Started
              </a>
            </div>

            {/* One-Off Campaign */}
            <div className="flex flex-col p-8 border rounded-2xl border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2">Campaign Package</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold">$2,500</span>
                <span className="text-gray-500 text-sm">/campaign</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow">
                Perfect for launches or seasonal pushes requiring a cohesive channel mix.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Campaign strategy",
                  "High-converting landing page",
                  "Social media promo kit",
                  "Email nurture sequence",
                  "1 Anchor blog post"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <svg className="w-5 h-5 text-indigo-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="mailto:hello@channelready.com?subject=Campaign Package Inquiry" className="w-full py-3 px-4 text-center font-semibold text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-400 transition-colors">
                Launch a Campaign
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="px-6 py-24 bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Need something custom?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            We work with startups of all sizes. If our standard packages don't fit your needs, let's chat about a custom engagement.
          </p>
          <a href="mailto:hello@channelready.com" className="inline-flex items-center gap-2 text-indigo-600 font-semibold dark:text-indigo-400 hover:gap-3 transition-all">
            <span>Contact us for a custom quote</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
