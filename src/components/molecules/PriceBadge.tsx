export const PriceBadge = ({ value }: { value: number }) => {
    const isPositive = value > 0;
    return (
        <span className={`px-2 py-1 rounded text-sm font-medium ${isPositive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {isPositive ? "+" : ""}
            {value.toFixed(2)}%
        </span>
    );
};
