import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-pink-50 dark:bg-gray-900">
      <nav className="bg-blue-600 shadow-md">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-white">
            Home
          </Link>
           <div className="flex space-x-4 sm:space-x-6">
            <Link href="/about" className="text-pink-100 hover:text-white">
              About
            </Link>
            <Link href="/contact" className="text-pink-100 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Contact Page</h1>

        <div className="bg-blue-200 rounded-lg shadow-md p-6 border border-blue-500 dark:bg-gray-800 rounded-lg shadow-md p-6">
          <p className="text-lg text-gray-700 dark:text-pink-300 mb-4"><b>Email:</b> akshu18@gmail.com</p>
          <p className="text-lg text-gray-700 dark:text-pink-300 mb-4"><b>Phone:</b> 1234567890</p>
          <p className="text-lg text-gray-700 dark:text-pink-300 mb-4"><b>Address:</b> Sangamner, Maharashtra</p>

        </div>
        
      </main>
    </div>
  );
}