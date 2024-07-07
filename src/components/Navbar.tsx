'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'What We Do', href: '/services' },
  { name: 'Events', href: '/portfolio' },
  { name: 'Our Team', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
]

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10

      setVisible(visible)
      setPrevScrollPos(currentScrollPos)
      setHasScrolled(true)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    // Add logic here to actually change the theme
  }

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 text-center transition-transform duration-300 ease-in-out ${
          hasScrolled ? (visible ? 'translate-y-0' : '-translate-y-full') : '-translate-y-full'
        }`}
      >
        <div className={`mx-4 my-2 rounded-full border-2 ${isDarkMode ? 'border-gray-700 bg-black' : 'border-gray-200 bg-white'} shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              {/* Logo */}
              <div className="flex flex-shrink-0 items-center lg:flex-1">
                <Link href="/" className="flex justify-center lg:justify-start">
                  <Image
                    src="/gdsc_logo.png"
                    alt="Google Developer Student Clubs Logo"
                    width={400}
                    height={45}
                    sizes="(max-width: 480px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, (max-width: 1200px) 60vw, 40vw"
                    className="h-auto w-full min-w-[250px] max-w-[400px] lg:max-w-[350px]"
                    quality={100}
                  />
                </Link>
              </div>

              {/* Desktop navigation */}
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`rounded-md px-3 py-2 text-center text-lg font-medium transition-colors duration-200 hover:bg-gray-700 hover:text-white ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Dark mode toggle for desktop */}
              <div className="hidden lg:block lg:pl-4">
                <button onClick={toggleDarkMode} className="p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    {isDarkMode ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    )}
                  </svg>
                </button>
              </div>

              {/* Mobile menu and dark mode toggle */}
              <div className="flex items-center lg:hidden">
                {/* Dark mode toggle for mobile */}
                <button onClick={toggleDarkMode} className="p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    {isDarkMode ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    )}
                  </svg>
                </button>

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`inline-flex items-center justify-center rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${
                    isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-200'
                  }`}
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-50' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-24 z-50 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className={`mx-4 overflow-hidden rounded-3xl border-2 ${
            isDarkMode ? 'border-gray-700 bg-black' : 'border-gray-200 bg-white'
          } shadow-lg transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[calc(100vh-7rem)]' : 'max-h-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-4 pb-4 pt-5 sm:px-6">
            <div className="mt-6">
              <nav className="grid gap-y-8 text-center">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`rounded-md px-3 py-2 text-lg font-medium transition-colors duration-200 hover:bg-gray-700 hover:text-white ${
                      isDarkMode ? 'text-white' : 'text-black'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar