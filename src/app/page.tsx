import clsx from "clsx";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <h1
        className={clsx(
          "text-6xl",
          "font",
          "bold",
          "text-blue-600",
          "hover:text-blue-800",
          "transition",
          "duration-300"
        )}
      >
        Texto do H1
      </h1>
    </div>
  );
}
