import React from 'react'
import Image from 'next/image'
const Footerr = () => {
  return (
    <div className="">
      <div className="">
        <div className="map mb-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4410136005313!2d72.81818181433687!3d19.04433805791724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9410830616d%3A0x111b63353dbbce01!2sFr.%20Conceicao%20Rodrigues%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1660900113753!5m2!1sen!2sin"
            width="100%"
            height="300px"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-10"
          ></iframe>
        </div>
      </div>
      <div className="bg-gray-1000 rounded-2xl p-10">
        <div className="grid gap-20 px-10 py-5 sm:grid-cols-1 lg:grid-cols-5">
          <div className="items-center justify-start gap-10 lg:col-span-3">
            <Image
              src="/assets/gdsc_logo.png"
              height={100}
              width={100}
              alt="gdsc_logo"
              className="items-center justify-center"
            ></Image>
            <div>
              <h2 className="mt-2 text-3xl text-white">
                Google Developer Student Clubs
              </h2>
              <h4 className="mb-1 text-lg text-white">
                Fr. Conceicao Rodrigues College of Engineering
              </h4>
            </div>
          </div>
          <div>
            <div className="sm:col-span-1 lg:col-span-1 lg:mt-8">
              <div className="pb-3 text-lg font-semibold uppercase text-white">
                Useful Links
              </div>
              <div className="grid">
                <div className="pb-4 text-gray-600 ease-in-out hover:translate-x-1 hover:text-red-500 hover:underline">
                  {' '}
                  <a href="/">Home </a>
                </div>
                <div className="pb-4 text-gray-600 ease-in-out hover:translate-x-1 hover:text-blue-500 hover:underline">
                  {' '}
                  <a href="#events">Events</a>
                </div>
                <div className="pb-4 text-gray-600 ease-in-out hover:translate-x-1 hover:text-green-500 hover:underline">
                  {' '}
                  <a href="#team">Our Team</a>
                </div>
                <div className="pb-4 text-gray-600 ease-in-out hover:translate-x-1 hover:text-yellow-500 hover:underline">
                  <a href="https://developers.google.com/community-guidelines">
                    Community Guidelines
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-1 lg:col-span-1 lg:mt-8">
            <div className="">
              <h1 className="p-1 text-3xl font-semibold">Contact us</h1>
              <h2 className="p-1">crcegdsc@gmail.com</h2>
            </div>
            <div className="flex flex-row py-4" id="foot">
              <div className="mr-10 flex h-12 w-12 items-center justify-center rounded-full bg-white bg-opacity-40">
                <a
                  className=""
                  href="https://www.instagram.com/gdsc_crce/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
              <div className="mr-10 flex h-12 w-12 items-center justify-center rounded-full bg-white bg-opacity-40">
                <a
                  className=""
                  href="https://www.linkedin.com/company/gdsc-crce/mycompany/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.76 0H3.24C1.45 0 0 1.45 0 3.24v17.52C0 22.55 1.45 24 3.24 24h17.52c1.79 0 3.24-1.45 3.24-3.24V3.24C24 1.45 22.55 0 20.76 0zM7.48 19.27H4.67V9.71h2.81v9.56h-.01zM6.08 8.06a2.12 2.12 0 1 1 0-4.24 2.12 2.12 0 0 1 0 4.24zM19.27 19.27h-2.81v-4.99c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.64v5.07h-2.81V9.71h2.7v1.4h.04c.37-.7 1.28-1.44 2.66-1.44 2.84 0 3.36 1.87 3.36 4.3v4.3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footerr