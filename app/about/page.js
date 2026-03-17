import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-pink-50">
      
      {/* Navbar */}
      <nav className="bg-pink-600 shadow-md">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          
          <Link href="/" className="text-xl font-bold text-white">
            Home
          </Link>

          <div className="flex space-x-6">
            <Link href="/about" className="text-pink-100 hover:text-white">
              About
            </Link>

            <Link href="/contact" className="text-pink-100 hover:text-white">
              Contact
            </Link>
          </div>

        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          About Page
        </h1>

        <div className="bg-blue-200 rounded-lg shadow-md p-6 border border-blue-500">

          <p className="text-lg text-gray-700 mb-4">
            <b>Hello Iam Akshada Shelke</b>
          </p>
          

          <p className="text-lg text-gray-700 mb-4">
            <b>Iam post graduate in msc(computer science).I am from Sangamner.I am working as a frontend intern at Veagle Space Technology.</b>
          </p>

          

        </div>
      </main>

    </div>
  );
}