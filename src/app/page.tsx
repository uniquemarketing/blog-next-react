import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { PostHeading } from "@/components/PostHeading";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link className="w-full h-full overflow-hidden rounded-xl" href="#">
          <Image
            className="w-full h-full object-cover object-center group-hover:scale-105 transition"
            src="/images/bryen_0.png"
            alt="Título do Post"
            width={1200}
            height={720}
            priority
          />
        </Link>
        <div className="flex flex-col gap-3 sm:justify-center">
          <time
            className="block text-slate-600 text-sm/tight"
            dateTime="2025-04-20"
          >
            20/04/2025 10:00
          </time>
          <PostHeading url="#" as="h2">
            exercitationem tempora sint ipsum?
          </PostHeading>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          molestias sequi recusandae ratione cum dolore illo explicabo corrupti
          esse suscipit deleniti, maxime omnis officia facilis! Provident
          exercitationem tempora sint ipsum?
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer className="text-6xl font-bold text-center py-16">Footer</footer>
    </Container>
  );
}
