import Image from "next/image";
import styles from "./page.module.css";
import "./blog/blog.css";
import "./globals.css";

export default function Home() {
  return (
    <div className="container">
      <h1 className="heading">Welcome to my blog</h1>
      <p className="text">
        A delightful destination for learning about DeFi. Join me on an educational journey as we dive into the world of
        decentralized finance. Together, we&apos;ll explore valuable insights and practical knowledge. Buckle up, you're
        about to read the HOLY GRAIL of shitcoin rules. I hope you enjoy this blog.
      </p>
      <button className="explore-btn">
        <a href="/blog">Explore</a>
      </button>
    </div>
  );
}
