import Image from 'next/image'
import React from 'react'

export default function Whining() {
  return (
    <div className='w-full max-w-screen-xl mx-auto px-2'>
      <div className="block md:hidden mt-[35px] w-full rounded-xl overflow-hidden">
          <Image
            src="/images/idea.webp"
            alt="Hero Preview"
            width={1200}
            height={600}
            className="w-full h-auto object-contain"
            priority
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
    </div>
  )
}
