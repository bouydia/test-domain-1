import Link from 'next/link'

export default function Home() {
  const journalismCategories = [
    {
      id: 1,
      title: 'Investigative Journalism',
      description: 'Deep research into corruption, scandals, or hidden truths',
      href: '/article-1',
    },
    {
      id: 2,
      title: 'Political Journalism',
      description: 'Coverage of politics, elections, and government affairs',
      href: '/article-2',
    },
    {
      id: 3,
      title: 'Business & Economic Journalism',
      description: 'Reporting on markets, companies, and the economy',
      href: '/article-3',
    },
    {
      id: 4,
      title: 'Sports Journalism',
      description: 'News, analysis, and commentary on sporting events',
      href: '/article-4',
    },
    {
      id: 5,
      title: 'Science & Technology Journalism',
      description:
        'Coverage of scientific research, innovation, and tech trends',
      href: '/article-5',
    },
    {
      id: 6,
      title: 'Health Journalism',
      description: 'Medical news, public health issues, and wellness topics',
      href: '/article-6',
    },
    {
      id: 7,
      title: 'Environmental Journalism',
      description: 'Climate change, conservation, and environmental policy',
      href: '/article-7',
    },
    {
      id: 8,
      title: 'Arts & Culture Journalism',
      description: 'Film, music, literature, and cultural commentary',
      href: '/article-8',
    },
    {
      id: 9,
      title: 'Crime & Legal Journalism',
      description: 'Reports on crime, court cases, and legal developments',
      href: '/article-9',
    },
    {
      id: 10,
      title: 'Lifestyle Journalism',
      description: 'Fashion, travel, food, and everyday living',
      href: '/article-10',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Journalism Hub</h1>
            <p className="text-gray-600">Exploring the World Through News</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Journalism Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover comprehensive coverage across all major journalism
            categories. From investigative reporting to lifestyle features, we
            bring you the stories that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {journalismCategories.map(category => (
            <Link
              key={category.id}
              href={category.href}
              className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    #{category.id}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
                  <span className="text-sm font-medium">Read more</span>
                  <svg
                    className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-300">
              © 2024 Journalism Hub. Dedicated to quality journalism and
              truth-seeking.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
