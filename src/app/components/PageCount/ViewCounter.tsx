import { kv } from "@vercel/kv";

export default async function ViewCounter({ kvKey }: { kvKey: string }) {
  const pageViews = await kv.incr(kvKey);
  return (
    <div>
      <p>Viewed:{pageViews}</p>
    </div>
  );
}
