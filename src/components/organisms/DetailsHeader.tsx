import Image from "next/image";

interface HeaderProps {
    name: string;
    symbol: string;
    image: string;
}

export const DetailsHeader = ({ name, symbol, image }: HeaderProps) => (
    <div className="flex items-center gap-6 mb-8 border-b pb-8">
        <Image src={image} alt={name} width={80} height={80} className="rounded-full shadow-sm h-auto" />
        <div>
            <h1 className="text-4xl font-bold tracking-tight">{name}</h1>
            <span className="text-xl text-gray-500 font-medium uppercase">{symbol}</span>
        </div>
    </div>
);
