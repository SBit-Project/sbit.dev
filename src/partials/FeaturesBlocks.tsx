import React from "react";

function FeaturesBlocks() {
    const iconCheck = <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#0070f4" viewBox="0 0 24 24"><path d="M23.334 11.96c-.713-.726-.872-1.829-.393-2.727.342-.64.366-1.401.064-2.062-.301-.66-.893-1.142-1.601-1.302-.991-.225-1.722-1.067-1.803-2.081-.059-.723-.451-1.378-1.062-1.77-.609-.393-1.367-.478-2.05-.229-.956.347-2.026.032-2.642-.776-.44-.576-1.124-.915-1.85-.915-.725 0-1.409.339-1.849.915-.613.809-1.683 1.124-2.639.777-.682-.248-1.44-.163-2.05.229-.61.392-1.003 1.047-1.061 1.77-.082 1.014-.812 1.857-1.803 2.081-.708.16-1.3.642-1.601 1.302s-.277 1.422.065 2.061c.479.897.32 2.001-.392 2.727-.509.517-.747 1.242-.644 1.96s.536 1.347 1.17 1.7c.888.495 1.352 1.51 1.144 2.505-.147.71.044 1.448.519 1.996.476.549 1.18.844 1.902.798 1.016-.063 1.953.54 2.317 1.489.259.678.82 1.195 1.517 1.399.695.204 1.447.072 2.031-.357.819-.603 1.936-.603 2.754 0 .584.43 1.336.562 2.031.357.697-.204 1.258-.722 1.518-1.399.363-.949 1.301-1.553 2.316-1.489.724.046 1.427-.249 1.902-.798.475-.548.667-1.286.519-1.996-.207-.995.256-2.01 1.145-2.505.633-.354 1.065-.982 1.169-1.7s-.135-1.443-.643-1.96zm-12.584 5.43l-4.5-4.364 1.857-1.857 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.642z"/></svg>
    return (
        <section className="relative">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    <div
                        className="max-w-3xl mx-auto text-center pb-12 md:pb-20"
                        data-aos="fade-up"
                        data-aos-delay="100">
                        <h2 className="h2 mb-4">Open Source</h2>
                        <p className="text-xl  dark:text-gray-200">
                        <b>No central authority, open source for everyone and everywhere</b>
                        </p>
                    </div>

                    <div
                        className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                        <div
                            data-aos="fade-up"
                            data-aos-delay="100">
                            <div
                                className="relative flex flex-col items-center p-6 opacityBox  dark:bg-gray-900 rounded shadow-2xl">
                                {iconCheck}
                                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 marginTop">
                                The power of the crowd
                                </h4>
                                <p className=" dark:text-gray-200 text-center">
                                </p>
                            </div>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="150">
                            <div
                                className="relative flex flex-col items-center p-6 opacityBox  dark:bg-gray-900 rounded shadow-2xl">
                                {iconCheck}
                                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 marginTop">
                                Absolute transparency
                                </h4>
                                <p className=" dark:text-gray-200 text-center">
                                </p>
                            </div>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="200">
                            <div
                                className="relative flex flex-col items-center p-6 opacityBox  dark:bg-gray-900 rounded shadow-2xl">
                                {iconCheck}
                                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 marginTop">
                                Security
                                </h4>
                                <p className=" dark:text-gray-200 text-center">
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesBlocks;
