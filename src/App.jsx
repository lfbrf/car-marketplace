import { useMemo, useState } from "react";
import CarForm from "./components/CarForm.jsx";
import CarList from "./components/CarList.jsx";
import Filters from "./components/Filters.jsx";
import useLocalStorage from "./hooks/useLocalStorage.js";

export default function App() {
  const [cars, setCars] = useLocalStorage("cars", [
    {
      id: crypto.randomUUID(),
      brand: "Toyota",
      model: "Corolla",
      year: 2019,
      price: 54000,
    },
    {
      id: crypto.randomUUID(),
      brand: "Honda",
      model: "Civic",
      year: 2021,
      price: 88000,
    },
  ]);
  const [brandFilter, setBrandFilter] = useState("");
  const [sortKey, setSortKey] = useState("");

  function addCar(car) {
    setCars((prev) => [car, ...prev]);
  }

  function deleteCar(id) {
    setCars((prev) => prev.filter((c) => c.id !== id));
  }

  const filtered = useMemo(() => {
    let list = cars;
    if (brandFilter) {
      const q = brandFilter.toLowerCase();
      list = list.filter((c) => c.brand.toLowerCase().includes(q));
    }
    switch (sortKey) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "year-asc":
        list = [...list].sort((a, b) => a.year - b.year);
        break;
      case "year-desc":
        list = [...list].sort((a, b) => b.year - a.year);
        break;
      default:
        break;
    }
    return list;
  }, [cars, brandFilter, sortKey]);

  return (
    <div className="max-w-6xl mx-auto p-6 grid gap-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Car Marketplace</h1>
        <div className="text-sm text-gray-500">Frontend Demo</div>
      </header>
      <div className="grid md:grid-cols-[1fr_2fr] gap-6">
        <CarForm onAdd={addCar} />
        <div className="grid gap-4">
          <Filters
            brandFilter={brandFilter}
            setBrandFilter={setBrandFilter}
            sortKey={sortKey}
            setSortKey={setSortKey}
          />
          <CarList cars={filtered} onDelete={deleteCar} />
        </div>
      </div>
    </div>
  );
}
