import type { ImgHTMLAttributes } from "react";

type AppImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "loading"> & {
  fill?: boolean;
  priority?: boolean;
};

export function AppImage({
  alt,
  className = "",
  fill = false,
  priority = false,
  ...props
}: AppImageProps) {
  const fillClasses = fill ? "absolute inset-0 h-full w-full" : "";
  const classes = [fillClasses, className].filter(Boolean).join(" ");

  return (
    <img
      alt={alt}
      className={classes}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      {...props}
    />
  );
}
