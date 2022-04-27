import React from "react";
import HeroButtons from "./HeroButtons";

function Testimonials() {
    return (
        <section className="relative">

            <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                <div className="py-12 md:py-20">
                    <div
                        className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h2 className="h2 mb-4"
                            data-aos="zoom-y-out">
                            We welcome you to join us and build something great together
                        </h2>
                    </div>

                    <div className="flex justify-center">
                        <HeroButtons/>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Testimonials;
