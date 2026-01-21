import { getCryptoDetails } from "@/lib/api";
import { Details } from "@/components/templates/Details";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function CoinPage({ params }: PageProps) {
    const { id } = await params;
    const coin = await getCryptoDetails(id);
    return <Details coin={coin} />;
}
