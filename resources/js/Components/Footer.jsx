import React from "react";

const navLinks = [
    {
        heading: "Menu",
        links: [
            {
                name: "Home",
                href: "/home",
            },
            {
                name: "Materi",
                href: "/materi",
            },
            {
                name: "Etalase",
                href: "/etalase",
            },
            {
                name: "About Us",
                href: "/about",
            },
        ],
    },
    {
        heading: "Follow Us",
        links: [
            {
                name: "Instagram",
                href: "https://instagram.com/daunnesia",
            },
            {
                name: "Facebook",
                href: "https://facebook.com/daunnesia",
            },
            {
                name: "Github",
                href: "https://github.com/daunnesia-company",
            },
        ],
    },
    {
        heading: "Support Us",
        links: [
            {
                name: "Buymeacoffee",
                href: "https://www.buymeacoffee.com/daunnesia",
            },
            {
                name: "Paypal",
                href: "https://paypal.me/daunnesia",
            },
            {
                name: "Patreon",
                href: "https://www.patreon.com/daunnesia",
            },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-white text-accent dark:bg-accent dark:text-accent2 transition-all ease-in-out duration-[0.3s]">
            <div className="max-w-[1440px] mx-auto w-full">
                <div className="py-10 md:py-12 lg:py-14 px-9 md:px-20 w-full h-full">
                    <div className="block lg:flex lg:justify-between">
                        <div className="lg:max-w-sm lg:flex-1">
                            <article className="prose lg:prose-xl">
                                <h4 className="text-accent dark:text-accent2 font-bold">
                                    Daunnesia
                                </h4>

                                <p className="text-gray dark:text-accent2 text-base">
                                    Kamu nanyea tagline aku apa? biar aku kasih
                                    tau ya, tagline aku Bersatu kita teguh,
                                    bercerai kita berantakan.
                                </p>
                            </article>
                        </div>

                        <div className="flex flex-wrap mt-6 md:mt-8 lg:mt-0 gap-y-5 lg:w-96 xl:w-1/2 lg:justify-end lg:gap-x-16 xl:gap-x-24">
                            {navLinks.map((navLink, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col w-1/2 md:w-1/3 lg:w-auto"
                                >
                                    <h4 className="text-accent dark:text-accent2 font-bold">
                                        {navLink.heading}
                                    </h4>

                                    <ul>
                                        {navLink.links.map((link, index) => (
                                            <li
                                                key={index}
                                                className="text-gray dark:text-gray text-base mt-4"
                                            >
                                                <a
                                                    href={link.href}
                                                    className="hover:text-accent dark:hover:text-accent2"
                                                >
                                                    {link.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 md:mt-8 block lg:hidden">
                            <p className="text-center">
                                © Copyright 2022 Daunnesia. All rights reserved.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 hidden lg:block">
                        <p className="text-center">
                            © Copyright 2022 Daunnesia. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
