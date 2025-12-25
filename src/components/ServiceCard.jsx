import React, { useRef, useState } from 'react'
import { motion } from 'motion/react'

const ServiceCard = ({ service, index }) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            className='group relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-2xl'
        >
            {/* Glassmorphism Container */}
            <div className='relative p-8 rounded-2xl 
                            bg-white/70 dark:bg-gray-900/30
                            backdrop-blur-xl backdrop-saturate-150
                            border border-white/40 dark:border-white/10
                            shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] 
                            dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]
                            transition-all duration-500
                            group-hover:shadow-[0_12px_48px_0_rgba(80,68,229,0.25)]
                            dark:group-hover:shadow-[0_12px_48px_0_rgba(80,68,229,0.4)]
                            group-hover:border-primary/30
                            overflow-hidden'>
                
                {/* Gradient Overlay on Hover */}
                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500 pointer-events-none
                                bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5'>
                </div>

                {/* Content */}
                <div className='flex items-center gap-6 relative z-10'>
                    
                    {/* Icon Container with Glass Effect */}
                    <div className='relative shrink-0'>
                        {/* Outer Glow Ring */}
                        <div className='absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 
                                        blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                                        scale-110'>
                        </div>
                        
                        {/* Glass Icon Background */}
                        <div className='relative bg-gradient-to-br from-white/80 to-white/40 
                                        dark:from-gray-800/60 dark:to-gray-900/40
                                        backdrop-blur-md
                                        rounded-full p-1
                                        border border-white/60 dark:border-white/20
                                        shadow-lg shadow-gray-200/50 dark:shadow-black/30
                                        transition-all duration-500
                                        group-hover:scale-110
                                        group-hover:rotate-6
                                        group-hover:border-primary/40'>
                            
                            <div className='bg-white dark:bg-gray-900 rounded-full p-4
                                           shadow-inner'>
                                <img 
                                    src={service.icon} 
                                    alt={service.title}
                                    className='w-16 h-16 object-contain
                                             transition-transform duration-500
                                             group-hover:scale-110' 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className='flex-1 min-w-0'>
                        <h3 className='font-bold text-lg text-gray-900 dark:text-white 
                                      mb-2 transition-colors duration-300
                                      group-hover:text-primary dark:group-hover:text-primary-light'>
                            {service.title}
                        </h3>
                        <p className='text-sm text-gray-600 dark:text-gray-300 
                                     leading-relaxed transition-colors duration-300'>
                            {service.description}
                        </p>
                    </div>

                </div>

                {/* Shimmer Effect on Hover */}
                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 
                                transition-opacity duration-700 pointer-events-none'>
                    <div className='absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] 
                                    transition-transform duration-1000
                                    bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                    skew-x-12'>
                    </div>
                </div>

            </div>

        </motion.div>
    )
}

export default ServiceCard
