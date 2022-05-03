import React from "react";
// @ts-ignore
import featuresBg from "@site/static/img/features-bg.png";
// @ts-ignore
import featuresElement from "@site/static/img/features-element.png";

// @ts-ignore
import EthereumLogo from "@site/static/img/ethereum.svg";
// @ts-ignore
import BitcoinLogo from "@site/static/img/bitcoin.svg";

function SbitIntro() {
    return (
        <section className="relative">

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

                <div
                    className="relative flex justify-center mb-12"
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    <div
                        className="flex flex-row space-x-2 md:space-x-8 justify-center items-center">
                        <EthereumLogo
                            style={{
                                width: 150,
                                height: 150,
                                maxWidth: "35%"
                            }}/>
                        <BitcoinLogo
                            style={{
                                width: 130,
                                height: 150,
                                maxWidth: "30%"
                            }}/>
                    </div>
                </div>

                <div
                    className="max-w-3xl mx-auto text-center pb-36 md:pb-40"
                    data-aos="fade-up"
                    data-aos-delay="100">
                    <h2 className="h2 mb-4">
                    What is SBIT?
                    </h2>
                    <p className="text-xl  dark:text-gray-200 dark:text-gray-200">
                    <b>SBIT</b> is the native token of the blockchain and it's use to <b>pay for executing smart contracts</b>.
                     It can also be <b>staked</b> to help secure the network and used to participate in <b>platform governance</b>. 
                     Businesses and developers can deploy <b>SRC-20 tokens – Sbit’s own token standard</b>.
                      These can be used within <b>dApps and SRC-20</b> transactions require gas fees to be paid in SBIT.
                    </p>
                    <div
                        className="mt-6 flex justify-center items-center flex-wrap"
                    >

                        <iframe className="mr-1 mb-2"
                                style={{transform: "scale(1.3)"}}
                                src="https://ghbtns.com/github-btn.html?user=SBit-Project&repo=sbit&type=star&count=false&size=large"
                                frameBorder="0" scrolling="0" width="160"
                                height="35" title="GitHub"/>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default SbitIntro;
