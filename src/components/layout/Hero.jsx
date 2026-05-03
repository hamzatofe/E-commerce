import { Link } from "react-router-dom";
import hero from "../../../public/images/hero.jpg";
import hero2 from "../../../public/images/hero2.jpg";
import hero3 from "../../../public/images/hero3.jpg";
const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_32%),linear-gradient(180deg,_rgba(15,23,42,0.9),_rgba(15,23,42,0.6))]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center lg:text-left">
          <span className="inline-flex rounded-full bg-cyan-400/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300 shadow-sm">
            New Season
          </span>
          <h1 className="mt-7 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Vacation Ready
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            اكتشف تشكيلتنا الجديدة من الأزياء الجاهزة للسفر والمناسبات، مع لمسات أنيقة وجودة مترفة تناسب كل رحلة.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              to="#"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              Shop Now
            </Link>
            <Link
              to="#"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/5 px-8 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-white"
            >
              Explore Collection
            </Link>
          </div>
        </div>

        <div className="relative grid gap-6 sm:grid-cols-2">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.45)] backdrop-blur-xl">
<img src={hero} alt="Vacation style 1" className="h-[260px] w-full rounded-3xl object-cover transition duration-700 hover:scale-105" />
            <div className="mt-4 text-left">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Beach edit</p>
              <h2 className="mt-3 text-xl font-semibold text-white">Summer essentials</h2>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:-mt-10">
<img src={hero2} alt="Vacation style 2" className="h-[260px] w-full rounded-3xl object-cover transition duration-700 hover:scale-105" />
            <div className="mt-4 text-left">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Travel luxe</p>
              <h2 className="mt-3 text-xl font-semibold text-white">Jet-set looks</h2>
            </div>
          </div>
          <div className="sm:col-span-2 relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.25)] backdrop-blur-xl">
            <div className="mt-4 text-left">
<img src={hero3} alt="Vacation style 2" className="h-[260px] w-full rounded-3xl object-cover transition duration-700 hover:scale-105" />

              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Weekend trip</p>
              <h2 className="mt-3 text-xl font-semibold text-white">Ready-to-go outfits</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
