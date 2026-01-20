import Dashboard from "@/components/templates/Dashboard";
import { getCrypto } from "@/lib/api";

export default async function Home() {
    const coins = await getCrypto();
    console.log(coins);

    return <Dashboard />;
}
