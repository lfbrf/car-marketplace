import React, { useState } from "react";

export default function CarForm({ onAdd }) {
  const [form, setForm] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { brand, model, year, price } = form;
    if (!brand || !model || !year || !price) {
      setError("Please fill all fields");
      return;
    }
    onAdd(form);
    setForm({ brand: "", model: "", year: "", price: "" });
  };

  return (
    <form
      aria-label="car-form"
      onSubmit={handleSubmit}
      className="grid gap-3 p-4 bg-white rounded-2xl shadow"
    >
      <div className="grid gap-1">
        <label htmlFor="brand" className="text-sm">
          Brand
        </label>
        <input
          id="brand"
          name="brand"
          value={form.brand}
          onChange={handleChange}
          className="border rounded-xl p-2"
          placeholder="e.g. Toyota"
        />
      </div>

      <div className="grid gap-1">
        <label htmlFor="model" className="text-sm">
          Model
        </label>
        <input
          id="model"
          name="model"
          value={form.model}
          onChange={handleChange}
          className="border rounded-xl p-2"
          placeholder="e.g. Corolla"
        />
      </div>

      <div className="grid gap-1">
        <label htmlFor="year" className="text-sm">
          Year
        </label>
        <input
          id="year"
          name="year"
          value={form.year}
          onChange={handleChange}
          className="border rounded-xl p-2"
          placeholder="e.g. 2019"
        />
      </div>

      <div className="grid gap-1">
        <label htmlFor="price" className="text-sm">
          Price
        </label>
        <input
          id="price"
          name="price"
          value={form.price}
          onChange={handleChange}
          className="border rounded-xl p-2"
          placeholder="e.g. 55000"
        />
      </div>
      {error && <div role="alert">{error}</div>}
      <button
        type="submit"
        className="rounded-2xl px-4 py-2 bg-black text-white"
      >
        Add Car
      </button>
    </form>
  );
}
