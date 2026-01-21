export interface Coin {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
}

export interface CoinDetails {
    id: string;
    symbol: string;
    name: string;
    description: {
        en: string;
    };
    image: {
        large: string;
    };
    market_data: {
        current_price: {
            usd: number;
        };
        market_cap: {
            usd: number;
        };
    };
}
