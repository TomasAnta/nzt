"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Coin } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/card";
import { PriceBadge } from "@/components/molecules/PriceBadge";
import { MouseEvent } from "react";

interface CoinCardProps {
    coin: Coin;
    isFavourite: boolean;
    onToggle: (e: MouseEvent, coinId: string) => void;
    isLoaded: boolean;
}

export const CoinCard = ({ coin, isFavourite, onToggle, isLoaded }: CoinCardProps) => {
    return (
        <Link href={`/coin/${coin.id}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div className="flex items-center gap-4">
                        <Image src={coin.image} alt={coin.name} width={48} height={48} style={{ aspectRatio: "1/1" }} className="rounded-full" />
                        <div>
                            <CardTitle className="text-lg font-bold">{coin.name}</CardTitle>
                            <span className="text-sm text-gray-500 uppercase">{coin.symbol}</span>
                        </div>
                    </div>
                    {isLoaded && (
                        <button className="p-2 z-10" onClick={(e) => onToggle(e, coin.id)} aria-label={isFavourite ? "Remove from favorites" : "Add to favorites"}>
                            <Star className={`h-6 w-6 transition-colors ${isFavourite ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                        </button>
                    )}
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-2xl font-semibold">${coin.current_price.toLocaleString()}</span>
                        <PriceBadge value={coin.price_change_percentage_24h} />
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
};
