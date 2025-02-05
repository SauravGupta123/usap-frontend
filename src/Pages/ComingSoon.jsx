import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Bell } from 'lucide-react';

const ComingSoonPage = () => {
    const navigate = useNavigate();
    
  return (
    <div className="min-h-screen flex flex-col bg-white text-navy-blue font-sans">
      <main className="flex-grow flex flex-col items-center justify-center p-8 text-center">
        <h1 className=" mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl "><span className='text-red-800'>Coming</span> Soon</h1>
        <p className="text-xl mb-8 text-gray-600">We're working Hard to make Education Consult Servies better.</p>
        
        {/* <div className="mb-8">
          <img src="/api/placeholder/300/200" alt="EuropeanPay illustration" className="max-w-xs mx-auto" />
        </div> */}

        <button  onClick={()=>navigate('/login')} className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center hover:bg-blue-700 transition duration-300">
          Notify Me
        
        </button>
      </main>

      <footer className="p-4 text-center text-gray-600">
        <p>&copy; 2024 USAP. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ComingSoonPage;