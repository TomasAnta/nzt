import { getCrypto } from "@/lib/api";

export default async function Home() {
    const coins = await getCrypto();
    console.log(coins);

    return <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"></div>;
}
