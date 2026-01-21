export const StatBox = ({ label, value }: { label: string; value: string }) => (
    <div className="p-6 bg-white border rounded-xl shadow-sm">
        <p className="text-sm text-gray-500 font-medium mb-1">{label}</p>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
);
