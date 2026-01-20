import Dashboard from "@/components/templates/Dashboard";
import { getCrypto } from "@/lib/api";

export default async function Home() {
    const coins = await getCrypto();

    return <Dashboard initialCoins={coins} />;
}
