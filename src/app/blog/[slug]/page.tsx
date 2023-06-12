import Link from "next/link";
import { getPosts, getPostsBySlug } from "../../lib/post";
import { notFound } from "next/navigation";
import "./article.css";
import Image from "next/image";
import { kv } from "@vercel/kv";
import { Suspense } from "react";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostsBySlug(params.slug);
  return {
    title: "Crypto Blog",
    description: post?.title,
    openGraph: {
      title: "Crypto Blog",
    },
  };
}

export function generateStaticParams() {
  const post = getPosts();

  return post.map((post) => {
    slug: post.slug;
  });
}

type BlogPostParams = { params: { slug: string } };

export default async function MyBlogs({ params }: BlogPostParams) {
  const post = await getPostsBySlug(params.slug);

  const pageViews = kv.incr(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <div className="blog-container">
        <Suspense>
          {" "}
          <p>Views: {pageViews}</p>
        </Suspense>
        <div className="title">
          {post.image && <Image className="blog-image" src={post.image} alt="bear" width="200" height="150" />}
          <div dangerouslySetInnerHTML={{ __html: post.body.html }}></div>
          <Link href="blog">
            <button>
              Return<span>&#8617;</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
