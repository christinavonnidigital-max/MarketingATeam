import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="px-6 py-20 bg-gray-50 dark:bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full dark:bg-indigo-900/30 dark:text-indigo-400 animate-pulse">
            Scaling Startups with Precision
          </span>
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl">
            End-to-End Marketing <span className="text-indigo-600">Execution</span>
          </h1>
          <p className="mb-10 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We provide the strategy, content, and measurement you need to launch and scale campaigns without the overhead of a full in-house team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:hello@channelready.com" className="px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-105">
              Start Your Campaign
            </a>
            <a href="#services" className="px-8 py-3 text-lg font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-24 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Everything you need to win in any channel.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Strategy */}
            <div className="p-8 border rounded-2xl border-gray-200 dark:border-gray-800 hover:shadow-xl transition-shadow bg-gray-50/50 dark:bg-gray-900/50">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Strategy</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Tailored marketing plans that align with your business goals and identify the highest-impact channels for growth.
              </p>
            </div>
            {/* Content */}
            <div className="p-8 border rounded-2xl border-gray-200 dark:border-gray-800 hover:shadow-xl transition-shadow bg-gray-50/50 dark:bg-gray-900/50">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Content</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                High-quality blog posts, social media copy, and email campaigns that build brand authority and resonate with your audience.
              </p>
            </div>
            {/* Measurement */}
            <div className="p-8 border rounded-2xl border-gray-200 dark:border-gray-800 hover:shadow-xl transition-shadow bg-gray-50/50 dark:bg-gray-900/50">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Measurement</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Data-driven insights to track performance, optimize marketing spend, and prove ROI across every single campaign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Target Section */}
      <section id="about" className="px-6 py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Built for Early-Stage Startups</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            You have product-market fit, but you lack consistent marketing throughput. We bridge that gap by becoming your plug-and-play marketing team, allowing you to focus on building your product while we handle the execution.
          </p>
          <a href="mailto:hello@channelready.com" className="inline-flex items-center gap-2 text-indigo-600 font-semibold dark:text-indigo-400 hover:gap-3 transition-all">
            <span>Ready to scale? Let's talk</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
