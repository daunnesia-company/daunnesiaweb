import { Link } from "@inertiajs/inertia-react";
/** Button or Link or Anchor component with variants and icons support (default: button)
 * @param {string} as "button" or "link" or "a" (default: "button")
 * @param {string} variant "primary"|"primaryOnWhiteSurface"|"dark"|"darkOnWhiteSurface"|"outline"|"outlineOnWhiteSurface" (default: "primary")
 * @param {string} title text to be displayed (default: "Button")
 * @param {JSX.Element} icon icon to be displayed (default: null)
 * @param {string} replaceWidth className width of the button (default: "w-[168px] md:w-[158px] lg:w-[200px]")
 * @param {string} replaceHeight className height of the button (default: "h-[42px] md:h-[42px] lg:h-[48px]")
 * @param {string} href href to be used in the link (only if as="a" or as="link")
 * @param {string} target target to be used in the link (only if as="a")
 * @param {function} onClick onClick function to be used in the button (only if as="button")
 * @returns {JSX.Element} Button or Link or Anchor (default: button)
 *
 * @faq When to use Link?
 * @answer When you want to navigate to another page without reloading the page
 * @faq When to use Anchor?
 * @answer When you want to navigate to another page with reloading the page or when you want to open a link in a new tab
 * @faq When to use Button?
 * @answer When you want to trigger an action without navigating to another page or when you want to trigger an action with events
 *
 * @note Button is the default component
 * @note onClick prop is only used if as="button"
 * @note href prop is only used if as="a" or as="link"
 * @note target prop is only used if as="a"
 * @note other props are used in all cases
 *
 * @example
 * // Default Button
 * <Button
 *     title="Default"
 *     onClick={(e) => console.log("clicked")}
 * />
 * // Link Button
 * <Button as="link" href="/" title="Go to `/`" />
 *
 * // Anchor Button
 * <Button as="a" href="/" title="Reload Page `/`" />
 *
 * // Anchor Button with target="_blank"
 * <Button
 *     as="a"
 *     variant="darkOutline"
 *     href="/"
 *     target="_blank"
 *     title="New Tab `/`"
 * />
 *
 * // Button with icon
 * <Button
 *     as="button"
 *     variant="dark"
 *     icon={
 *         <BsArrowRightShort className="text-2xl lg:text-3xl" />
 *     }
 *     alt="Arrow Right"
 * />
 */

export default function Button({
    as = "button",
    variant = "primary",
    title = "Button",
    icon = null,
    replaceWidth = "w-[168px] md:w-[158px] lg:w-[200px]",
    replaceHeight = "h-[42px] md:h-[42px] lg:h-[48px]",
    href = null,
    target = "_self",
    onClick = () => null,
}) {
    const baseStyle = `${replaceWidth} ${replaceHeight} rounded-md font-bold text-[12px] md:text-[14px] lg:text-[18px] truncate`;

    const variantStyle = (() => {
        const primary =
            "bg-primary text-accent2 hover:bg-secondary/90 active:bg-secondary dark:hover:bg-secondary/80 dark:active:bg-secondary/60";
        switch (variant) {
            case "primary":
                return primary;
            case "primaryOnWhiteSurface":
                return "bg-primary text-accent2 hover:bg-secondary/90 active:bg-secondary";
            case "dark":
                return "bg-accent text-accent2 hover:bg-accent/90 active:bg-accent/95 dark:border-white dark:border-2 dark:bg-accent hover:dark:bg-black/30 active:dark:bg-black/50";
            case "darkOnWhiteSurface":
                return "bg-accent text-accent2 hover:bg-accent/90 active:bg-accent/95";
            case "outline":
                return "bg-transparent text-primary border-2 border-primary hover:bg-primary/70 hover:text-accent2 active:bg-primary/90 dark:hover:bg-secondary/30 dark:active:bg-secondary/50 dark:hover:text-accent2";
            case "outlineOnWhiteSurface":
                return "bg-transparent text-primary border-2 border-primary hover:bg-primary/70 hover:text-accent2 active:bg-primary/90";
            default:
                return primary;
        }
    })();

    const buttonAttributes = {
        className: `${baseStyle} ${variantStyle}`,
        onClick: onClick,
    };

    const linkAttributes = {
        className: `${baseStyle} ${variantStyle} flex justify-center items-center`,
        href: href,
    };

    const aAttributes = {
        className: `${baseStyle} ${variantStyle} flex justify-center items-center`,
        href: href,
        rel: href === null ? "noreferrer" : "",
        target: target,
    };

    if (as === "button")
        return (
            <button {...buttonAttributes}>
                <Button.TitleOnlyOrTitleWithIcon {...{ title, icon }} />
            </button>
        );

    if (as === "link")
        return (
            <Link {...linkAttributes}>
                <Button.TitleOnlyOrTitleWithIcon {...{ title, icon }} />
            </Link>
        );

    if (as === "a")
        return (
            <a {...aAttributes}>
                <Button.TitleOnlyOrTitleWithIcon {...{ title, icon }} />
            </a>
        );

    console.error(
        "Button component argument has Invalid 'as' prop value. It should be 'button' or 'link' or 'a'"
    );

    return null;
}

Button.TitleOnlyOrTitleWithIcon = ({ title, icon }) => (
    <>
        {icon === null ? (
            title
        ) : (
            <div className="flex justify-center items-center overflow-clip">
                <span>{title}</span>
                <span className="ml-[0.25rem]">{icon}</span>
            </div>
        )}
    </>
);
