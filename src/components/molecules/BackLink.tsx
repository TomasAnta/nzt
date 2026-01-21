import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const BackLink = ({ href, label }: { href: string; label: string }) => (
    <Link href={href} className="inline-flex items-center text-gray-600 hover:text-black mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        {label}
    </Link>
);
