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
                                        {lightningIcon}
                                    </div>
                                    <h3 className="h3 m-0">
                                        EVM
                                    </h3>
                                </div>
                                <p className="text-xl  dark:text-gray-200">
                                Smart Bitcoin uses the <b>EVM (Ethereum virtual Machine)</b>,
                                 any Ethereum smart contract can run on <b>SBit and vice versa</b>.
                                </p>
                                <p className="text-xl  dark:text-gray-200">
                                Solidity can be used to write contracts for <b>SBit</b> as it is used to write contracts for <b>Ethereum</b>.
                                </p>
                                <p className="text-xl  dark:text-gray-200">
                                This makes it incredibly easy for <b>Ethereum developers</b> to develop on <b>SBit</b>.
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
                                        {arrowIcon}
                                    </div>
                                </div>
                                <p className="text-xl  dark:text-gray-200">
                                Account Abstract Layer (AAL) that serves as an <b>interface layer between the blockchain and the EVM</b>.
                                </p>
                                <p className="text-xl  dark:text-gray-200">
                                The AAL not only allows the EVM to live on top of a UTXO blockchain,
                                it also means that SBit <b>is not confined to using the EVM as a smart contracts platform</b>.
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
                                        {settingsIcon}
                                    </div>
                                </div>

                                <p className="text-xl  dark:text-gray-200">
                                Decentralised Governance Protocol (DGP) allows owners of SBit to vote on
                                 and enact changes to a limited set of blockchain parameters 
                                <b> (e.g. block size and block time) without needing hard forks</b>.
                                </p>
                                <p className="text-xl  dark:text-gray-200">
                                This not only allows SBit to efficiently adapt to changing network conditions, 
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


const lightningIcon = <svg
    className="w-3 h-3 fill-current"
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z"/>
</svg>;

const arrowIcon = <svg
    className="w-3 h-3 fill-current"
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
        fillRule="nonzero"
    />
</svg>;

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

const settingsIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                          viewBox="0 0 24 24" width="16px" fill="#FFFFFF">
    <g>
        <path d="M0,0h24v24H0V0z" fill="none"/>
        <path
            d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
    </g>
</svg>;

export default Features;
