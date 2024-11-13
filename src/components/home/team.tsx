import React from 'react';
import { Github, Linkedin, Facebook } from 'lucide-react'; // Import Lucid icons

const Team = () => {
  const teamMembers = [
    { id: 1, image: '/team/Team-7.png', name: 'Weny Robinson', role: 'UI/UX Designer' },
    { id: 2, image: '/team/Team.png', name: 'Tasha Grant', role: 'Developer' },
    { id: 3, image: '/team/Team-5.png', name: 'Laura Murray', role: 'Marketing' },
    { id: 4, image: '/team/Team-4.png', name: 'James Haris', role: 'Developer' },
    { id: 5, image: '/team/Team-3.png', name: 'Brandon Alex', role: 'Marketing' },
    { id: 6, image: '/team/Team-2.png', name: 'Dana Rouse', role: 'Color Artist' },
    { id: 7, image: '/team/Team-1.png', name: 'Dale S. Smith', role: 'UI Designer' },
    { id: 8, image: '/team/Team.png', name: 'Tasha Grant', role: 'Developer' },
  ];

  return (
    <div className="text-white bg-[#020415]">
      <div className="max-w-[1200px] mx-auto py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-y-10 border-b-[1px] border-[#171443]">
        {teamMembers.map((member) => (
          <div key={member.id} className="text-center space-y-3 relative">
            <div className="relative group">
              {/* Image with darkening effect */}
              <img
                src={member.image}
                alt={member.name}
                className="w-[215px] h-[215px] rounded-full mx-auto transition-all duration-300 group-hover:opacity-80"
              />
              {/* Overlay for darkening the image */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              {/* Social links container */}
              <div className="absolute inset-0 bg-[#020415] bg-opacity-50 flex justify-center items-center pl-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="space-x-4 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300">
                  {/* Social icons */}
                  <a href="#" className="text-white hover:text-[#745CEC]">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="text-white hover:text-[#745CEC]">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="text-white hover:text-[#745CEC]">
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
            <h3 className="text-[20px] font-semibold">{member.name}</h3>
            <p className="text-[18px] text-[#735CEA]">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
