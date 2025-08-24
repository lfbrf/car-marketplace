export default function CarList({ cars, onDelete }) {
  if (!cars.length) return <div className="text-gray-500">No cars found</div>;
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cars.map((c) => (
        <li
          key={c.id}
          className="relative border rounded-2xl bg-white p-4 shadow flex flex-col gap-2"
        >
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-black"
            onClick={() => onDelete(c.id)}
          >
            ✕
          </button>

          <div className="text-lg font-semibold">
            {c.brand} {c.model}
          </div>
          <div className="text-sm">Year: {c.year}</div>
          <div className="text-sm">Price: ${c.price.toLocaleString()}</div>
        </li>
      ))}
    </ul>
  );
}
