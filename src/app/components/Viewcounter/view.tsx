import { kv } from "@vercel/kv";

export default async function ViewCounter() {
  const pageViews = await kv.incr("views");
  return (
    <div>
      <p>Viewed: {pageViews}</p>
    </div>
  );
}
