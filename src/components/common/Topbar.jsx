import { TbBrandMeta } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import { FiTruck } from 'react-icons/fi'
import { FiPhone } from 'react-icons/fi'

const Topbar = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex justify-between items-center px-4 md:px-8 h-12">
        {/* Social Media Icons */}
        <div className="flex gap-3">
            <a 
                href='#' 
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
            >
                <TbBrandMeta className="text-lg" />
            </a>
            <a 
                href='#' 
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
            >
                <IoLogoInstagram className="text-lg" />
            </a>
            <a 
                href='#' 
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
            >
                <RiTwitterXLine className="text-lg" />
            </a>
        </div>

        {/* Shipping Info */}
        <div className="hidden md:flex items-center gap-2 text-sm font-medium">
            <FiTruck className="text-cyan-400" />
            <span className="tracking-wide">
                <span className="text-cyan-400 font-semibold">Free Shipping</span> worldwide!
            </span>
        </div>

        {/* Contact */}
        <div className="hidden md:flex items-center gap-2 text-sm">
            <FiPhone className="text-cyan-400" />
            <span className="font-semibold text-cyan-400">+963</span>
            <span className="font-mono">944334433</span>
        </div>
    </div>
  )
}

export default Topbar
