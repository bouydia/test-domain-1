import React from 'react'
import Link from 'next/link'

export default function Article7() {
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
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 px-8 py-12 text-white">
            <div className="text-center">
              <span className="inline-block bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                #7
              </span>
              <h1 className="text-4xl font-bold mb-4">
                Environmental Journalism
              </h1>
              <p className="text-xl text-emerald-100">
                Climate Change, Conservation, and Environmental Policy
              </p>
            </div>
          </div>

          <div className="px-8 py-12 space-y-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Reporting on Our Planet's Future
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Environmental journalism plays a critical role in raising
                awareness about the most pressing challenges facing our planet.
                From climate change and biodiversity loss to pollution and
                resource depletion, environmental journalists investigate and
                report on issues that affect every living being on Earth. Their
                work helps inform public policy, corporate decisions, and
                individual actions that can shape the future of our environment.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Key Areas of Environmental Coverage
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Climate Change
                  </h4>
                  <p className="text-gray-700">
                    Reporting on global warming impacts, extreme weather events,
                    carbon emissions, and international climate agreements and
                    policies.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Conservation
                  </h4>
                  <p className="text-gray-700">
                    Covering wildlife protection, habitat preservation,
                    endangered species, and the work of conservation
                    organizations and researchers.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Environmental Policy
                  </h4>
                  <p className="text-gray-700">
                    Investigating environmental regulations, government actions,
                    corporate environmental practices, and international
                    environmental agreements.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Sustainability
                  </h4>
                  <p className="text-gray-700">
                    Exploring renewable energy, green technology, sustainable
                    agriculture, and efforts to reduce environmental footprints
                    across industries.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                The Journalist's Mission
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Environmental journalists serve as watchdogs, investigating
                environmental violations, exposing greenwashing, and holding
                powerful interests accountable for their environmental impact.
                They must understand complex scientific concepts, navigate
                political controversies, and present information in ways that
                inspire action without causing despair or apathy.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Navigating Scientific Complexity
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Environmental journalism often involves complex scientific
                concepts, from atmospheric chemistry to ecosystem dynamics.
                Journalists must accurately translate these concepts for general
                audiences while maintaining scientific rigor. They must
                distinguish between scientific consensus and ongoing debate, and
                avoid oversimplifying complex environmental systems.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                The Challenge of Climate Denial
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Environmental journalists face organized campaigns to discredit
                climate science and environmental research. They must be
                prepared to counter misinformation, provide context about
                scientific consensus, and maintain journalistic standards while
                covering controversial topics. This requires strong
                fact-checking skills and a commitment to evidence-based
                reporting.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Solutions Journalism
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Beyond reporting on problems, environmental journalists
                increasingly focus on solutions and success stories. They
                highlight innovative approaches to environmental challenges,
                profile environmental leaders and organizations, and explore
                pathways to a more sustainable future. This approach helps
                readers understand that environmental problems are solvable and
                that individual and collective action can make a difference.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6 rounded-r-lg">
                <h4 className="text-xl font-semibold text-emerald-900 mb-3">
                  The Environmental Journalist's Promise
                </h4>
                <p className="text-emerald-800 italic">
                  "We are committed to telling the truth about environmental
                  challenges while highlighting solutions and inspiring action.
                  Our mission is to inform, educate, and empower readers to
                  become stewards of our planet's future."
                </p>
              </div>
            </div>

            <div className="border-t pt-8">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
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
