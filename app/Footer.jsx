import React from 'react'
import Logo from './Logo';

const Footer = () => {
  return (
        <footer className="flex gap-5 justify-between mt-52 w-full max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full mx-auto px-12">
          <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col">
              <Logo />
              <div className="mt-20 text-lg font-medium leading-6 text-emerald-900 max-md:mt-10">
                © 2021 <br /> All right reserved.
              </div>
            </div>
            <div className="flex flex-col self-start mt-2 text-lg leading-6 text-emerald-900 whitespace-nowrap">
              <h4 className="text-xl font-semibold">About</h4>
              <div className="mt-8">Profile</div>
              <div className="mt-7">Services</div>
              <div className="mt-7">Pricing</div>
            </div>
            <div className="flex flex-col my-auto text-lg leading-6 text-emerald-900 whitespace-nowrap">
              <h4 className="text-xl font-semibold">Articles</h4>
              <div className="mt-8">Healthline</div>
              <div className="mt-7">News</div>
              <div className="mt-7">Promos</div>
            </div>
            <div className="flex flex-col self-start mt-2 text-base leading-6 text-emerald-900">
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="flex gap-3.5 mt-7">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/90582761f830f14c1a9f1c960dad8af4dda9fd53c86ddc785adca2efda4c0f30?apiKey=f417b8c00fe14582a1a201b8017683ae&" alt="Phone icon" className="shrink-0 aspect-square w-[18px]" />
                <div className="flex-auto">(0351) 2788 2331</div>
              </div>
              <div className="flex gap-3 mt-4">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6265daec7bfcfe5ca96b638ad3b64568abb2ffd7d2b6670dd656188cde7a178?apiKey=f417b8c00fe14582a1a201b8017683ae&" alt="Phone icon" className="shrink-0 w-5 aspect-square" />
                <div className="flex-auto">0812 2000 9009</div>
              </div>
            </div>
          </div>
          <form className="flex flex-col self-start mt-1.5 leading-[140%]">
            <div className="flex gap-5 justify-between items-start">
              <div className="flex flex-col self-start">
                <label htmlFor="emailInput" className="text-lg font-semibold text-emerald-900">
                  Get early promos
                </label>
                <div className="mt-14 text-sm font-medium text-gray-300 max-md:mt-10">YOUR EMAIL</div>
              </div>
              <button type="submit" aria-label="Submit email">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bc1aa80d72fe2449e1d3f68e5b93c9e590c5d5c85664cf47dd8f24a381284c6?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                  alt="Submit icon"
                  className="shrink-0 self-end mt-16 aspect-square w-[18px] max-md:mt-10"
                />
              </button>
            </div>
            <input
              type="email"
              id="emailInput"
              className="shrink-0 mt-2.5 h-px bg-emerald-900 border-2 border-emerald-900 border-solid"
              aria-label="Enter your email"
            />
          </form>
        </footer>
      );
}

export default Footer