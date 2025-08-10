import React from 'react'
import Link from 'next/link'

export default function Article3() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Journalism Hub
            </Link>
            <nav className="flex space-x-6">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-800 px-8 py-12 text-white">
            <div className="text-center">
              <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                #3
              </span>
              <h1 className="text-4xl font-bold mb-4">
                Business & Economic Journalism
              </h1>
              <p className="text-xl text-green-100">
                Reporting on Markets, Companies, and the Economy
              </p>
            </div>
          </div>

          <div className="px-8 py-12 space-y-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Understanding the Business World
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Business and economic journalism plays a crucial role in helping
                individuals, investors, and policymakers understand the complex
                forces that drive markets and economies. From daily stock market
                updates to in-depth analysis of corporate strategies, this field
                provides essential insights into how money moves and how
                businesses operate.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Key Areas of Coverage
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Financial Markets
                  </h4>
                  <p className="text-gray-700">
                    Tracking stock markets, bonds, commodities, and currency
                    fluctuations that affect global economies and individual
                    portfolios.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Corporate News
                  </h4>
                  <p className="text-gray-700">
                    Reporting on company earnings, mergers, acquisitions,
                    leadership changes, and strategic decisions that impact
                    industries.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Economic Indicators
                  </h4>
                  <p className="text-gray-700">
                    Analyzing GDP, employment data, inflation rates, and other
                    metrics that signal economic health and trends.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Industry Trends
                  </h4>
                  <p className="text-gray-700">
                    Exploring technological disruptions, regulatory changes, and
                    market shifts that transform entire sectors.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                The Journalist's Toolkit
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Business journalists need a solid foundation in economics,
                finance, and accounting. They must understand how to read
                financial statements, interpret economic data, and explain
                complex concepts in accessible language. Strong analytical
                skills, attention to detail, and the ability to spot trends are
                essential for success in this field.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Challenges in Business Reporting
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Business journalism faces unique challenges: the need for speed
                in breaking news, the complexity of financial instruments, the
                risk of market manipulation, and the pressure to provide
                actionable insights. Journalists must balance the demands of
                daily deadlines with the need for thorough analysis and
                verification.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                The Digital Transformation
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Technology has revolutionized business journalism, enabling
                real-time reporting, interactive data visualization, and direct
                engagement with audiences. Social media platforms provide
                instant access to market updates, while data journalism tools
                allow for deeper analysis of complex economic trends. However,
                the speed of digital media also increases the risk of errors and
                requires even more rigorous fact-checking.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Ethical Considerations
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Business journalists must navigate potential conflicts of
                interest, avoid insider trading implications, and maintain
                independence from the companies they cover. They must be
                transparent about their sources and methods, and avoid
                sensationalism that could move markets inappropriately. The goal
                is to provide accurate, balanced information that helps readers
                make informed decisions.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h4 className="text-xl font-semibold text-green-900 mb-3">
                  The Business Journalist's Promise
                </h4>
                <p className="text-green-800 italic">
                  "We translate the complex language of business and economics
                  into clear, actionable insights. Our mission is to help
                  readers understand not just what is happening, but why it
                  matters and how it affects their financial future."
                </p>
              </div>
            </div>

            <div className="border-t pt-8">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
              >
                ← Back to Journalism Hub
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
