import { render, screen, fireEvent } from "@testing-library/react";
import Filters from "../components/Filters";

test("calls onFilter callback when brand input changes", () => {
  const setBrandFilter = vi.fn();
  const setSortKey = vi.fn();

  render(
    <Filters
      brandFilter=""
      setBrandFilter={setBrandFilter}
      sortKey=""
      setSortKey={setSortKey}
    />,
  );

  const brandInput = screen.getByPlaceholderText(/e.g. Ford/i);
  fireEvent.change(brandInput, { target: { value: "Toyota" } });

  expect(setBrandFilter).toHaveBeenCalledWith("Toyota");
});
