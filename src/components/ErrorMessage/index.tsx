import clsx from "clsx";

type ErrorMessageProps = {
  pageTitle?: string;
  contentTitle: string;
  content: React.ReactNode;
};
export default function ErrorMessage({
  pageTitle = "",
  contentTitle,
  content,
}: ErrorMessageProps) {
  return (
    <>
      {pageTitle && <title>{pageTitle}</title>}
      <div
        className={clsx(
          "min-h-95",
          "bg-slate-900",
          "text-slate-100",
          "mb-16",
          "p-8",
          "rounded-2xl",
          "flex",
          "items-center",
          "justify-center",
          "text-center"
        )}
      >
        <div>
          <h1 className="text-7xl/tight font-extrabold mb-4">{contentTitle}</h1>
          <div>{content}</div>
        </div>
      </div>
    </>
  );
}
