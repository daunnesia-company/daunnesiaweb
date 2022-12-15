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
];

export default function Navbar(props) {
    const { url } = usePage();
    const navbarRef = useRef();
    const navbarMenuContainerRef = useRef();
    const [navbarToggled, setNavbarToggled] = useState(false);

    const darkModeTogglerOnClick = () => {
        document.querySelector("html").classList.toggle("dark");
    };

    useEffect(() => {
        const handleScroll = () => {
            if (scrollY === 0) {
                navbarRef.current.classList.remove(
                    "navbar-glass",
                    "navbar-ease-in"
                );
                navbarMenuContainerRef.current.classList.remove(
                    "navbar-glass",
                    "navbar-ease-in"
                );
            }
            if (scrollY > 0) {
                navbarRef.current.classList.add(
                    "navbar-glass",
                    "navbar-ease-in"
                );
                navbarMenuContainerRef.current.classList.add(
                    "navbar-glass",
                    "navbar-ease-in"
                );
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            ref={navbarRef}
            className="sticky top-0 bg-white text-accent dark:bg-accent dark:text-accent2 transition-all ease-in-out duration-[0.3s]"
        >
            <div className="max-w-[1440px] m-auto w-full h-20">
                <div className="flex flex-1 flex-row items-center justify-between w-full h-full px-[36px] md:px-[72px]">
                    <article className="prose lg:prose-xl">
                        <h3 className="text-accent dark:text-accent2 text-sm">
                            Daunnesia
                        </h3>
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
                                    setNavbarToggled((prev) => !prev)
                                }
                            >
                                <GiHamburgerMenu />
                            </button>
                        </div>
                        {/* end of mobile navbar */}

                        {/* desktop & tablet navbar */}
                        <div className="hidden lg:flex flex-row items-center">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    as="a"
                                    href={link.href}
                                    className={`relative px-[16px] flex justify-center text-sm group ${
                                        navLinks.length - 1 === index &&
                                        "pr-8 border-r-2 group border-accent dark:border-white"
                                    }`}
                                >
                                    {link.name}
                                    <span
                                        className={`${
                                            url === link.href
                                                ? "visible"
                                                : "invisible group-hover:visible"
                                        } absolute rounded-md -bottom-2 w-9 h-[3px] bg-secondary`}
                                    ></span>
                                </Link>
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
            {/* navbar menu container */}
            <div
                className={`${
                    navbarToggled ? "absolute" : "hidden"
                }  transition-all ease-in-out duration-1000 lg:hidden w-screen md:w-[40%] md:right-0 top-24`}
            >
                <div
                    ref={navbarMenuContainerRef}
                    className="flex flex-col bg-white dark:bg-accent mx-[36px] md:mx-[72px] rounded-md border-gray border-2 dark:border-secondary"
                >
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            as="a"
                            href={link.href}
                            className={`relative px-[16px] flex justify-center text-sm group py-4 text-center hover:bg-accent hover:text-accent2 dark:hover:bg-primary`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
            {/* end of navbar menu container */}
        </nav>
    );
}
