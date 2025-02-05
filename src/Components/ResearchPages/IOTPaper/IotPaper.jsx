import React, { useEffect } from 'react';
import NavBar from '../../HomePageComponents/NavBar';
import Footer from '../../HomePageComponents/Footer';
import { Typography } from '@material-tailwind/react';
import pdflogo from '../../../Assets/pdfimg.png';
import rlogo from '../../../Assets/rlogo.png';
import sharelogo from '../../../Assets/sharelogo.png';
import logo03 from '../../../Assets/logo03.png';
import logo02 from '../../../Assets/logo02.png';

const IotPaper = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-[rgb(247,247,254)] '>
      <NavBar />
      <div className='w-full flex items-center justify-end relative'>
        <div className='w-[15rem] flex items-center justify-center gap-6 absolute top-4 '>
          <img src={rlogo} alt='' className='w-6 cursor-pointer' />
          <img src={sharelogo} alt='' className='w-6 cursor-pointer' />
          <img src={logo02} alt='' className='w-6 cursor-pointer' />
          <img src={logo03} alt='' className='w-6 cursor-pointer' />
        </div>
      </div>
      <div className='w-full flex flex-col items-center justify-center'>
        <div className='w-auto md:w-[50%] h-[60px] sm:h-[70px] lg:h-[80px] bg-[#599121] flex flex-col items-center justify-center rounded-[2rem] m-8 mt-12'>
          <Typography
            variant='h1'
            color='white'
            className=' text-center text-[28px] sm:text-[33px] lg:text-[40px] tracking-tighter font-inter'
          >
            IOT Kit Paper
          </Typography>
          <Typography
            color='white'
            className='font-inter -mt-3 text-[12px] sm:text-[14px] lg:text-[16px] px-4'
          >
            Role of sensors in crop production by analysing soil health
          </Typography>
        </div>
      </div>

      <div className='w-full flex flex-col items-center justify-center'>
        <div className='w-[90%]'>
          {' '}
          <div className='w-[18rem] flex items-center justify-between py-1 px-4'>
            <Typography
              className='font-inter text-[14px] md:text-[16px]'
              variant='h5'
            >
              Publisher:USAP
            </Typography>
            <Typography
              className='font-inter cursor-pointer text-[14px] md:text-[16px]'
              variant='h5'
            >
              Cite link
            </Typography>
          </div>
        </div>
      </div>
      <div className='w-full py-1 px-4 flex flex-col items-center justify-center'>
        {' '}
        <div className='flex items-center justify-between w-[90%]'>
          <div className='w-[25rem] flex items-center justify-between'>
            <Typography className='font-inter text-[13px] md:text-[16px]'>
              Nandini Chauhan ; Praveen Kumar
            </Typography>
            <Typography
              className='font-inter text-[13px] md:text-[16px]'
              variant='h5'
            >
              All Authors
            </Typography>
          </div>
          <div className='bg-[#7BBB3B] drop-shadow-lg py-2 px-6 rounded-3xl text-white font-inter flex items-center justify-center cursor-pointer text-[13px] md:text-[16px]'>
            <img src={pdflogo} alt='' className='w-6 md:w-8' /> Download Full
            Paper
          </div>
        </div>
        <div className='w-[85%] bg-[#355198] h-[1px] mt-6'></div>
        <div className='w-full lg:w-[80%] flex items-start justify-center'>
          <div className='w-[20%] flex flex-col items-start justify-center'>
            <div className=' flex flex-col items-start justify-center lg:px-10 py-2'>
              <p className='w-[60%] mb-3 font-inter cursor-pointer font-semibold border-b-2 border-[#355198] pb-2 text-[11px] md:text-[16px]'>
                Abstract
              </p>
              <p className='my-5 font-inter cursor-pointer text-[11px] md:text-[16px] sm:static relative right-1'>
                Document Sections
              </p>
              <p className='my-5 font-inter cursor-pointer text-[11px] md:text-[16px] sm:static relative right-1'>
                I.Introduction
              </p>
              <p className='my-5 font-inter cursor-pointer text-[11px] md:text-[16px] sm:static relative right-1'>
                II.Materials and Methods
              </p>
              <p className='my-5 font-inter cursor-pointer text-[11px] md:text-[16px] sm:static relative right-1'>
                III.Proposed Methodology
              </p>
              <p className='my-5 font-inter cursor-pointer text-[11px] md:text-[16px] sm:static relative right-1'>
                IV.Results and Discussion
              </p>
              <p className='my-5 font-inter cursor-pointer text-[11px] md:text-[16px] sm:static relative right-2'>{`>>Conclusions`}</p>
            </div>
            <div className='flex flex-col items-start justify-center lg:px-10 py-4'>
              <p className='w-full my-3 font-inter cursor-pointer border-b-[1px] text-[12px] md:text-[16px] border-[#355198] py-2 flex items-center justify-start'>
                Authors
              </p>
              <p className='w-full my-3 font-inter cursor-pointer border-b-[1px] text-[12px] md:text-[16px] border-[#355198] py-2 flex items-center justify-start'>
                Figures
              </p>
              <p className='w-full my-3 font-inter cursor-pointer border-b-[1px] text-[12px] md:text-[16px] border-[#355198] py-2 flex items-center justify-start'>
                References
              </p>
              <p className='w-full my-3 font-inter cursor-pointer border-b-[1px] text-[12px] md:text-[16px] border-[#355198] py-2 flex items-center justify-start'>
                Keywords
              </p>
            </div>
          </div>
          <div className='w-[80%] text-[14px] font-inter flex flex-col'>
            <div className='border-b-[1px] border-[#355198] py-4 text-[10px] md:text-[16px]'>
              <p className='font-semibold -mb-4'> Abstract:</p>
              <br /> Crop production is a fundamental pillar of global food
              security, and ensuring optimal crop growth and yield relies
              heavily on understanding and managing soil health. Soil health,
              defined as the ability of the soil to support healthy plant growth
              while maintaining ecosystem functions, is a complex and dynamic
              parameter affected by various factors. In recent years, the
              integration of sensor technology into agriculture has
              revolutionised the way farmers monitor and analyse soil health,
              leading to more sustainable and efficient farming practices. This
              paper aims to present a detailed analysis of the pivotal role
              played by sensors in crop production through the assessment of
              soil health. Sensors provide real-time and continuous monitoring
              of key soil parameters, including moisture levels, nutrient
              content, pH, temperature, and humidity. These parameters are
              critical indicators of soil health, directly influencing plant
              growth, nutrient uptake, and overall crop performance. The
              utilisation of soil moisture sensors allows farmers to determine
              the optimal irrigation schedule and parameters , thereby
              preventing over utilization of fertilizer , water wastage . This
              precise analysis contributes to improved crop yields and enhanced
              nutrients efficiency.Furthermore, nutrient sensors enable accurate
              and precise of nutrient levels in the soil, facilitating informed
              decisions regarding fertiliser application and crop irrigation .
              By tailoring nutrient inputs based on sensor data, farmers can
              achieve optimal nutrient balance, minimise excess fertiliser use,
              and reduce the environmental impact caused by nutrient runoff and
              excess utilization . pH sensors provide insights into soil acidity
              or alkalinity, NPK sensor to a critical factor affecting nutrient
              availability and microbial activity in the soil. Adjusting pH and
              levels based on sensor readings allows farmers to create a more
              favourable environment for crop roots and beneficial soil
              microorganisms, ultimately enhancing nutrient uptake and plant
              health.Temperature sensors help in monitoring soil temperatures,
              which influence microbial activity, nutrient availability, and
              crop growth rates. By understanding temperature variations,
              farmers can implement suitable practices to protect crops from
              extreme temperatures and optimise growth conditions.The continuous
              and accurate data provided by these sensors empowers farmers to
              embrace precision agriculture practices. By fine-tuning
              irrigation, fertilisation, and other agricultural activities, they
              can achieve resource-efficient, environmentally friendly, and
              economically viable crop production systems.
            </div>
            <div className='py-4 text-[11px] md:text-[16px]'>
              <p className='font-semibold -mb-4 text-lg'>I.Introduction:</p>{' '}
              <br /> Agriculture is one of the most important aspects in our day
              to day life .Healthy and sufficient crops and food production are
              very much essential for everyone as the need for healthy food is
              increasing globally with the increasing population . The
              production of crops affects the economy of a country to a great
              extent as major parts of the country depend on agriculture only.
              In agriculture, observing the soil, weather like temperature
              ,pressure ,humidity ,nutrients, water level and, based on these
              factors, selecting an appropriate crop for maximum production ,
              finding the nutrient value for fertilizing the crop , analysing
              crop weather analysis , and having knowledge of crop cultivation
              with advance technology for better crop production........
            </div>
            <div className='bg-[#7BBB3B] drop-shadow-lg py-2 px-6 rounded-md text-white text-[14px] md:text-[16px] lg:text-lg font-inter w-60 sm:w-80 mt-6 mb-4 cursor-pointer '>
              Sign in to Continue Reading
            </div>
          </div>
        </div>
        <div className='w-[65%] bg-[#000] h-[1.3px] mt-6 md:relative left-[6.6rem]'></div>
        <div className='w-[90%] md:w-[50%] -ml-4 my-2'>
          <div className='w-auto md:w-[30rem] flex flex-col md:items-start items-center justify-center pt-3 '>
            <Typography
              variant='h6'
              className='font-inter text-[12px] md:text-[16px]'
            >
              Authors:
            </Typography>
            <div className='my-4'>
              {' '}
              <Typography
                variant='h6'
                className='font-inter text-[12px] md:text-[16px]'
              >
                Nandini Chauhan
              </Typography>
              <Typography className='font-inter text-[12px] md:text-[16px]'>
                Research And Development, SN SILOS, Punjab, India
              </Typography>
            </div>
            <div>
              <Typography
                variant='h6'
                className='font-inter text-[12px] md:text-[16px]'
              >
                Praveen Soni
              </Typography>
              <Typography className='font-inter text-[12px] md:text-[16px]'>
                Research And Development, SN SILOS, Punjab, India
              </Typography>
            </div>
          </div>
        </div>
        <div className='w-[65%] bg-[#000] h-[1.3px] mt-4 md:relative left-[6.6rem]'></div>
        <div className='w-[65%] md:relative left-[6.6rem]'>
          <div className='border-b-[1px] border-[#000] py-4 font-inter text-[12px] md:text-[16px]'>
            <p className='font-semibold -mb-4'>References:</p>
            <br /> <br />
            [1] Soledad Escolar D ́ıaz, Jes ́us Carretero P ́erez, Alejandro Calder
            ́on Mateos, Maria-Cristina Mari-nescu, and Borja Bergua Guerra. A
            novel methodology for the monitoring of the agriculturalproduction
            process based on wireless sensor networks. Computers and Electronics
            in Agriculture,76(2):252–265, 2011. <br /> <br /> [2] Ahmed Khattab,
            Ahmed Abdelgawad, and Kumar Yelmarthi. Design and implementation ofa
            cloud-based iot scheme for precision agriculture. In 2016 28th
            International Conference onMicroelectronics (ICM), pages 201–204.
            IEEE, 2016. <br /> <br />
            [3] Bradley Koch and Rajiv Khosla. The role of precision agriculture
            in cropping systems. Journal ofcrop production, 9(1-2):361–381,
            2003. <br /> <br />
            [4] VC Patil, KA Al-Gaadi, DP Biradar, and M Rangaswamy. Internet of
            things (iot) and cloudcomputing for agriculture: An overview.
            Proceedings of agro-informatics and precision agriculture(AIPA
            2012), India, 292:296, 2012. <br /> <br />
            [5] S. Rajeswari, K. Suthendran, and K. Rajakumar. A smart
            agricultural model by integratingiot, mobile and cloud-based big
            data analytics. In 2017 International Conference on
            IntelligentComputing and Control (I2C2), pages 1–5, 2017. <br />{' '}
            <br />
            [6] Redmond R. Shamshiri, Iva Bojic, Eldert van Henten, Siva K.
            Balasundram, Volker Dworak,Muhammad Sultan, and Cornelia Weltzien.
            Model-based evaluation of greenhouse microclimateusing iot-sensor
            data fusion for energy efficient crop production. Journal of Cleaner
            Production,263:121303, 2020
          </div>
        </div>
        <div className='w-[65%]  mt-4 md:relative left-[6.6rem] flex flex-col gap-6'>
          <Typography
            variant='h6'
            className='underline font-inter text-[13px] md:text-[16px]'
          >
            Keywords:
          </Typography>
          <Typography
            variant='h6'
            className=' font-inter text-[12px] md:text-[16px]'
          >
            Internet of Things , Wireless Sensor Network,Smart Farming , Crop
            Production,Agricultural Monitoring ,Precision Agriculture, Big Data
            and Artificial Intelligence
          </Typography>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IotPaper;
