import React from "react";
import { Title } from "../font/Title";

type CompanyLogo = {
  src: string;
  alt?: string;
};

type TrustedCompaniesProps = {
  title?: string;
  logos: CompanyLogo[];
};

const TrustedCompanies: React.FC<TrustedCompaniesProps> = ({
  title = "Ils font appel à Eureka & Co",
  logos,
}) => {
  return (
    <section className="flex flex-col items-center justify-center px-4 md:px-0 w-full">
      <Title text={title} variants={"large"} className="text-center"/>

      <div className="max-w-4xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-24 w-full mt-14">
        {logos.map((logo, index) => (
          <div
            key={index}
            className=" p-4 h-10 grid place-content-center rounded-md hover:-translate-y-0.5 transition duration-200"
          >
            <img src={logo.src} alt={logo.alt || "Company logo"} className="object-cover max-h-12 md:max-h-35" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedCompanies;