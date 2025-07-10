import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <p className="py-8 text-center">
        Copyright &copy; {new Date().getFullYear()}
        {" - "}
        <Link href="/">The Blog</Link>
      </p>
    </footer>
  );
}
