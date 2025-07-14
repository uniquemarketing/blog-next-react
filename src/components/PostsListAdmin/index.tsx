import { findAllPostsAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import Link from "next/link";
import { DeletePostButton } from "../admin/DeletePostButton";
import ErrorMessage from "../ErrorMessage";

export default async function PostsListAdmin() {
  const posts = await findAllPostsAdmin();

  if (posts.length <= 0)
    return (
      <ErrorMessage contentTitle="Ei😊!" content="Bora criar algum post???" />
    );

  return (
    <div className="mb-16">
      {posts.map((post) => {
        return (
          <div
            className={clsx(
              "p-2",
              !post.published && "bg-slate-200",
              "flex gap-2 items-center justify-between"
            )}
            key={post.id}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>
            {!post.published && (
              <span className="text-xs text-slate-500 italic">
                (Não publicado)
              </span>
            )}

            <input type="hidden" name="id" defaultValue={post.id}></input>
            <DeletePostButton id={post.id} title={post.title} />
          </div>
        );
      })}
    </div>
  );
}
