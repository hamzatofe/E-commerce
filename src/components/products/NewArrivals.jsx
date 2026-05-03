import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import image1 from "../../../public/images/image1.jpg"
import image2 from "../../../public/images/image2.jpg"
import image3 from "../../../public/images/image3.jpg"
import hero2 from "../../../public/images/hero2.jpg"
import hero3 from "../../../public/images/hero3.jpg"
import hero from "../../../public/images/hero3.jpg"

const NewArrivals = () => {
  const newArrivals = [
    {
      _id: "1",
      name: "Stylish jacket",
      price: 120,
      images: [{ url: image1, altText: "Stylish jacket" }],
    },
    {
      _id: "2",
      name: "Stylish jacket",
      price: 120,
      images: [{ url: image2, altText: "Stylish jacket" }],
    },
    {
      _id: "3",
      name: "Stylish jacket",
      price: 120,
      images: [{ url: image3, altText: "Stylish jacket" }],
    },
    {
      _id: "4",
      name: "Stylish jacket",
      price: 120,
      images: [{ url: hero2, altText: "Stylish jacket" }],
    },
    {
      _id: "5",
      name: "Stylish jacket",
      price: 120,
      images: [{ url: hero3, altText: "Stylish jacket" }],
    },
    {
      _id: "6",
      name: "Stylish jacket",
      price: 120,
      images: [{ url: hero, altText: "Stylish jacket" }],
    },
    {
      _id: "7",
      name: "Stylish jacket",
      price: 120,
      images: [{ url: image1, altText: "Stylish jacket" }],
    },
  ];

  return (
    <section className="container mx-auto text-center mb-10 relative py-12 bg-slate-50 rounded-[40px] shadow-sm">
      <h2 className="text-3xl font-semibold mb-2 text-slate-900">Explore New Arrivals</h2>
      <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-cyan-400"></div>
      <p className="mx-auto max-w-2xl text-base text-slate-600 leading-7">
        اكتشف أحدث القطع المختارة بأسلوب أنيق ومريح. مرر أو استخدم الأسهم العلوية للتنقل بين المنتجات بسهولة.
      </p>
      <div className="relative pt-7 mb-6">
        <div className="absolute right-0 top-0 flex items-center gap-3">
          <button className="custom-swiper-prev rounded-full bg-slate-900 p-2 shadow-xl text-white transition hover:bg-slate-700">
            <FiChevronLeft className="text-2xl" />
          </button>
          <button className="custom-swiper-next rounded-full bg-slate-900 p-2 shadow-xl text-white transition hover:bg-slate-700">
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
      <div className="container mx-auto relative">
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          navigation={{ prevEl: ".custom-swiper-prev", nextEl: ".custom-swiper-next" }}
          loop={true}
          autoplay={{ delay: 2800, disableOnInteraction: true }}
          slidesPerView={5}
          modules={[Navigation, Autoplay, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 12,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            100: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            700: { slidesPerView: 3 },
            850: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
          spaceBetween={16}
          className="w-full py-6"
        >
          {newArrivals.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-lg transition duration-500 hover:-translate-y-1">
                <img
                  src={item.images[0]?.url}
                  alt={item.images[0]?.altText || item.name}
                  className="h-[320px] w-full object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-3xl bg-gradient-to-t from-slate-950/95 to-slate-950/30 p-5 text-left text-white backdrop-blur-sm">
                  <h4 className="text-lg font-semibold tracking-tight">{item.name}</h4>
                  <p className="mt-1 text-sm text-slate-300">${item.price}</p>
                  <Link
                    to={`/product/${item._id}`}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-100"
                  >
                    عرض المنتج
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewArrivals;

