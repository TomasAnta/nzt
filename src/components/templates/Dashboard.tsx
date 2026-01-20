"use client";

import { Coin } from "@/lib/types";
import SearchInput from "../molecules/SearchInput";
import { CoinCard } from "../organisms/CoinCard";
import { useState } from "react";

const Dashboard = ({ initialCoins }: { initialCoins: Coin[] }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCoins = initialCoins.filter(
        (coin) => coin.name.toLocaleLowerCase().includes(searchQuery.toLowerCase()) || coin.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return (
        <div>
            <h1>Dashboard</h1>
            <SearchInput onSearch={setSearchQuery} />
            <div>
                {filteredCoins.map((coin) => (
                    <CoinCard key={coin.id} coin={coin} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
