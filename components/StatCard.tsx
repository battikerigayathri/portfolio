import { Icon } from 'lucide-react'
import React from 'react'


const StatCard = ({ number, label, sub, icon: Icon, delay, onClick }: {number: string, label: string, sub: string, icon: any, delay: number, onClick?: () => void}) => {
  return (
    <div onClick={onClick} data-aos="fade-up" data-aos-delay={delay} className="relative group bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer">
        <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#6366f1] to-[#a855f7] opacity-10 group-hover:opacity-20 transition-opacity"></div>
        <div className="flex items-center justify-between mb-4">
             <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 text-white">
                 <Icon className="w-8 h-8" />
             </div>
             <span className="text-4xl font-bold text-white">{number}</span>
        </div>
        <div>
            <p className="text-sm uppercase tracking-wider text-gray-300 mb-1">{label}</p>
            <p className="text-xs text-gray-400">{sub}</p>
        </div>
    </div>
  )
}

export default StatCard