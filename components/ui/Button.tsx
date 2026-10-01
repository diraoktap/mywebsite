import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type SharedProps = {
    children: ReactNode;
    className?: string;
    variant?:
    | "primary"
    | "cancel"
    | "delete"
    | "secondary"
    | "ghost"
    | "light"
    | "dark";
    arrow?: boolean;
};

type ButtonAsButton = SharedProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: never;
    };

type ButtonAsLink = SharedProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
    };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
    const {
        children,
        className = "",
        variant = "primary",
        arrow = false,
        ...rest
    } = props;

    const baseClasses =
        "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-white/30 transition duration-500 cursor-pointer";

    const variantClasses = {
        primary: "bg-[#D4FF00] text-[#121212] hover:bg-[#c7f500] shadow-[0_0_18px_rgba(212,255,0,0.28)]",
        cancel: "bg-[#facc15] text-[#121212] hover:bg-[#eab308] shadow-sm",
        delete: "bg-[#ef4444] text-white hover:bg-[#dc2626] shadow-sm",
        secondary: "border border-white/15 bg-transparent text-white hover:bg-white/5",
        ghost: "bg-white/3 text-white hover:bg-white/5 border border-white/15",
        light: "bg-[#f5f5f5] text-[#121212] hover:bg-[#e5e5e5] border border-white/15",
        dark: "bg-[#121212] text-white hover:bg-[#1c1c1c] border border-white/15",
    };

    const finalClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

    if ("href" in props && props.href) {
        const { href, target, rel, arrow: _arrow, ...linkRest } = props as ButtonAsLink;

        return (
            <a
                href={href}
                target={target}
                rel={rel}
                className={`${finalClasses} px-5 py-2.5`}
                {...linkRest}
            >
                <span>{children}</span>
                {arrow && <span aria-hidden="true">→</span>}
            </a>
        );
    }

    const { type = "button", arrow: _arrowButton, ...buttonRest } = props as ButtonAsButton;

    return (
        <button
            type={type}
            className={`${finalClasses} px-5 py-2.5`}
            {...buttonRest}
        >
            <span>{children}</span>
            {arrow && <span aria-hidden="true">→</span>}
        </button>
    );
}
