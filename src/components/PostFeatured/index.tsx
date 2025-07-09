import { PostSummary } from "../PostSummary";

export function PostFeatured() {
  const slug = "";
  const postLink = `/post/${slug}`;
  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostSummary
        postLink={postLink}
        postHeading="h1"
        createdAt={"2025-04-08T00:24:38.616Z"}
        excerpt={
          "O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO."
        }
        title={"Rotina matinal de pessoas altamente eficazes"}
      />
    </section>
  );
}
