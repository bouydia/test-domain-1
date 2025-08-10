import React from 'react'
import Link from 'next/link'

export default function Article2() {
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-12 text-white">
            <div className="text-center">
              <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                #2
              </span>
              <h1 className="text-4xl font-bold mb-4">Political Journalism</h1>
              <p className="text-xl text-blue-100">
                Covering Politics, Elections, and Government Affairs
              </p>
            </div>
          </div>

          <div className="px-8 py-12 space-y-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Vital Role of Political Journalism
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Political journalism serves as the cornerstone of democratic
                societies, providing citizens with the information they need to
                make informed decisions about their governance. It covers the
                complex world of politics, from local city councils to
                international diplomacy, ensuring transparency and
                accountability in government institutions.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Core Areas of Political Coverage
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Election Coverage
                  </h4>
                  <p className="text-gray-700">
                    Comprehensive reporting on campaigns, candidates, policies,
                    and the democratic process from primaries to general
                    elections.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Legislative Affairs
                  </h4>
                  <p className="text-gray-700">
                    Tracking bills, laws, and policy developments in local,
                    state, and federal legislatures.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Executive Branch
                  </h4>
                  <p className="text-gray-700">
                    Monitoring the actions, decisions, and policies of
                    presidents, governors, and mayors.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    International Relations
                  </h4>
                  <p className="text-gray-700">
                    Covering diplomacy, foreign policy, international conflicts,
                    and global governance.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                The Journalist's Responsibility
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Political journalists bear a heavy responsibility to provide
                accurate, balanced, and contextual information. They must
                navigate complex policy issues, understand political systems,
                and present information in ways that help citizens understand
                how decisions affect their lives. This requires deep knowledge
                of political science, economics, history, and current events.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Challenges in Political Reporting
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Political journalism faces unique challenges: the need for speed
                in breaking news, the complexity of policy issues, the risk of
                bias accusations, and the pressure to provide "both sides" even
                when facts are clear. Journalists must balance access to sources
                with maintaining editorial independence, and navigate the fine
                line between analysis and advocacy.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                The Digital Revolution's Impact
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Social media and digital platforms have transformed political
                journalism, enabling real-time reporting and direct engagement
                with audiences. However, they've also accelerated the spread of
                misinformation and created echo chambers. Political journalists
                must now fact-check rapidly, engage with online communities, and
                navigate the challenges of digital verification.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Maintaining Objectivity
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                While complete objectivity may be impossible, political
                journalists strive for fairness, accuracy, and balance. This
                means giving all legitimate viewpoints a fair hearing,
                fact-checking claims from all sides, and being transparent about
                sources and methods. It also means avoiding sensationalism and
                focusing on substance over personality.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">
                  The Political Journalist's Mission
                </h4>
                <p className="text-blue-800 italic">
                  "Our role is not to tell people what to think, but to provide
                  them with the information they need to think for themselves.
                  We are the watchdogs of democracy, ensuring that power is
                  exercised transparently and accountably."
                </p>
              </div>
            </div>

            <div className="border-t pt-8">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
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
