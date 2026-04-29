import type { ReactNode } from "react";

type ServiceIconProps = {
  slug: string;
  className?: string;
};

function BaseIcon({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export function ServiceIcon({ slug, className = "h-16 w-16" }: ServiceIconProps) {
  switch (slug) {
    case "corporate-law":
      return (
        <BaseIcon className={className}>
          <path d="M14 36 32 14l18 22" />
          <path d="M18 36h28" />
          <path d="M22 36v12M32 36v12M42 36v12" />
          <path d="M16 50h32" />
        </BaseIcon>
      );
    case "criminal-defense":
    case "white-collar-crime":
      return (
        <BaseIcon className={className}>
          <circle cx="22" cy="32" r="8" />
          <circle cx="42" cy="32" r="8" />
          <path d="M30 32h4" />
          <path d="M17 26l-6-5M47 26l6-5" />
        </BaseIcon>
      );
    case "family-law":
      return (
        <BaseIcon className={className}>
          <circle cx="24" cy="23" r="6" />
          <circle cx="40" cy="23" r="6" />
          <path d="M18 47c1-8 5-14 10-16M46 47c-1-8-5-14-10-16" />
          <path d="M26 31l6 6 6-6" />
        </BaseIcon>
      );
    case "real-estate-law":
      return (
        <BaseIcon className={className}>
          <path d="M14 31 32 18l18 13" />
          <path d="M20 29v18h24V29" />
          <path d="M28 47V36h8v11" />
        </BaseIcon>
      );
    case "intellectual-property":
      return (
        <BaseIcon className={className}>
          <circle cx="32" cy="32" r="14" />
          <path d="M32 18a9 9 0 1 0 0 28" />
          <path d="M38 22a11 11 0 0 1 0 20" />
        </BaseIcon>
      );
    case "litigation":
    case "arbitration-mediation":
      return (
        <BaseIcon className={className}>
          <path d="M32 15v34" />
          <path d="M18 23h28" />
          <path d="m22 23-7 14h14l-7-14ZM42 23l-7 14h14l-7-14Z" />
          <path d="M20 49h24" />
        </BaseIcon>
      );
    case "employment-labor-law":
      return (
        <BaseIcon className={className}>
          <path d="M19 43V27l13-8 13 8v16" />
          <path d="M24 33h16" />
          <path d="M28 43V33M36 43V33" />
          <path d="M16 47h32" />
        </BaseIcon>
      );
    case "tax-regulatory-advisory":
      return (
        <BaseIcon className={className}>
          <path d="M20 16h16l8 8v24H20z" />
          <path d="M36 16v8h8" />
          <path d="M25 33h14M25 40h10" />
        </BaseIcon>
      );
    case "banking-insolvency":
      return (
        <BaseIcon className={className}>
          <path d="M14 26 32 17l18 9" />
          <path d="M18 29h28" />
          <path d="M22 29v13M32 29v13M42 29v13" />
          <path d="M16 45h32" />
        </BaseIcon>
      );
    case "cyber-data-privacy":
      return (
        <BaseIcon className={className}>
          <path d="M32 16a10 10 0 0 1 10 10v6a12 12 0 1 1-20 0v-6a10 10 0 0 1 10-10Z" />
          <path d="M32 36v7" />
          <circle cx="32" cy="31" r="1.5" fill="currentColor" stroke="none" />
        </BaseIcon>
      );
    default:
      return (
        <BaseIcon className={className}>
          <path d="M32 15v34" />
          <path d="M18 23h28" />
          <path d="m22 23-7 14h14l-7-14ZM42 23l-7 14h14l-7-14Z" />
          <path d="M20 49h24" />
        </BaseIcon>
      );
  }
}
