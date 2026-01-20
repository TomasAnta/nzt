"use client";

import { useState } from "react";
import { Input } from "../atoms/input";

const SearchInput = () => {
    const [inputValue, setInputValue] = useState("");

    return (
        <div>
            <Input placeholder="Search coins..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </div>
    );
};

export default SearchInput;
