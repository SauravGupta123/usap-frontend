import React, { useEffect } from 'react';
// import UnderConstruction from '../../UnderConstruction';
import NavBar from '../../HomePageComponents/NavBar';
import Footer from '../../HomePageComponents/Footer';
import { Typography } from '@material-tailwind/react';
import pdflogo from '../../../Assets/pdfimg.png';
import rlogo from '../../../Assets/rlogo.png';
import sharelogo from '../../../Assets/sharelogo.png';
import logo03 from '../../../Assets/logo03.png';
import logo02 from '../../../Assets/logo02.png';

const JowerPaper = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

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
        <div className='w-[50%] h-[60px] sm:h-[70px] lg:h-[80px] bg-[#599121] flex items-center justify-center rounded-[2rem] m-8 mt-12'>
          <Typography
            variant='h1'
            color='white'
            className=' text-center text-[30px] sm:text-[35px] lg:text-[40px] tracking-tighter  font-inter'
          >
            Jowar Paper
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
              Ayush Kumar ; Praveen Kumar
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
              <br /> Jowar (Sorghum bicolor), a staple cereal crop, holds
              significant importance in global agriculture due to its resilience
              in diverse agroclimatic conditions and its potential to address
              food security challenges. This research paper presents an
              integrated review of key research perspectives on jowar
              cultivation spanning the years 2018 to 2022. The paper covers
              various dimensions of jowar research, including genetics and
              breeding, agronomy and physiology, pest and disease management,
              food and nutritional aspects, climate change implications,
              post-harvest management, and economic and social considerations.
              In the domain of genetics and breeding, studies during this period
              have focused on unraveling the genetic diversity within jowar
              germplasm, employing marker-assisted selection for drought
              tolerance and yield enhancement, and the identification of genomic
              resources and quantitative trait loci (QTLs) associated with
              essential agronomic traits. Advances in jowar agronomy and
              physiology have explored the underlying physiological mechanisms
              contributing to drought tol- erance, investigated the effects of
              various agronomic practices on yield and quality, and optimized
              nutrient management strategies to enhance overall crop
              productivity. Research efforts in pest and disease management have
              centered on the development of integrated strategies to combat
              major pests and diseases affecting jowar, utilizing both molecular
              approaches for disease resistance enhancement and environmentally
              friendly biological control methods. Furthermore, investigations
              into jowar’s food and nutritional aspects have led to a deeper
              understanding of its nutritional composition and potential health
              benefits. The development of value-added jowar-based products and
              the impact of processing techniques on product quality have also
              been explored. In light of climate change scenarios, studies have
              aimed to evaluate jowar’s response to changing climatic conditions
              and assess the effects of elevated carbon dioxide levels on growth
              and yield parameters. The post-harvest management of jowar has
              been examined, with a focus on storage technologies and strategies
              to mitigate post-harvest losses, ensuring the maintenance of grain
              quality and nutritional value. Economic analyses have highlighted
              the viability of jowar cultivation in various regions, while
              investigations into the so- cioeconomic impact of jowar-based
              farming systems have shed light on their role in supporting rural
              communities. Overall, this paper underscores the multifaceted
              research efforts undertaken between 2018 and 2022 to enhance our
              under- standing of jowar cultivation, encompassing genetics,
              agronomy, pest management, nutrition, climate change adaptation,
              post- harvest practices, and socioeconomics. The collective
              findings contribute to a comprehensive framework for sustainable
              jowar production and utilization in a changing agricultural
              landscape.
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
                Ayush Kumar
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
            [1] D. P. Gadhe, S. P. Gadhe, D. B. Nalawade and K. V. Kale, "Jowar
            (Sorghum) Crop Health Assessment Using Hyperspectral Data," 2021
            IEEE India Council International Subsections Conference (INDISCON),
            NAGPUR, India, 2021, pp. 1-6, doi:
            10.1109/INDISCON53343.2021.9582154.
            <br /> <br /> [2] S. S. Wankhede, L. J. Armstrong and N. Gandhi,
            "Characterising the influence of drought on Jowar crop production in
            India using association rule mining," 2017 IEEE Technological
            Innovations in ICT for Agriculture and Rural Development (TIAR),
            Chennai, India, 2017, pp. 57-63, doi: 10.1109/TIAR.2017.8273686.
            <br /> <br /> [3] M. Adi, A. H. Reddy, A. K. Singh and P. Rana,
            "Jowar Plant Leaf Disease Detection Using Deep Learning," 2021 9th
            International Conference on Reliability, Infocom Technologies and
            Optimization (Trends and Future Directions) (ICRITO), Noida, India,
            2021, pp. 1-6, doi: 10.1109/ICRITO51393.2021.9596535. <br /> <br />
            [4] A.V. Ratna Prasad, K. Mohana Rao, Mechanical properties of
            natural fibre reinforced polyester composites: Jowar, sisal and
            bamboo, Materials & Design, Volume 32, Issues 8–9, 2011, Pages
            4658-4663, ISSN 0261-3069 ,
            <a
              href='https://doi.org/10.1016/j.matdes.2011.03.015'
              className='underline'
              target='blank'
            >
              https://doi.org/10.1016/j.matdes.2011.03.015
            </a>
            . <br /> <br />
            [5] Ahmed, Sohail & Saleem, Dr. Mushtaq A. & Rauf, Imran. (2023).
            Field Efficacy of Some Bioinsecticides Against Maize and Jowar Stem
            Borer, Chilo Partellus (Pyralidae: Lepidoptera). <br /> <br />
            [6] Valérie Orsat, Ramesh Murugesan, Debasri Ghosh, Chemistry of
            Millets: Major and Minor Constituents, Handbook of Millets -
            Processing, Quality, and Nutrition Status,
            10.1007/978-981-16-7224-8_6, (103-128), (2022). <br /> <br />
            [7] Liping Yang, Yong Liu, Jianting Yang, Chuanlai Du, Ligong Zhai,
            Changes in the multi‐scale structure and physicochemical properties
            of starch during potato growth, Journal of the Science of Food and
            Agriculture, 10.1002/jsfa.11245, 101, 14, (5927-5937), (2021). View
            <br /> <br />
            [8] S Pande, R Bandyopadhyay, M Blümmel, J Narayana Rao, D Thomas,
            S.S Navi, Disease management factors influencing yield and quality
            of sorghum and groundnut crop residues, Field Crops Research, Volume
            84, Issues 1–2, 2003, Pages 89-103, ISSN 0378-4290,
            <a
              href='https://doi.org/10.1016/S0378-4290(03)00143-6'
              className='underline'
              target='blank'
            >
              https://doi.org/10.1016/S0378-4290(03)00143-6
            </a>
            . <br /> <br />
            [9] Jadhav, Vaishali and ., Monisha, Wheat and Jowar Crop Yield
            Prediction Model using Ensemble Technique (May 7, 2021). Proceedings
            of the 4th International Conference on Advances in Science &
            Technology (ICAST2021), Available at SSRN:
            <a
              href='https://ssrn.com/abstract=3867626'
              className='underline'
              target='blank'
            >
              https://ssrn.com/abstract=3867626
            </a>
            or{' '}
            <a
              href='http://dx.doi.org/10.2139/ssrn.3867626'
              className='underline'
              target='blank'
            >
              http://dx.doi.org/10.2139/ssrn.3867626
            </a>{' '}
            <br /> <br />
            [10] S Pande, R Bandyopadhyay, M Blümmel, J Narayana Rao, D Thomas,
            S.S Navi, Disease management factors influencing yield and quality
            of sorghum and groundnut crop residues, Field Crops Research, Volume
            84, Issues 1–2, 2003, Pages 89-103, ISSN 0378-4290,
            <a
              href='https://doi.org/10.1016/S0378-4290(03)00143-6'
              className='underline'
              target='blank'
            >
              https://doi.org/10.1016/S0378-4290(03)00143-6
            </a>
            .
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
            Jowar, Sorghum bicolor, resilient agriculture, sustainable food
            production, climate change, nutritional security, environmental
            benefits, smallholder farming, crop diversification, policy
            recommendations.
          </Typography>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JowerPaper;
