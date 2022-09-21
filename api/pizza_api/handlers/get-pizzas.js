const pizzas = require("../data/pizzas.json");
function getPizzas(pizzaId) {
  //   if (!pizzaId) return { message: "success" };
  if (!pizzaId) return pizzas;
  const pizza = pizzas.find((item) => {
    return item.id == pizzaId; // == потому что сравниваем строку с числом
  });
  if (pizza) return pizza;
  throw new Error("The pizza you requested was not found");
}

module.exports = getPizzas;
