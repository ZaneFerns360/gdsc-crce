import React from 'react'

const AboutUs = () => {
  return (
    <div
      className="container mx-auto scroll-mt-96 xl:py-16 p-4 max-sm:mt-0"
      id="about"
    >
      <div className="flex justify-center">
        <h3 className="text-gray-700 text-5xl max-lg:text-4xl max-md:text-4xl max-sm:text-3xl mb-6 py-3 px-4 font-poppins x-shadow-yellow text-center w-auto items-center justify-center max-sm:mt-0">
          About Us
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-10 max-sm:px-2">
        {/* Card 1 */}
        <div className="overflow-hidden feature-card p-5 d-shadow-blue">
          <div className="flex items-center justify-center w-10 h-10  rounded-full mb-4 mx-4">
            <svg
              className="w-8 h-8 text-xl text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>
          <div className="font-poppins font-bold text-xl mb-3">
            <h4 className="text-gray-500 mx-4 font-poppins">Concept of GDSC</h4>
          </div>
          <p className="text-gray-700 font-poppins text-base mx-4">
            The GDSC program is a grassroots channel through which Google
            provides development, mobile & web development skills for students,
            towards employability.
          </p>
        </div>

        {/* Card 2 */}
        <div className="overflow-hidden d-shadow-green feature-card p-5">
          <div className="flex items-center justify-center w-10 h-10 rounded-full mb-4 mx-4">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M22 12h-4l-3 9L9 3l-3 9H2"
              />
            </svg>
          </div>
          <div className="font-bold font-poppins text-xl mb-2">
            <h4 className="text-gray-500 mx-4">Why GDSC?</h4>
          </div>
          <p className="text-gray-700 font-poppins text-base mx-4">
            For students to learn development skills, solve problems through
            technology and inspire them to be world class developers and change
            makers.
          </p>
        </div>

        {/* Card 3 */}
        <div className="overflow-hidden d-shadow-red feature-card p-5">
          <div className="flex items-center justify-center w-10 h-10  rounded-full mb-4 mx-4">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div className="font-bold text-xl mb-2">
            <h4 className="text-gray-500 mx-4">Target audience</h4>
          </div>
          <p className="text-gray-700 text-base mx-4">
            GDSC activities are targeted at University students and any others
            including faculty members who want to learn development skills &amp;
            work to solve real-life problems.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
