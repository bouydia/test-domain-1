import React from 'react'
import Link from 'next/link'

export default function Article1() {
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
          <div className="bg-gradient-to-r from-red-600 to-red-800 px-8 py-12 text-white">
            <div className="text-center">
              <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                #1
              </span>
              <h1 className="text-4xl font-bold mb-4">
                Investigative Journalism
              </h1>
              <p className="text-xl text-red-100">
                Uncovering the Truth Behind Corruption, Scandals, and Hidden
                Realities
              </p>
            </div>
          </div>

          <div className="px-8 py-12 space-y-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Power of Investigative Journalism
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Investigative journalism represents the highest form of
                journalistic integrity and courage. It involves deep, systematic
                research into matters of public interest that powerful
                individuals or institutions would prefer to keep hidden. From
                Watergate to the Panama Papers, investigative journalists have
                exposed corruption, fraud, and abuse of power that have shaped
                the course of history.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                The Investigative Process
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                True investigative journalism follows a rigorous methodology: it
                begins with a hypothesis or tip, involves months or years of
                research, requires verification from multiple sources, and
                culminates in a comprehensive story that can withstand legal
                scrutiny. Investigative reporters often work undercover, build
                complex databases, and develop confidential sources to piece
                together the truth.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Key Areas of Investigation
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Political Corruption
                  </h4>
                  <p className="text-gray-700">
                    Investigating misuse of public funds, bribery, and abuse of
                    political power at all levels of government.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Corporate Misconduct
                  </h4>
                  <p className="text-gray-700">
                    Exposing fraud, environmental violations, labor abuses, and
                    deceptive business practices.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Criminal Networks
                  </h4>
                  <p className="text-gray-700">
                    Uncovering organized crime, human trafficking, and
                    international criminal operations.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Social Injustice
                  </h4>
                  <p className="text-gray-700">
                    Revealing discrimination, human rights violations, and
                    systemic inequalities in society.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Challenges and Risks
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Investigative journalists face numerous challenges: legal
                threats, physical danger, financial pressure, and attempts to
                discredit their work. Many work with limited resources, often as
                freelancers, and face the constant threat of lawsuits from
                powerful subjects. Despite these obstacles, their work remains
                essential to maintaining democracy and holding power to account.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Impact and Legacy
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The impact of investigative journalism can be profound and
                long-lasting. It can lead to criminal prosecutions, policy
                changes, corporate reforms, and increased public awareness.
                Perhaps most importantly, it serves as a deterrent, letting
                those in power know that their actions are being watched and
                that wrongdoing will be exposed.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">
                  The Journalist's Creed
                </h4>
                <p className="text-blue-800 italic">
                  "The mission of investigative journalism is to serve the
                  public interest by revealing information that powerful people
                  want to keep secret. It is not about sensationalism or
                  personal gain, but about truth, justice, and the public's
                  right to know."
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
