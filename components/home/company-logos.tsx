import React from 'react';
import Image from 'next/image';

const CompanyLogos = () => {
  const companies = [
    {
      name: 'Boeing',
      logo: 'https://mpug.com/wp-content/smush-webp/2024/04/Boeing-Logo-01-150x39.png.webp',
    },
    {
      name: 'NASA',
      logo: 'https://mpug.com/wp-content/smush-webp/2024/04/Nasa-Logo-01-2-150x39.png.webp',
    },
    {
      name: 'Harvard',
      logo: 'https://mpug.com/wp-content/smush-webp/2024/04/Harvard-Logo-01-2-150x39.png.webp',
    },
    {
      name: 'Envorso',
      logo: 'https://mpug.com/wp-content/smush-webp/2024/04/ENVORSO-LOGO-01-150x39.png.webp',
    },
    {
      name: 'T-Mobile',
      logo: 'https://mpug.com/wp-content/smush-webp/2024/04/T-mobiel-Logo-01-150x39.png.webp',
    },
    {
      name: 'Houston',
      logo: 'https://mpug.com/wp-content/uploads/2024/02/Screenshot-2024-02-15-at-7.57.54%E2%80%AFAM-1-1.png',
    },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Empowering Project Teams at Leading Companies
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by top organizations worldwide for project management excellence
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <div 
              key={company.name}
              className="w-32 h-16 relative flex items-center justify-center"
            >
              <Image
               src={company.logo} // Use the company's logo URL
               alt={`${company.name} logo`}
               width={128} // Specify width
               height={64} // Specify height
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;