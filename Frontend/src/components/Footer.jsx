import React from 'react'

function Footer() {
  return (

    <>
  
      

{/* Professional Footer */}
      <footer className="bg-gray-900 text-white">

        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-14">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* Logo & About */}
            <div>
              <h2 className="text-3xl font-bold text-pink-500">
                BookStore
              </h2>

              <p className="mt-4 text-gray-400 leading-7">
                Discover thousands of books, novels and learning resources.
                Read your favourite stories anytime anywhere.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Quick Links
              </h3>

              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-pink-500 cursor-pointer">Home</li>
                <li className="hover:text-pink-500 cursor-pointer">Books</li>
                <li className="hover:text-pink-500 cursor-pointer">Courses</li>
                <li className="hover:text-pink-500 cursor-pointer">Contact</li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Support
              </h3>

              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-pink-500 cursor-pointer">Help Center</li>
                <li className="hover:text-pink-500 cursor-pointer">Privacy Policy</li>
                <li className="hover:text-pink-500 cursor-pointer">Terms & Conditions</li>
                <li className="hover:text-pink-500 cursor-pointer">FAQs</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Newsletter
              </h3>

              <p className="text-gray-400 mb-4">
                Subscribe to get latest updates.
              </p>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg text-black outline-none"
              />

              <button className="btn btn-primary mt-4 w-full">
                Subscribe
              </button>
            </div>

          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">

            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} BookStore. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 mt-4 md:mt-0">

              <a href="/" className="hover:text-pink-500 duration-300">
                Facebook
              </a>

              <a href="/" className="hover:text-pink-500 duration-300">
                Instagram
              </a>

              <a href="/" className="hover:text-pink-500 duration-300">
                Twitter
              </a>

            </div>

          </div>

        </div>

      </footer>
    </>
  
  )
}

export default Footer
