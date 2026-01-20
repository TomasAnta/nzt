import { Coin } from "./types";

const BASE_URL = "https://api.coingecko.com/api/v3";

export async function getCrypto(): Promise<Coin[]> {
    const response = await fetch(`${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1`, { next: { revalidate: 60 } });

    if (response.status === 429) {
        throw new Error("Rate Limit exceeded");
    }

    if (!response.ok) {
        throw new Error("Failed to fetch coins");
    }

    return response.json();
}
