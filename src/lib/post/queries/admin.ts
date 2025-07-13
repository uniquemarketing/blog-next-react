import { postRepository } from "@/repositories/post";
import { cache } from "react";

export const findPostByIdAdmin = cache(async (id: string) => {
  return postRepository.findBySlugPublic(id);
});

export const findAllPostsAdmin = cache(async () => {
  return postRepository.findAll();
});
