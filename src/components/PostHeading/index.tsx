import clsx from "clsx";
import Link from "next/link";
type PostHeadingPropos = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};
export function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: PostHeadingPropos) {
  const headingClassMap = {
    h1: "text-2xl/tight  mb-4 sm:text-3xl",
    h2: "text-2xl/tight  mb-4 sm:text-3xl",
  };
  const commonClass = "font-extrabold";
  return (
    <Tag className={clsx(headingClassMap[Tag], commonClass)}>
      <Link className="group-hover:text-slate-600 transition" href={url}>
        {children}
      </Link>
    </Tag>
  );
}
