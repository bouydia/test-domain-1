import React from 'react'
import Link from 'next/link'

export default function Article4() {
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
          <div className="bg-gradient-to-r from-orange-600 to-orange-800 px-8 py-12 text-white">
            <div className="text-center">
              <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                #4
              </span>
              <h1 className="text-4xl font-bold mb-4">Sports Journalism</h1>
              <p className="text-xl text-orange-100">
                News, Analysis, and Commentary on Sporting Events
              </p>
            </div>
          </div>

          <div className="px-8 py-12 space-y-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Thrilling World of Sports Journalism
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Sports journalism captures the drama, passion, and human stories
                that make sports more than just games. From breaking news about
                trades and injuries to in-depth analysis of strategies and
                statistics, sports journalists provide fans with the information
                and insights they crave. This field combines the excitement of
                live events with the rigor of professional reporting.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Core Areas of Sports Coverage
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Game Coverage
                  </h4>
                  <p className="text-gray-700">
                    Live reporting, post-game analysis, and comprehensive
                    coverage of matches, races, and competitions across all
                    sports.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Player Profiles
                  </h4>
                  <p className="text-gray-700">
                    In-depth stories about athletes' backgrounds, careers,
                    personal lives, and contributions to their sports.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Team Analysis
                  </h4>
                  <p className="text-gray-700">
                    Strategic breakdowns, roster changes, coaching decisions,
                    and organizational developments that affect team
                    performance.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Sports Business
                  </h4>
                  <p className="text-gray-700">
                    Coverage of contracts, endorsements, team ownership, stadium
                    deals, and the economic aspects of professional sports.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                The Journalist's Skills
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Sports journalists need a deep understanding of the games they
                cover, strong writing skills, and the ability to work under
                pressure. They must be able to explain complex strategies in
                accessible terms, conduct insightful interviews, and provide
                analysis that goes beyond the obvious. Knowledge of statistics,
                history, and the business of sports is also essential.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Challenges in Sports Reporting
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Sports journalism faces unique challenges: tight deadlines for
                game coverage, the need to balance access to teams with
                editorial independence, and the pressure to provide both
                entertainment and information. Journalists must navigate the
                competitive nature of sports while maintaining professional
                standards and avoiding bias toward local teams or popular
                athletes.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                The Digital Revolution
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Technology has transformed sports journalism, enabling real-time
                updates, multimedia content, and direct engagement with fans.
                Social media platforms provide instant access to breaking news,
                while advanced analytics and data visualization tools allow for
                deeper insights into performance and strategy. However, the 24/7
                news cycle also increases the pressure to be first with
                information, sometimes at the expense of accuracy.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Beyond the Scoreboard
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The best sports journalism goes beyond wins and losses to
                explore the human stories behind the games. It covers issues of
                social justice, mental health, and the broader impact of sports
                on society. Sports journalists have a unique platform to address
                important social issues while maintaining the excitement and
                passion that makes sports compelling.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
                <h4 className="text-xl font-semibold text-orange-900 mb-3">
                  The Sports Journalist's Mission
                </h4>
                <p className="text-orange-800 italic">
                  "We bring the drama and excitement of sports to life while
                  providing the analysis and context that helps fans understand
                  not just what happened, but why it matters. Our goal is to
                  enhance the fan experience through compelling storytelling and
                  insightful commentary."
                </p>
              </div>
            </div>

            <div className="border-t pt-8">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
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
