"use client";

import { Coin } from "@/lib/types";
import SearchInput from "../molecules/SearchInput";
import { CoinCard } from "../organisms/CoinCard";
import { useState } from "react";
import { useFavourites } from "@/hooks/useFavourites";

const Dashboard = ({ initialCoins }: { initialCoins: Coin[] }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const { favourites, toggleFavourites, isMounted } = useFavourites("favourites");

    const filteredCoins = initialCoins.filter(
        (coin) => coin.name.toLocaleLowerCase().includes(searchQuery.toLowerCase()) || coin.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return (
        <div className="p-3 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Crypto Tracker</h1>
            <div className="max-w-md mx-auto mb-10">
                <SearchInput onSearch={setSearchQuery} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {filteredCoins.map((coin) => (
                    <CoinCard key={coin.id} coin={coin} isFavourite={favourites.includes(coin.id)} onToggle={toggleFavourites} isLoaded={isMounted} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
