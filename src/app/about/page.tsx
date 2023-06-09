import Link from "next/link";

export default function page() {
  return (
    <div className="container">
      <h1 className="heading">About me</h1>
      <p className="text">
        I'm thrilled to have you here as we dive into the world of crypto and DeFi. Having lived in Dubai my entire life,
        I've developed a deep passion for coding and helping others in the crypto space. Through this blog, I aim to provide
        valuable insights, tips, and educational content to empower individuals on their DeFi journey. Let's unlock the
        potential of decentralized finance together and explore the fascinating world of crypto. Join me on this exciting
        adventure
      </p>
      <Link href="/blog">
        <button className="explore-btn">
          <a>Explore</a>
        </button>
      </Link>
    </div>
  );
}
