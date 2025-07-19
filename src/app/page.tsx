import Link from "next/link";

// UI
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-full h-[100dvh] flex flex-col justify-center items-center">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        Personal Tango
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 mb-8">
        自分だけの単語帳をいつでも・いくつでも作成
      </p>
      <Button asChild>
        <Link href="/">ログイン</Link>
      </Button>
    </main>
  );
}
