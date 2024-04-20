import React from 'react'
import Image from 'next/image'

const PackageCard = ({ title, price, code, imageSrc }) => {
  return (
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full ">
          <div className="flex flex-col grow px-11 py-20 w-full font-medium text-white leading-[140%] max-md:px-5 max-md:max-w-full">
            <h3 className="mt-8 text-4xl font-bold tracking-wider text-emerald-50 leading-[54px]">{title}</h3>
            <hr className="shrink-0 mt-9 h-0.5 bg-emerald-50 border-2 border-emerald-50 border-dashed" />
            <div className="flex gap-5 justify-between mt-4 text-lg">
              <div className="justify-center px-2 py-1.5 bg-emerald-700 rounded-3xl">{price}</div>
              <div className="my-auto">{code}</div>
            </div>
            <Image loading="lazy" src={imageSrc} alt={title} className="mt-5 w-full aspect-[1.49]"  width={389} height={260.89} />
            <div className="flex gap-3.5 mt-9 text-2xl max-md:pr-5">
              <div className="flex-auto">Select package</div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3d937f7affe2875bb61da73e436f0262631943380032f125fb43a94e8d926cf?apiKey=f417b8c00fe14582a1a201b8017683ae&" alt="Arrow icon" className="shrink-0 w-7 aspect-square" />
            </div>
          </div>
        </div>
  )
}
export default PackageCard