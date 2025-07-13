import { postRepository } from "@/repositories/post";
import { cache } from "react";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";

export const findAllPublicPostsCached = cache(
  unstable_cache(
    async () => {
      return await postRepository.findAllPublic();
    },
    ["posts"],
    {
      tags: ["posts"],
    }
  )
);

export const findPublicPostBySlugCached = cache((slug: string) => {
  return unstable_cache(
    async (slug: string) => {
      const post = await postRepository
        .findBySlugPublic(slug)
        .catch(() => undefined);
      if (!post) notFound();
      return post;
    },
    [`post-${slug}`],
    { tags: [`post-${slug}`] }
  )(slug);
});
