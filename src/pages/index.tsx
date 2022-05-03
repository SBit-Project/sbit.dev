import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";


import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/Testimonials";

import Separator from "../partials/Separator";
import SBitIntro from "../partials/SBitIntro";

import AOS from "aos";
import "aos/dist/aos.css";
import "../css/tailwind.css";

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;

    useEffect(() => {
        if (ExecutionEnvironment.canUseDOM) {
            AOS.init();
            updateDarkModeClass();
        }
    }, [ExecutionEnvironment.canUseDOM]);

    function updateDarkModeClass() {
        if (!document) return;
        if (document.documentElement?.dataset?.theme === "dark" && !document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }

    useEffect(() => {
        if (!ExecutionEnvironment.canUseDOM) return;
        const observer = new MutationObserver((mutations) => {
            mutations.forEach(function(mutation) {
                if (mutation.type == "attributes"
                    && mutation.attributeName === "data-theme") {
                    updateDarkModeClass();
                }
            });
        });
        observer.observe(document.documentElement, {
            attributes: true,
            childList: false,
            subtree: false
        });
        return () => {
            observer.disconnect();
        };
    }, [ExecutionEnvironment.canUseDOM]);


    return (
        <Layout
            title={"SBit"}
            description="Smart Bitcoin Blockchain">

            <div className="flex flex-col min-h-screen overflow-hidden ">

                <main className="flex-grow">
                    <HeroHome/>
                    <Separator/>
                    <SBitIntro/>
                    <FeaturesHome/>
                    <Separator/>
                    <FeaturesBlocks/>
                    <Separator/>
                    <Testimonials/>

                </main>

            </div>
        </Layout>
    );
}

export default Home;

