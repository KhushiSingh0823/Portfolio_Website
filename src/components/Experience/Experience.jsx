import React from 'react';
import { experiences } from '../../constants';

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {experiences.map((experience, index) => {
          const isRight = index % 2 === 0;

          return (
            <div
              key={experience.id}
              className={`relative mb-20 flex flex-col sm:flex-row items-center ${
                isRight ? 'sm:justify-end' : 'sm:justify-start'
              }`}
            >
              {/* Timeline Circle with Logo */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-16 h-16 bg-white border-4 border-[#8245ec] rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
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
                {/* Inside Card: Logo + Role + Company + Date */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-full overflow-hidden">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                    <h4 className="text-sm text-gray-300">{experience.company}</h4>
                    <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400">{experience.desc}</p>

                {/* Skills */}
                <div className="mt-4">
                  <h5 className="font-medium text-white">Skills:</h5>
                  <ul className="flex flex-wrap mt-2">
                    {experience.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
