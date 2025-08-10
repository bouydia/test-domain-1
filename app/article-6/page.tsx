import React from 'react'
import Link from 'next/link'

export default function Article6() {
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
          <div className="bg-gradient-to-r from-teal-600 to-teal-800 px-8 py-12 text-white">
            <div className="text-center">
              <span className="inline-block bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                #6
              </span>
              <h1 className="text-4xl font-bold mb-4">Health Journalism</h1>
              <p className="text-xl text-teal-100">
                Medical News, Public Health Issues, and Wellness Topics
              </p>
            </div>
          </div>

          <div className="px-8 py-12 space-y-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Informing Health Decisions
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Health journalism plays a vital role in helping people make
                informed decisions about their well-being. It covers everything
                from breakthrough medical treatments to public health crises,
                from wellness trends to healthcare policy. In an era where
                health information is abundant but not always reliable, quality
                health journalism serves as a trusted source of accurate,
                evidence-based information.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Core Areas of Health Coverage
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Medical Research
                  </h4>
                  <p className="text-gray-700">
                    Reporting on clinical trials, new treatments, medical
                    breakthroughs, and advances in understanding diseases and
                    conditions.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Public Health
                  </h4>
                  <p className="text-gray-700">
                    Covering epidemics, vaccination programs, health policy, and
                    community health initiatives that affect populations.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Wellness & Prevention
                  </h4>
                  <p className="text-gray-700">
                    Exploring nutrition, exercise, mental health, stress
                    management, and lifestyle factors that contribute to overall
                    well-being.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Healthcare Systems
                  </h4>
                  <p className="text-gray-700">
                    Investigating healthcare access, costs, quality, and the
                    impact of policy decisions on patient care and outcomes.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                The Journalist's Responsibility
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Health journalists bear a heavy responsibility to provide
                accurate, balanced, and contextual information that can
                literally affect life and death decisions. They must understand
                medical terminology, interpret research findings correctly, and
                present information in ways that help readers make informed
                choices about their health without causing unnecessary alarm or
                false hope.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Navigating Medical Complexity
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Health journalism involves translating complex medical concepts
                into accessible language while maintaining scientific accuracy.
                Journalists must distinguish between correlation and causation,
                understand the limitations of studies, and avoid oversimplifying
                complex health issues. They must also be aware of their own
                biases and avoid sensationalizing health stories for clicks or
                views.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                The Challenge of Health Misinformation
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In today's digital age, health misinformation spreads rapidly
                through social media and other online platforms. Health
                journalists must be vigilant about fact-checking, debunking
                myths, and providing context that helps readers distinguish
                between credible health information and pseudoscience. This
                requires strong research skills and a commitment to
                evidence-based reporting.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Ethical Considerations
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Health journalists must navigate potential conflicts of
                interest, avoid promoting unproven treatments, and be sensitive
                to the privacy and dignity of patients and their families. They
                must balance the public's right to know with the potential for
                harm, and ensure that their reporting doesn't contribute to
                stigma or discrimination against people with certain health
                conditions.
              </p>

              <div className="bg-teal-50 border-l-4 border-teal-400 p-6 rounded-r-lg">
                <h4 className="text-xl font-semibold text-teal-900 mb-3">
                  The Health Journalist's Promise
                </h4>
                <p className="text-teal-800 italic">
                  "We are committed to providing accurate, evidence-based health
                  information that empowers readers to make informed decisions
                  about their well-being. Our mission is to bridge the gap
                  between medical research and public understanding, always
                  prioritizing accuracy and public health."
                </p>
              </div>
            </div>

            <div className="border-t pt-8">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors"
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
