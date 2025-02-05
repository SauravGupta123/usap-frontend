import React from 'react';

const expertsData = [
  {
    id: 1,
    name: 'Kartik Panday',
    image: '/GlobalResearchExpertImages/kartikey.png',
    role: 'PhD Candidate',
    field: 'Nano Science / Material Chemistry',
    country: 'France',
  },
  {
    id: 2,
    name: 'Urcel Kalenga',
    image: '/GlobalResearchExpertImages/urcel.jpg',
    role: 'PostDoc',
    field: 'GIS and remote sensing',
    country: 'France',
  },
  {
    id: 3,
    name: 'Mehtab Alam SYED',
    image: '/GlobalResearchExpertImages/Mehtab.jpg',
    role: 'PhD Student',
    field: 'Epidemiology (One Health), Text Mining, NLP, Information Retrieval',
    country: 'France',
  },
  {
    id: 4,
    name: 'Jasmine P Jacob',
    image: '/GlobalResearchExpertImages/Jasmin.jpg',
    role: 'PhD student at University of Tours, France',
    field: 'Thermoelectric application (Chemistry)',
    country: 'France',
  },
  {
    id: 5,
    name: 'Balasai Vanukuri',
    image: '/GlobalResearchExpertImages/Balasai.png',
    role: 'PhD Student',
    field: 'Economics',
    country: 'France',
  },
  {
    id: 6,
    name: 'Pierre Vendé',
    image: '/GlobalResearchExpertImages/Pierre.png',
    role: 'PhD student, Non-Tenured Teaching and Research Associate',
    field: 'Operation research, Optimization, Sustainable transportation',
    country: 'France',
  },
];

function ExpertCard({ expert }) {
  return (
    <div className='bg-gradient-to-b from-[#1E40AF] to-[#3B82F6] w-full sm:w-[48%] lg:w-[30%] h-auto min-h-[450px] rounded-[32px] flex flex-col items-center justify-center space-y-4 p-4 mb-6'>
      <div className='rounded-full border-[6px] border-[#B88027] w-[120px] h-[120px] overflow-hidden text-black'>
        <img
          className='w-full h-full object-cover'
          src={expert.image}
          alt={expert.name}
        />
      </div>
      <h6 className="text-white text-center font-bold text-xl tracking-wide bg-gradient-to-r from-[#0297FF] to-[#00D1FF] p-2 rounded-full shadow-md">
        {expert.name}
      </h6>
      <p className='text-white font-poppins font-medium text-lg text-center'>
        {expert.role}
      </p>
      <p className='text-white font-poppins font-medium text-lg text-center'>
        {expert.field}
      </p>
      <div className='flex flex-row justify-around items-center space-x-2'>
        <img src='/GlobalResearchExpertImages/France.svg' alt={expert.country} />
        <p className='text-white font-poppins font-medium text-lg'>
          {expert.country}
        </p>
      </div>
      <div className='flex flex-row justify-center items-center'>
        <img src='/GlobalResearchExpertImages/Mail.svg' alt='mail' />
      </div>
    </div>
  );
}

function Comp1() {
  return (
    <div className='w-full h-auto space-y-6 pt-8'>
      <div className='flex flex-col w-full items-center justify-center space-y-4 px-4'>
        <h6 className="text-white font-poppins font-extrabold text-xl sm:text-2xl lg:text-4xl px-4 sm:px-8 lg:px-16 tracking-wide bg-[#C62828] p-2 rounded-full shadow-md text-center">
          Our France Research Experts
        </h6>
        <p className='text-black font-poppins font-normal text-lg lg:text-xl text-center max-w-3xl'>
          Our experienced experts help you advance towards your desired outcomes.
        </p>
      </div>
      <div className='bg-[#F8F8F8] w-full py-10'>
        <div className=' mx-auto px-4'>
          <div className='flex flex-wrap justify-center gap-4'>
            {expertsData.map(expert => (
              <ExpertCard key={expert.id} expert={expert} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp1;