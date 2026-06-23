
import React, { useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");

        const formData = new FormData(event.target);
        formData.append("access_key", "abf8add9-e784-49ec-ad60-1347b75f8078");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
                toast.success("Message sent! We'll get back to you shortly.");
            } else {
                setResult("Error");
                toast.error("Something went wrong. Please try again!");
            }
        } catch (error) {
            setResult("Error");
            toast.error("Network error. Please try again!");
        }
    };

    return (
        <main className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            {/* Header Section */}
            <div className="text-3xl text-center pt-10 border-t border-gray-100">
                <Title text1={"CONTACT"} text2={"US"} />
                <p className="text-gray-500 text-base md:text-lg mt-3 max-w-2xl mx-auto leading-relaxed">
                    Connect with our lithium-ion experts for technical guidance or partnership
                    opportunities. The CADA expert team is ready to empower your energy
                    journey.
                </p>
            </div>

            {/* Main Contact Container */}
            <div className="my-12 flex flex-col md:flex-row items-center justify-center gap-12 mb-28 max-w-6xl mx-auto">

                {/* Left Side: Image (Centered in its box) */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        className="w-full max-w-[450px] rounded-2xl shadow-lg h-auto object-cover"
                        src={assets.statesection}
                        alt="contact cada batteries"
                    />
                </div>

                {/* Right Side: Contact Form */}
                <div className="w-full md:w-1/2 flex flex-col gap-6 bg-white p-6 sm:p-10 rounded-3xl border border-gray-50 shadow-sm">
                    <div>
                        <h2 className="font-bold text-2xl text-gray-800 tracking-tight">
                            Get In Touch
                        </h2>
                        <p className="text-gray-500 text-sm mt-1">We'd love to hear from you.</p>
                    </div>

                    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            className="border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-green-800 transition-all text-sm bg-gray-50"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-green-800 transition-all text-sm bg-gray-50"
                            required
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-green-800 transition-all text-sm bg-gray-50"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="4"
                            className="border border-gray-200 px-4 py-3 rounded-lg resize-none focus:outline-none focus:border-green-800 transition-all text-sm bg-gray-50"
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-black text-white py-4 mt-2 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-all duration-300 rounded-lg active:scale-95 shadow-lg"
                        >
                            {result === "Sending...." ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Contact;