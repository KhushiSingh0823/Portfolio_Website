import React from 'react';
import { education } from '../../constants';

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {education.map((edu, index) => {
          const isRight = index % 2 !== 0; // If index is odd, place content on the right

          return (
            <div
              key={edu.id}
              className={`relative mb-20 flex flex-col sm:flex-row items-center ${
                isRight ? 'sm:justify-end' : 'sm:justify-start'
              }`}
            >
              {/* Timeline Circle with Logo */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-16 h-16 bg-white border-4 border-[#8245ec] rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Card */}
              <div
                className={`w-full sm:max-w-md p-6 mt-20 bg-gray-900 border border-white rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] backdrop-blur-md transform transition-transform duration-300 hover:scale-105 z-20 ${
                  isRight ? 'sm:ml-10 sm:pl-20' : 'sm:mr-10 sm:pr-20'
                }`}
              >
                {/* Inside Card: Logo + Degree + School + Date */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-full overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <h4 className="text-sm text-gray-300">{edu.school}</h4>
                    <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400">{edu.desc}</p>

                {/* Grade */}
                <p className="text-gray-400 font-bold mt-4">Grade: {edu.grade}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
