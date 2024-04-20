import * as React from "react";
import Footer from "./Footer";
import PackageCard from "./PackageCard";
import Header from "./Header";
import image1 from '../public/images/img1.png';
import image2 from '../public/images/img2.png';
import image3 from '../public/images/img3.png';


const packageData = [
  {
    title: "Swedish Deep Tissue Massage",
    price: "Rp. 550.000,00",
    code: "SPA. 01",
    imageSrc: image1,
  },
  {
    title: "Facials Massage with Scrubs",
    price: "Rp. 950.000,00",
    code: "SPA. 02",
    imageSrc: image2,
  },
  {
    title: "Body Treatments with Scrubs",
    price: "Rp. 650.000,00",
    code: "SPA. 03",
    imageSrc: image3,
  },
];

function BeautyLandingPage() {
  return (
    <div className="flex flex-col items-center pb-16 bg-white mx-auto">
       <Header />
      <section className="self-stretch px-5 w-full max-md:max-w-full bg-[#059669]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {packageData.map((packageItem, index) => (
            <PackageCard key={index} {...packageItem} />
          ))}
        </div>
      </section>
      <div className="flex flex-col mt-6 w-full max-w-[1340px] max-md:max-w-full ">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0d25c056e5d061ce640d02048fd6428905aa216198ec2e14e2cb223b88198d2?apiKey=f417b8c00fe14582a1a201b8017683ae&" alt="Spa products" className="w-full aspect-[2] max-md:max-w-full" />
        <Footer />
      </div>
    </div>
  );
}

export default BeautyLandingPage;