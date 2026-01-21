import parse from "html-react-parser";
import { CoinDetails } from "@/lib/types";
import { BackLink } from "@/components/molecules/BackLink";
import { StatBox } from "@/components/molecules/StatBox";
import { DetailsHeader } from "@/components/organisms/DetailsHeader";

export const Details = ({ coin }: { coin: CoinDetails }) => {
    return (
        <div className="container mx-auto p-6 max-w-4xl">
            <BackLink href="/" label="Back to Dashboard" />

            <DetailsHeader name={coin.name} symbol={coin.symbol} image={coin.image.large} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <StatBox label="Current Price" value={`$${coin.market_data.current_price.usd.toLocaleString()}`} />
                <StatBox label="Market Cap" value={`$${coin.market_data.market_cap.usd.toLocaleString()}`} />
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border">
                <h2 className="text-xl font-bold mb-4">About {coin.name}</h2>
                <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed">
                    {coin.description.en ? parse(coin.description.en) : "No description available."}
                </div>
            </div>
        </div>
    );
};
