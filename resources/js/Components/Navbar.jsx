import { Link, usePage } from "@inertiajs/inertia-react";
import { useEffect, useRef, useState } from "react";
import {
    BsFacebook,
    BsGithub,
    BsSunFill,
    BsMoonStarsFill,
} from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const navLinks = [
    {
        label: "Home",
        href: "/home",
    },
    {
        label: "Materi",
        href: "/materi",
    },
    {
        label: "Etalase",
        href: "/etalase",
    },
    {
        label: "About Us",
        href: "/about",
    },
];

export default function Navbar() {
    const [navbarMenuToggled, setNavbarMenuToggled] = useState(false);
    const navbarRef = useRef();
    const navbarMenuContainerRef = useRef();

    const darkModeTogglerOnClick = () => {
        document.querySelector("html").classList.toggle("dark");
    };

    useEffect(() => {
        const handleScroll = () => {
            if (scrollY === 0) {
                navbarRef.current.classList.remove("navbar-glass");
                navbarMenuContainerRef.current.classList.remove("navbar-glass");
            }
            if (scrollY > 0) {
                navbarRef.current.classList.add("navbar-glass");
                navbarMenuContainerRef.current.classList.add("navbar-glass");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            ref={navbarRef}
            className="sticky top-0 bg-white text-accent dark:bg-accent dark:text-accent2"
        >
            <div className="max-w-[1440px] m-auto w-full h-20">
                <div className="flex flex-1 flex-row items-center justify-between w-full h-full px-9 md:px-20">
                    <article className="prose lg:prose-xl">
                        <h4 className="text-accent dark:text-accent2 font-bold">
                            Daunnesia
                        </h4>
                    </article>
                    <div>
                        {/* mobile navbar */}
                        <div className="lg:hidden flex flex-row items-center justify-around">
                            <button
                                className="text-xl w-[48px] h-[48px] rounded-[5px] border-2 bg-white border-gray text-accent dark:text-accent2 bg-opacity-80 dark:bg-secondary dark:border-secondary dark:bg-opacity-30 flex justify-center items-center"
                                onClick={darkModeTogglerOnClick}
                            >
                                <i className="block dark:hidden">
                                    <BsSunFill />
                                </i>
                                <i className="hidden dark:block">
                                    <BsMoonStarsFill />
                                </i>
                            </button>
                            <button
                                className="ml-4 text-xl w-[48px] h-[48px] rounded-[5px] border-2 bg-white border-gray text-accent dark:text-accent2 bg-opacity-80 dark:bg-secondary dark:border-secondary dark:bg-opacity-30 flex justify-center items-center"
                                onClick={() =>
                                    setNavbarMenuToggled((prev) => !prev)
                                }
                            >
                                <GiHamburgerMenu />
                            </button>
                        </div>

                        {/* mobile navbar links container */}
                        <div
                            className={`${
                                navbarMenuToggled ? "absolute" : "hidden"
                            } lg:hidden w-screen md:w-[40%] right-0 top-24`}
                        >
                            <div
                                ref={navbarMenuContainerRef}
                                className="flex flex-col bg-white dark:bg-accent mx-[36px] md:mx-[72px] rounded-md border-gray border-2 dark:border-secondary"
                            >
                                {navLinks.map((link, index) => (
                                    <Navbar.MobileLink key={index} {...link} />
                                ))}
                            </div>
                        </div>
                        {/* end of mobile navbar link container */}
                        {/* end of mobile navbar */}

                        {/* desktop & tablet navbar */}
                        <div className="hidden lg:flex flex-row items-center">
                            {navLinks.map((link, index) => (
                                <Navbar.Link
                                    key={index}
                                    index={index}
                                    {...link}
                                    navLinks={navLinks}
                                />
                            ))}
                            <Link
                                as="a"
                                href="#faceboook"
                                className="text-2xl pl-[32px] pr-[16px] dark:text-white text-accent"
                            >
                                <BsFacebook />
                            </Link>
                            <Link
                                as="a"
                                href="#github"
                                className="text-2xl px-[16px]"
                            >
                                <BsGithub />
                            </Link>
                            <button
                                as="button"
                                className="text-2xl pl-[16px]"
                                onClick={darkModeTogglerOnClick}
                            >
                                <i className="block dark:hidden">
                                    <BsSunFill />
                                </i>
                                <i className="hidden dark:block">
                                    <BsMoonStarsFill />
                                </i>
                            </button>
                        </div>
                    </div>
                    {/* end of desktop & tablet navbar */}
                </div>
            </div>
        </nav>
    );
}

Navbar.MobileLink = ({ href, label }) => {
    const { url } = usePage();

    return (
        <Link
            as="a"
            href={href}
            className={`${
                url === href
                    ? "bg-accent text-accent2 dark:bg-primary"
                    : "hover:bg-accent hover:text-accent2 dark:hover:bg-primary"
            } relative px-[16px] flex justify-center text-sm group py-4 text-center`}
        >
            {label}
        </Link>
    );
};

Navbar.Link = ({ index, href, label, navLinks }) => {
    const { url } = usePage();

    return (
        <Link
            key={index}
            as="a"
            href={href}
            className={`relative px-[16px] flex justify-center text-sm group ${
                navLinks.length - 1 === index &&
                "pr-8 border-r-2 group border-accent dark:border-white"
            }`}
        >
            {label}
            <span
                className={`${
                    url === href ? "visible" : "invisible group-hover:visible"
                } absolute rounded-md -bottom-2 w-9 h-[3px] bg-secondary`}
            ></span>
        </Link>
    );
};
