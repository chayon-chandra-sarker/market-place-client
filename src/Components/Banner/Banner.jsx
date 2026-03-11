import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

//banner image
import bannarImg1 from "../../assets/bannarImg/bannar-imge-1.jpg";
import bannarImg2 from "../../assets/bannarImg/bannar-imge-2.jpg";
import bannarImg3 from "../../assets/bannarImg/bannar-imge-3.jpg";
import { Link } from "react-router";


const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper"
      >
      
        <SwiperSlide>
          <div
            className="relative min-h-[50vh] flex items-center justify-center"
            style={{
              backgroundImage: `url(${bannarImg1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
      
            <div className="absolute inset-0 bg-black/70"></div>

            
            <div className="relative text-center text-white px-4 py-4">
              <h1 className="mb-4 text-4xl md:text-5xl font-semibold">
                Best In World <br /> Visit The Best Job Portal in Bangladesh
              </h1>
              <p className="mb-6 text-lg max-w-xl mx-auto">
                Find your dream job or the perfect candidate in one place.
                Trusted by thousands of employers and job seekers across
                Bangladesh.
              </p>
              <button className="btn btn-outline btn-primary LatoSemibold text-xl">
                Post a Job
              </button>
            </div>
          </div>
        </SwiperSlide>

       
        <SwiperSlide>
          <div
            className="relative min-h-[50vh] flex items-center justify-center"
            style={{
              backgroundImage: `url(${bannarImg2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
      
            <div className="absolute inset-0 bg-black/70"></div>

           
            <div className="relative text-center text-white px-4 py-4">
              <h1 className="mb-4 text-4xl md:text-5xl font-semibold">
                Hire Faster <br /> Find Skilled Professionals
              </h1>
              <p className="mb-6 text-lg max-w-xl mx-auto">
                Post jobs, review candidates, and hire the best talent
                effortlessly.
              </p>
              <Link to="add-a-job" className="btn btn-outline btn-primary LatoSemibold text-xl">
                Post a Job
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative min-h-[50vh] flex items-center justify-center"
            style={{
              backgroundImage: `url(${bannarImg3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
      
            <div className="absolute inset-0 bg-black/70"></div>

           
            <div className="relative text-center text-white px-4 py-4">
              <h1 className="mb-4 text-4xl md:text-5xl font-semibold">
               Best in the World <br /> Bangladesh’s Most Trusted Job Portal
              </h1>
              <p className="mb-6 text-lg max-w-xl mx-auto">
                Connecting talent with opportunity. Search smarter, apply faster, and build your career with confidence.
              </p>
               <Link to="add-a-job" className="btn btn-outline btn-primary LatoSemibold text-xl">
                Post a Job
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
