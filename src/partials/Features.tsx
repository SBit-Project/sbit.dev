import React from "react";


import { useColorMode } from '@docusaurus/theme-common';

import SyntaxHighlighter from "react-syntax-highlighter";
import {
    atomOneLight,
    vs2015
} from "react-syntax-highlighter/dist/esm/styles/hljs";

function Features() {

    return (
        <section className="relative">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">
                    <div className="md:grid md:grid-cols-12 md:gap-6">
                        <div
                            className="flex items-center max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
                            data-aos="fade-right">
                            <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                                <div className={"flex items-center mb-3"}>
                                    <div
                                        className="flex items-center justify-center text-white w-8 h-8 bg-gray-800 rounded-full shadow flex-shrink-0 mr-3">
                                        {tickIcon}
                                    </div>
                                    <h3 className="h3 m-0">
                                        EVM
                                    </h3>
                                </div>
                                <p className="text-xl  dark:text-gray-200">
                                Smart Bitcoin uses the <b>EVM (Ethereum virtual Machine)</b>,
                                 any Ethereum smart contract can run on <b>Sbit and vice versa</b>.
                                </p>
                                <p className="text-xl  dark:text-gray-200">
                                Solidity can be used to write contracts for <b>Sbit</b> as it is used to write contracts for <b>Ethereum</b>.
                                </p>
                                <p className="text-xl  dark:text-gray-200">
                                This makes it incredibly easy for <b>Ethereum developers</b> to develop on <b>Sbit</b>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">
                    <div
                        className="flex flex-col-reverse md:grid md:grid-cols-12 md:gap-6">
                        <div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
                            data-aos="fade-right"
                            data-aos-delay="90">

                            <div
                                className="custom-code-block relative flex-col font-mono">
                                <div
                                    className={"p-1 flex justify-center"}>

                                </div>
                            </div>
                        </div>

                        <div
                            className="flex items-center max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                            data-aos="fade-left"
                            data-aos-delay="190">
                            <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">

                                <div
                                    className={"flex justify-end items-center mb-3"}>

                                    <h3 className="h3 m-0 mr-3 md:text-right ">
                                    AAL
                                    </h3>

                                    <div
                                        className="flex items-center justify-center text-white w-8 h-8 bg-gray-800 rounded-full shadow flex-shrink-0 ">
                                        {tickIcon}
                                    </div>
                                </div>
                                <p className="text-xl  dark:text-gray-200">
                                Account Abstract Layer (AAL) that serves as an <b>interface layer between the blockchain and the EVM</b>.
                                </p>
                                <p className="text-xl  dark:text-gray-200">
                                The AAL not only allows the EVM to live on top of a UTXO blockchain,
                                it also means that Sbit <b>is not confined to using the EVM as a smart contracts platform</b>.
                                </p>
                                <p className="text-xl  dark:text-gray-200">
                                Any other smart contracts <b>VM compatible with the AAL</b> can be used to <b>replace the EVM</b>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">

                    <div className="md:grid md:grid-cols-12 md:gap-6">
                        <div
                            className="flex items-center max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
                            data-aos="fade-right"
                            data-aos-delay="120"
                        >
                            <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                                <div className={"flex items-center mb-3"}>

                                    <div
                                        className="flex items-center justify-center text-white w-8 h-8 bg-gray-800 rounded-full shadow flex-shrink-0 mr-3">
                                        {tickIcon}
                                    </div>

                                    <h3 className="h3 m-0">
                                        PoS 3.5
                                    </h3>

                                </div>
                                <p className="text-xl  dark:text-gray-200">
                                With PoS 3.5, you need to maintain your node <b>online</b> at all times,
                                 If you want to get your stake <b>reward</b>. 
                                </p>
                                <p className="text-xl  dark:text-gray-200">
                                People with not so many coins but who keep their node online
                                 will get <b>stake reward</b> relative to people who have a lot of coins
                                  but keep their node offline.
                                </p>
                            </div>

                        </div>


                    </div>
                </div>
            </div>


            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">

                    <div
                        className="flex flex-col-reverse md:grid md:grid-cols-12 md:gap-6">
                        <div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
                            data-aos="fade-right"
                            data-aos-delay="120">
                        </div>

                        <div
                            className="flex items-center max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                            data-aos="fade-left"
                            data-aos-delay="220"
                        >
                            <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">

                                <div
                                    className={"flex justify-end items-center mb-3"}>

                                    <h3 className="h3 m-0 mr-3 md:text-right ">
                                    DGP
                                    </h3>

                                    <div
                                        className="flex items-center justify-center text-white w-8 h-8 bg-gray-800 rounded-full shadow flex-shrink-0 ">
                                        {tickIcon}
                                    </div>
                                </div>

                                <p className="text-xl  dark:text-gray-200">
                                Decentralised Governance Protocol (DGP) allows owners of Sbit to vote on
                                 and enact changes to a limited set of blockchain parameters 
                                <b> (e.g. block size and block time) without needing hard forks</b>.
                                </p>
                                <p className="text-xl  dark:text-gray-200">
                                This not only allows Sbit to efficiently adapt to changing network conditions, 
                                <b> it also allows quick recovery from certain kinds of attacks on the network</b>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


const tickIcon = <svg width="16px" height="16px" viewBox="0 0 20 15"
                      version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none"
       fillRule="evenodd">
        <g id="check_black_24dp" transform="translate(-2.000000, -5.000000)">
            <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
            <polygon id="Path" fill="#FFFFFF" fillRule="nonzero"
                     points="9 14.9813787 5.38451728 11.363324 2.88437331 13.9911209 9 20.002627 21.509993 7.55223468 19.0392011 4.9604079"></polygon>
        </g>
    </g>
</svg>;


export default Features;
