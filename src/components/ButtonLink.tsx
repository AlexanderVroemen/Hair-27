import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  target?: string;
  rel?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  target,
  rel
}: ButtonLinkProps) {
  const classes = `button-base focus-ring button-${variant} ${className}`;

  if (href.startsWith("/") && !href.includes("#")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} target={target} rel={rel}>
      {children}
    </a>
  );
}
