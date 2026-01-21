"use client";

import { useState, useEffect, MouseEvent } from "react";

export function useFavourites(storageKey: string = "favourites") {
    const [favourites, setFavourites] = useState<string[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const stored = localStorage.getItem(storageKey);
        if (stored) {
            setFavourites(JSON.parse(stored));
        }
    }, [storageKey]);

    const toggleFavourites = (e: MouseEvent, coinId: string) => {
        e.preventDefault();

        let updated: string[];

        if (favourites.includes(coinId)) {
            updated = favourites.filter((id) => id !== coinId);
        } else {
            updated = [...favourites, coinId];
        }

        setFavourites(updated);
        localStorage.setItem(storageKey, JSON.stringify(updated));
    };

    return { favourites, toggleFavourites, isMounted };
}
