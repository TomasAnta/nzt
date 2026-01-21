"use client";

import { useEffect, useState } from "react";
import { Input } from "../atoms/input";

interface SearchInputProps {
    onSearch: (value: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const debounce = setTimeout(() => {
            onSearch(inputValue);
        }, 500);

        return () => clearTimeout(debounce);
    }, [inputValue, onSearch]);

    return <Input className="w-full" placeholder="Search coins..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />;
};

export default SearchInput;
