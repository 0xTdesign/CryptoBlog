import Link from "next/link";

export default function page() {
  return (
    <div className="container">
      <h1 className="heading">About me</h1>
      <p className="text">
        I&apos;m thrilled to have you here as we dive into the world of crypto and DeFi. I&apos;ve developed a deep passion
        for coding and helping others in the crypto space. Through this blog, I aim to provide valuable insights, tips, and
        educational content to help individuals on their DeFi journey. Let&apos;s unlock the potential of decentralized
        finance together and explore the fascinating world of crypto.
      </p>
      <Link href="/blog">
        <button className="explore-btn">Explore</button>
      </Link>
    </div>
  );
}
