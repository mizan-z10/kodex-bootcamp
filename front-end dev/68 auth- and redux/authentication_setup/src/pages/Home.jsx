
import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-blue-600">
            MyApp
          </h1>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Logout
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">

          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to MyApp 👋
          </h2>

          <p className="text-gray-600 text-lg max-w-xl mx-auto mb-8">
            A simple and clean React application built with React and Tailwind CSS.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🚀 Fast
            </h3>
            <p className="text-gray-600">
              Build fast and modern applications with React.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🔐 Secure
            </h3>
            <p className="text-gray-600">
              Authentication keeps your application protected.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              ⚡ Simple
            </h3>
            <p className="text-gray-600">
              A clean and easy-to-use interface for your users.
            </p>
          </div>

        </div>
      </main>

    </div>
  )
}

export default Home

