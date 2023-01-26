import { Link } from 'react-router-dom';

const Home = () => (
  <section className='flex flex-col items-center mt-7 md:mt-20 xl:mt-0 px-6 xl:flex-row justify-around xl:px-0 h-full xl:items-end xl:pb-[131px] md:pb-[90px]'>
    <div className='flex flex-col text-primary text-center xl:text-start max-w-[327px] md:max-w-[450px] m-auto xl:m-0'>
      <p className='font-barlow leading-[19px] md:leading-[24px] xl:leading-[34px] tracking-[2.7px] md:tracking-[3.375px] xl:tracking-[4.725px] md:text-[20px] xl:text-[28px]'>
        SO, YOU WANT TO TRAVEL TO
      </p>
      <h1 className='text-white font-belle text-[80px] leading-[100px] md:leading-[150px] md:text-[150px] my-4 md:my-6 xl:my-9'>
        SPACE
      </h1>
      <p className='font-brl leading-[25px] md:leading-[28px] xl:leading-[32px] text-[15px] md:text-base xl:text-[18px] xl:max-w-[444px]'>
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
      </p>
    </div>
    <Link to="/destination" className='flex items-center justify-center font-belle bg-white rounded-full w-[150px] h-[150px] md:w-[242px] md:h-[242px] xl:w-[274px] xl:h-[274px] mt-[81px] md:mt-[156px] xl:mt-0 text-[20px] md:text-[32px] leading-[23px] md:leading-[37px] tracking-[1.25px] md:tracking-[2px] text-secondary cursor-pointer hover:shadow-[0_0_0_88px_rgba(255,255,255,0.1)] duration-500'>
      EXPLORE
    </Link>
  </section>
);

export default Home;
