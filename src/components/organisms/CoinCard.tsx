"use client";

import Link from "next/link";
import { Coin } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/card";

interface CoinCardProps {
    coin: Coin;
}

export const CoinCard = ({ coin }: CoinCardProps) => {
    return (
        <Link href={`/coin/${coin.id}`}>
            <Card>
                <CardHeader>
                    <div>
                        <div>
                            <CardTitle>{coin.name}</CardTitle>
                            <span>{coin.symbol}</span>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div>
                        <span>{coin.current_price}</span>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
};
