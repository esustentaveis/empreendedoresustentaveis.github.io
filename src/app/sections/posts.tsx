import { getAllPosts } from "@/lib/api";
import classNames from "classnames";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export const Posts = () => {
  const allPosts = getAllPosts();

  const firstTreePosts = allPosts.slice(0, 3);

  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-8 px-16 pt-12">
      {firstTreePosts.map((post) => (
        <div key={post.slug}>
          <div className="mb-5">
            <Link href={`/posts/${post.slug}`} aria-label={post.title}>
              <Image
                src={post.coverImage}
                alt={`Cover Image for ${post.title}`}
                className={classNames("shadow-sm w-full", {
                  "hover:shadow-lg transition-shadow duration-200": post.slug,
                })}
                width={1300}
                height={630}
              />
            </Link>
          </div>
          <h3 className="text-3xl mb-3">
            <Link href={`/posts/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>
          <div className="text-lg mb-4">
            <time dateTime={post.date}>
              {format(parseISO(post.date), "LLLL	d, yyyy")}
            </time>
          </div>
          <p className="text-lg leading-relaxed mb-4">{post.excerpt}</p>
          <div className="flex items-center">
            <img
              src={post.author.picture}
              className="w-12 h-12 rounded-full mr-4"
              alt={post.author.name}
            />
            <div className="text-xl font-bold">{post.author.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
