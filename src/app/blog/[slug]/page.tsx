import Link from "next/link";
import { getPosts, getPostsBySlug } from "../../lib/post";
import { notFound } from "next/navigation";
import "./article.css";
import Image from "next/image";

export function generateStaticParams() {
  const post = getPosts();

  return post.map((post) => {
    slug: post.slug;
  });
}

type BlogPostParams = { params: { slug: string } };

export default async function MyBlogs({ params }: BlogPostParams) {
  const post = await getPostsBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <div className="blog-container">
        <div className="title">
          {post.image && (
            <Image className="blog-image" src={post.image} alt="bear" width="200" height="150" placeholder="blur" />
          )}
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
