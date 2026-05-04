import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

type AppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
  href: string;
};

const externalHrefPattern = /^(?:[a-z][a-z\d+\-.]*:|\/\/)/i;

export function AppLink({
  children,
  href,
  rel,
  target,
  ...props
}: AppLinkProps) {
  const isNativeLink =
    target === "_blank" ||
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    externalHrefPattern.test(href);

  if (isNativeLink) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? rel ?? "noreferrer" : rel}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <RouterLink to={href} {...props}>
      {children}
    </RouterLink>
  );
}
