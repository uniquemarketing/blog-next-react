import clsx from "clsx";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <title>Página não encontrada</title>
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
          <h1 className="text-7xl/tight font-extrabold mb-4">404</h1>
          <p>Erro 404 - a página que você está tentando acessar não existe. </p>
          <Link className="pointer" href="/">
            Retornar a Home
          </Link>
        </div>
      </div>
    </>
  );
}
