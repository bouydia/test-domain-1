import React from 'react'
import Link from 'next/link'

export default function Article5() {
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
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 px-8 py-12 text-white">
            <div className="text-center">
              <span className="inline-block bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                #5
              </span>
              <h1 className="text-4xl font-bold mb-4">
                Science & Technology Journalism
              </h1>
              <p className="text-xl text-purple-100">
                Coverage of Scientific Research, Innovation, and Tech Trends
              </p>
            </div>
          </div>

          <div className="px-8 py-12 space-y-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Bridging Science and Society
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Science and technology journalism serves as a crucial bridge
                between the complex world of research and innovation and the
                general public. It translates cutting-edge discoveries,
                breakthrough technologies, and scientific controversies into
                accessible stories that help people understand how these
                developments affect their lives and shape our future.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Key Areas of Coverage
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Scientific Research
                  </h4>
                  <p className="text-gray-700">
                    Reporting on breakthrough discoveries, research
                    methodologies, peer-reviewed studies, and the scientific
                    process across all disciplines.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Technology Innovation
                  </h4>
                  <p className="text-gray-700">
                    Covering new technologies, startups, product launches, and
                    the impact of digital transformation on various industries.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Health & Medicine
                  </h4>
                  <p className="text-gray-700">
                    Reporting on medical breakthroughs, clinical trials, public
                    health issues, and the intersection of technology and
                    healthcare.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Environmental Science
                  </h4>
                  <p className="text-gray-700">
                    Covering climate research, conservation efforts, renewable
                    energy, and sustainability innovations.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                The Journalist's Challenge
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Science and technology journalists face the unique challenge of
                making complex concepts accessible without oversimplifying or
                sensationalizing. They must understand enough science to ask
                intelligent questions, verify claims from multiple sources, and
                present information in context. This requires strong research
                skills, scientific literacy, and the ability to communicate
                clearly with diverse audiences.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Navigating Controversy and Uncertainty
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Science journalism often involves covering controversial topics
                where scientific consensus may be evolving or where public
                understanding differs from expert opinion. Journalists must
                present the weight of evidence fairly, distinguish between
                scientific disagreement and misinformation, and avoid false
                balance that gives equal weight to well-established science and
                fringe theories.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                The Digital Age of Science Communication
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Technology has transformed how science is communicated, enabling
                interactive visualizations, real-time data sharing, and direct
                engagement with researchers. Social media platforms allow
                scientists to communicate directly with the public, while data
                journalism tools enable journalists to analyze and visualize
                complex datasets. However, the speed of digital media also
                increases the risk of spreading unverified claims or preliminary
                findings.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Ethical Responsibilities
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Science journalists have a responsibility to avoid hype,
                distinguish between correlation and causation, and present
                uncertainty honestly. They must be transparent about their
                sources, avoid conflicts of interest, and resist pressure to
                oversell the implications of research findings. The goal is to
                inform and educate, not to entertain or alarm.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                <h4 className="text-xl font-semibold text-purple-900 mb-3">
                  The Science Journalist's Mission
                </h4>
                <p className="text-purple-800 italic">
                  "We translate the language of science into stories that
                  inform, inspire, and empower. Our mission is to help people
                  understand the world around them, make informed decisions, and
                  appreciate the wonder of scientific discovery."
                </p>
              </div>
            </div>

            <div className="border-t pt-8">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
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
