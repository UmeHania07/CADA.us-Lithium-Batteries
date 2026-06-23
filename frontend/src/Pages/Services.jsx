import React from "react";
import { servicesData } from "../data/mockData";
import Title from "../components/Title";
import { FiDownload } from "react-icons/fi"; // Download icon import kiya hai

const Services = () => {
    return (
        // Sections ki internal gaps ko clean karne ke liye padding-bottom barha di hai
        <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pt-4 pb-24 font-sans">

            {/* Header Section */}
            <div className='text-3xl text-center mb-12'>
                <Title text1={"PRECISION BATTERY"} text2={"SERVICES"} />

                <p className="text-gray-500 text-sm md:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
                    We don't just sell batteries; we engineer total energy reliability for your most critical systems.
                </p>
            </div>

            {/* Grid Layout (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {servicesData.map((service) => (
                    <div
                        key={service.id}
                        className="bg-slate-50/50 border border-gray-100 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 group cursor-pointer flex flex-col items-start text-left"
                    >
                        {/* Icon Container */}
                        <div className="p-4 bg-slate-100 rounded-xl mb-6 group-hover:bg-blue-50 transition-colors duration-300">
                            {service.icon}
                        </div>

                        {/* Service Title */}
                        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                            {service.title}
                        </h3>

                        {/* Service Description */}
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Download Brochure Button - Centered below the cards grid */}
            {/* Download Brochure Button - Centered below the cards grid */}
            <div className="flex justify-center items-center mt-12">
                <a
                    href="/cada-pdf.pdf"
                    download="CADA_Batteries_Brochure.pdf"
                    className="flex items-center gap-2 text-sm font-bold tracking-wider text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all duration-300 uppercase group"
                >
                    DOWNLOAD BROCHURE
                    <FiDownload className="text-base group-hover:translate-y-[2px] transition-transform duration-300" />
                </a>
            </div>

        </section>
    );
};

export default Services;