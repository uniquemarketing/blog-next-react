import { postRepository } from "@/repositories/post";
import { cache } from "react";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";

export const findAllPublicPostsCached = unstable_cache(
  cache(async () => {
    return await postRepository.findAllPublic();
  }),
  ["posts"],
  {
    tags: ["posts"],
  }
);

export const findPostBySlugCached = (slug: string) =>
  unstable_cache(
    cache(async (slug: string) => {
      const post = await postRepository
        .findBySlugPublic(slug)
        .catch(() => undefined);
      if (!post) notFound();
      return post;
    }),
    ["posts"],
    {
      tags: [`post-${slug}`],
    }
  )(slug);

export const findPostByIdCached = cache(
  async (id: string) => await postRepository.findBySlugPublic(id)
);
