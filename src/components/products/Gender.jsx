import {Link} from 'react-router-dom'
import hero1 from "../../../public/images/hero1.jpg";
import man from "../../../public/images/man.jpg";
const Gender = () => {
  return (
    <section className="py-16 px-4 lg:px-0 bg-slate-50">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-500 mb-3">
            Shop by style
          </p>
          <h2 className="text-4xl font-semibold text-slate-900 md:text-5xl">
            اكتشف أروع التشكيلات حسب النوع
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
            تصفح مجموعاتنا الرجالية والنسائية المُنتقاة بعناية مع تصميم حديث وتجربة مستخدم مريحة.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Link
            to="/collections/forwomen"
            className="group relative overflow-hidden rounded-[32px] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(15,23,42,0.18)]"
          >
            <img
              src={hero1}
              alt="Women's collection"
              className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-flex rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-500">
                For Her
              </span>
              <h3 className="mt-4 text-3xl font-semibold text-white">
                Women's collection
              </h3>
              <p className="mt-3 max-w-xs text-sm text-slate-200">
                أزياء أنثوية راقية مع لمسات عصرية لكل مناسبة.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-cyan-200">
                تسوق الآن →
              </span>
            </div>
          </Link>

          <Link
            to="/collections/forman"
            className="group relative overflow-hidden rounded-[32px] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(15,23,42,0.18)]"
          >
            <img
              src={man}
              alt="Men's collection"
              className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-flex rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-500">
                For Him
              </span>
              <h3 className="mt-4 text-3xl font-semibold text-white">
                Men's collection
              </h3>
              <p className="mt-3 max-w-xs text-sm text-slate-200">
                تشكيلات رجالية أنيقة وقوية تناسب كل موسم وكل مناسبة.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-cyan-200">
                تسوق الآن →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gender;
