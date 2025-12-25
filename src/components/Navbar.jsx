import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import { motion, AnimatePresence } from "motion/react"

const Navbar = ({ theme, setTheme, setShowProducts, setShowContact, setShowToolSpace, setShowOurProjects, setShowQuboAI, showQuboAI }) => {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [popupOpen, setPopupOpen] = useState(false) // State for popup visibility
  const [activePage, setActivePage] = useState('home') // Track active page

  const handleNavigation = (section) => {
    setSidebarOpen(false)
    if (section === 'products') {
      setActivePage('products')
      setShowProducts(true)
      setShowContact(false)
      setShowToolSpace(false)
      setShowOurProjects(false)
      setShowQuboAI(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (section === 'contact-us') {
      setActivePage('contact-us')
      setShowContact(true)
      setShowProducts(false)
      setShowToolSpace(false)
      setShowOurProjects(false)
      setShowQuboAI(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (section === 'tool-space') {
      setActivePage('tool-space')
      setShowToolSpace(true)
      setShowProducts(false)
      setShowContact(false)
      setShowOurProjects(false)
      setShowQuboAI(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (section === 'qubo-ai') {
      setActivePage('qubo-ai')
      setShowQuboAI(true)
      setShowProducts(false)
      setShowContact(false)
      setShowToolSpace(false)
      setShowOurProjects(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setActivePage(section === 'hero' ? 'home' : section)
      setShowQuboAI(false)
      setShowProducts(false)
      setShowContact(false)
      setShowToolSpace(false)
      setShowOurProjects(false)
      setTimeout(() => {
        const element = document.getElementById(section)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        } else if (section === 'hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <>
      {/* Premium Glassmorphism Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4"
      >
        {/* Navbar Container with Enhanced Frosty Glass Effect */}
        <div className={`
          mx-auto max-w-6xl
          rounded-full
          ${showQuboAI
            ? 'bg-white/10 dark:bg-black/20 border border-white/20'
            : 'bg-white/90 dark:bg-gray-900/90 border border-gray-300/30 dark:border-white/10'
          }
          backdrop-blur-2xl backdrop-saturate-200
          shadow-lg shadow-black/5 dark:shadow-black/20
          transition-all duration-300
        `}>
          <div className="flex justify-between items-center px-6 lg:px-8 py-3">

            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex items-center flex-shrink-0"
            >
              <img
                src={theme === 'dark' ? assets.logo_dark || 'https://via.placeholder.com/150' : assets.logo}
                className='h-7 w-auto'
                alt='Logo'
              />
            </motion.div>

            {/* Desktop Navigation Links */}
            <nav className='hidden lg:flex items-center gap-1'>
              {[
                { id: 'hero', label: 'Home', page: 'home' },
                { id: 'services', label: 'Services', page: 'services' },
                { id: 'products', label: 'Products', page: 'products' },
                { id: 'tool-space', label: 'Tool Space', page: 'tool-space' },
                { id: 'qubo-ai', label: 'Alphery AI', page: 'qubo-ai' },
              ].map((item) => (
                <a
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`
                    relative px-4 py-2 text-sm font-medium cursor-pointer rounded-lg
                    inline-flex items-center h-10
                    transition-all duration-200
                    ${showQuboAI
                      ? 'text-white hover:text-white/80 hover:bg-white/10'
                      : activePage === item.page
                        ? 'text-primary dark:text-primary-light'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5'
                    }
                    ${activePage === item.page && !showQuboAI ? 'after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-primary dark:after:bg-primary-light' : ''}
                  `}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right Section - Theme Toggle & CTA */}
            <div className='flex items-center gap-2'>

              {/* Theme Toggle - Desktop Only */}
              <div className='hidden sm:flex items-center h-10'>
                <ThemeToggleBtn theme={theme} setTheme={setTheme} />
              </div>

              {/* Premium CTA Button - Desktop */}
              <motion.button
                onClick={() => setPopupOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  hidden lg:flex items-center gap-2 
                  px-5 h-10 rounded-full
                  text-sm font-semibold
                  transition-all duration-300
                  ${showQuboAI
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'
                  }
                  shadow-md hover:shadow-lg
                `}
              >
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-white/5 transition-colors"
                aria-label="Open menu"
              >
                <svg
                  className={`w-6 h-6 ${showQuboAI ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Premium Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                <img
                  src={theme === 'dark' ? assets.logo_dark : assets.logo}
                  className='h-8 w-auto'
                  alt='Logo'
                />
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Sidebar Navigation */}
              <nav className="p-6 space-y-2">
                {[
                  { id: 'hero', label: 'Home', page: 'home' },
                  { id: 'services', label: 'Services', page: 'services' },
                  { id: 'products', label: 'Products', page: 'products' },
                  { id: 'tool-space', label: 'Tool Space', page: 'tool-space' },
                  { id: 'qubo-ai', label: 'Alphery AI', page: 'qubo-ai' },
                ].map((item) => (
                  <a
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`
                      block px-4 py-3 rounded-lg font-medium cursor-pointer
                      transition-all duration-200
                      ${activePage === item.page
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                      }
                    `}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Sidebar Footer */}
              <div className="p-6 space-y-4 border-t border-gray-200 dark:border-gray-800">
                {/* Theme Toggle */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
                  <ThemeToggleBtn theme={theme} setTheme={setTheme} />
                </div>

                {/* Mobile CTA */}
                <button
                  onClick={() => {
                    setSidebarOpen(false);
                    setPopupOpen(true);
                  }}
                  className="w-full px-5 py-3 rounded-lg bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-semibold hover:opacity-90 transition-opacity"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Popup Container */}
      {/* Popup Container */}
      <AnimatePresence>
        {popupOpen && (
          <div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/20'
            onClick={() => setPopupOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className='relative w-[340px] p-6 rounded-[2.5rem] bg-white/70 dark:bg-black/60 backdrop-blur-2xl backdrop-saturate-150 border border-white/50 dark:border-white/20 shadow-2xl overflow-hidden'
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative flex justify-between items-center mb-6 pl-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 tracking-tight">Connect with us</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Let's discuss what you need !</p>
                </div>
                <button
                  onClick={() => setPopupOpen(false)}
                  className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
                </button>
              </div>

              {/* Actions Grid */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+918838362439"
                  className="flex flex-col items-center justify-center py-5 px-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200 cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Call</span>
                </a>

                <a
                  href="https://wa.me/918838362439"
                  target="_blank"
                  className="flex flex-col items-center justify-center py-5 px-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200 cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-2 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">WhatsApp</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="flex flex-col items-center justify-center py-5 px-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200 cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400 mb-2 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Instagram</span>
                </a>

                <a
                  href="#contact-us"
                  className="flex flex-col items-center justify-center py-5 px-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200 cursor-pointer group"
                  onClick={() => {
                    setPopupOpen(false);
                    handleNavigation('contact-us');
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400 mb-2 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17.6A2.05 2.05 0 0 0 2.5 19c0 1.1.9 2 2 2h15a2 2 0 0 0 2-2 2.05 2.05 0 0 0-.5-1.4l-5.6-5.9c-.3-.4-.8-.6-1.4-.6h-3c-1.1 0-2 .9-2 2" /></svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Quote</span>
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar

