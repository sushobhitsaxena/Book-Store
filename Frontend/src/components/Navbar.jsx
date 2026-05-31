import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Login from './Login'

function Navbar() {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  )

  const [sticky, setSticky] = useState(false)

  // Apply Theme
  useEffect(() => {

    document.documentElement.setAttribute("data-theme", theme)

    localStorage.setItem("theme", theme)

  }, [theme])

  // Navbar Highlight on Scroll
  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setSticky(true)
      } else {
        setSticky(false)
      }

    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  // Theme Toggle
  const handleTheme = (e) => {

    if (e.target.checked) {
      setTheme("dark")
    }
    else {
      setTheme("light")
    }

  }

  return (
    <>

      <div
        className={`navbar px-2 md:px-5 sticky top-0 z-50 transition-all duration-300

        ${sticky
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)]"
            : "bg-[#0f172a] text-white shadow-lg"
          }

        `}
      >

        {/* Left Side */}
        <div className="navbar-start">

          {/* Mobile Dropdown */}
          <div className="dropdown">

            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />

              </svg>

            </div>

            {/* Mobile Menu */}
         <ul
  tabIndex={0}
  className="
    menu
    menu-sm
    dropdown-content
    bg-white
    text-black
    rounded-box
    z-[1]
    mt-3
    w-52
    p-3
    shadow-lg
    border
  "
>

              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/Courses">Course</Link>
              </li>

              <li>
                <Link to="/Contact">Contact</Link>
              </li>

              <li>
                <Link to="/About">About</Link>
              </li>

            </ul>

          </div>

          {/* Logo */}
          <Link
            to="/"
            className="
              text-lg
              md:text-3xl
              font-extrabold
              cursor-pointer
              tracking-wide
              whitespace-nowrap
            "
          >

            <span className='text-primary'>
              Book
            </span>

            <span className='text-pink-500'>
              -Store
            </span>

          </Link>

        </div>

        {/* Center Menu */}
        <div className="navbar-center hidden lg:flex">

          <ul className="menu menu-horizontal px-1 gap-2 text-lg">

            <li>
              <Link
                to="/"
                className="font-semibold hover:bg-primary hover:text-white rounded-lg transition duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/Courses"
                className="font-semibold hover:bg-primary hover:text-white rounded-lg transition duration-300"
              >
                Course
              </Link>
            </li>

            <li>
              <Link
                to="/Contact"
                className="font-semibold hover:bg-primary hover:text-white rounded-lg transition duration-300"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/About"
                className="font-semibold hover:bg-primary hover:text-white rounded-lg transition duration-300"
              >
                About
              </Link>
            </li>

          </ul>

        </div>

        {/* Right Side */}
        <div className="navbar-end flex items-center gap-2 md:gap-4">

          {/* Search Box */}
          <input
            type="text"
            placeholder="Search"
            className="
              input
              input-bordered
              bg-white
              text-black
              placeholder:text-gray-500
              rounded-full
              w-14
              sm:w-20
              md:w-40
              h-8
              text-xs
              px-2
              focus:outline-none
              focus:ring-2
              focus:ring-pink-500
            "
          />

          {/* Premium Theme Toggle */}
          <label className="swap swap-rotate cursor-pointer">

            {/* Hidden Checkbox */}
            <input
              type="checkbox"
              onChange={handleTheme}
              checked={theme === "dark"}
            />

            {/* Sun Icon */}
            <div
              className="
                swap-off
                bg-pink-400
                p-2
                rounded-full
                shadow-lg
                hover:scale-110
                hover:rotate-12
                transition-all
                duration-300
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-7 md:w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 
                  6.364l-1.414-1.414M7.05 7.05 5.636 
                  5.636m12.728 0-1.414 1.414M7.05 
                  16.95l-1.414 1.414M12 8a4 4 0 100 8 
                  4 4 0 000-8z"
                />
              </svg>

            </div>

            {/* Moon Icon */}
            <div
              className="
                swap-on
                bg-gray-800
                p-2
                rounded-full
                shadow-lg
                hover:scale-110
                hover:-rotate-12
                transition-all
                duration-300
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-7 md:w-7 text-yellow-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 
                  3.646 9.003 9.003 0 0012 
                  21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>

            </div>

          </label>

          {/* Login Button */}
          <button
            className="
              btn
              btn-primary
              rounded-full
              px-3
              md:px-6
              text-xs
              md:text-sm
              text-white
              hover:scale-105
              transition
              duration-300
              shadow-lg
            "
            onClick={() => document.getElementById('my_modal_1').showModal()}
          >
            Login
          </button>

          {/* Login Modal */}
          <Login />

        </div>

      </div>

    </>
  )
}

export default Navbar