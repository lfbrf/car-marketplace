export default function Filters({
  brandFilter,
  setBrandFilter,
  sortKey,
  setSortKey,
}) {
  return (
    <div className="flex flex-wrap gap-3 items-end">
      <div className="grid gap-1">
        <label className="text-sm">Search by brand</label>
        <input
          value={brandFilter}
          onChange={(e) => setBrandFilter(e.target.value)}
          className="border rounded-xl p-2"
          placeholder="e.g. Ford"
        />
      </div>
      <div className="grid gap-1">
        <label className="text-sm">Sort</label>
        <select
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value)}
          className="border rounded-xl p-2"
        >
          <option value="">None</option>
          <option value="price-asc">Price ↑</option>
          <option value="price-desc">Price ↓</option>
          <option value="year-asc">Year ↑</option>
          <option value="year-desc">Year ↓</option>
        </select>
      </div>
    </div>
  );
}
