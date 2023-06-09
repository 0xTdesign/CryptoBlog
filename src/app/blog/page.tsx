import Link from "next/link";
import "./blog.css";
import { getPosts } from "../lib/post";
import { compareAsc } from "date-fns";
import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

type blogsearchParams = {
  [key: string]: string;
};

function sortDates(a: Post, b: Post) {
  if (a.date < b.date) {
    return -1;
  } else if (a.date > b.date) {
    return 1;
  } else {
    return 0;
  }
}

export default async function BlogPage({ searchParams }: { searchParams: blogsearchParams }) {
  const posts = await getPosts().sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)));

  if (searchParams.sortBy === "asc") {
    posts.sort(sortDates);
  } else if (searchParams.sortBy === "desc") {
    posts.sort(sortDates).reverse();
  }

  return (
    <section>
      <div className="main-container">
        <div className="title">
          <h1>My Articles</h1>
          <p>
            Discover a collection of articles based on my experiences in the DeFi world. Click below to explore valuable
            insights and guidance for your own decentralized finance journey.
          </p>
          <div className="line"></div>
        </div>

        <div className="arrows">
          <button>
            <Link href="/blog?sortBy=asc"> &#8593;</Link>
          </button>
          <button>
            <Link href="/blog?sortBy=desc">&#8595;</Link>
          </button>
        </div>
        <div className="blog">
          <ul>
            {posts.map((post) => {
              return (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>
                    <span className="post-title">{post.title}</span>
                    <span className="post-date">
                      <span className="published">Published: </span>
                      {format(parseISO(post.date), "LLLL d, yyyy")}
                    </span>
                    <button className="read-btn">Read More</button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
