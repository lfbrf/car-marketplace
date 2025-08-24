import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CarForm from "../components/CarForm.jsx";

function setup(onAdd = () => {}) {
  render(<CarForm onAdd={onAdd} />);
  return {
    brand: screen.getByLabelText(/brand/i),
    model: screen.getByLabelText(/model/i),
    year: screen.getByLabelText(/year/i),
    price: screen.getByLabelText(/price/i),
    submit: screen.getByRole("button", { name: /add car/i }),
  };
}

test("requires all fields", async () => {
  const u = userEvent.setup();
  const { submit } = setup();
  await u.click(submit);
  expect(screen.getByRole("alert")).toHaveTextContent(/all fields/i);
});

test("submits valid data", async () => {
  const u = userEvent.setup();
  const onAdd = vi.fn();
  const { brand, model, year, price, submit } = setup(onAdd);
  await u.type(brand, "Ford");
  await u.type(model, "Focus");
  await u.type(year, "2018");
  await u.type(price, "45000");
  await u.click(submit);
  expect(onAdd).toHaveBeenCalled();
});
