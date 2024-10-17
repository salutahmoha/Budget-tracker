import fs from "fs";
import chalk from "chalk";
function addItems(title, quantity, price) {
  const newItem = {
    title: title,
    quantity: quantity,
    price: price,
    createdat: new Date(),
    lastUpdated: new Date(),
  };

  const loadedItems = fs.readFileSync("./data/item.json", "utf-8");
  let items;
  if (!loadedItems) {
    items = [];
  }
  items = JSON.parse(loadedItems);

  const itemsExist = items.find((currentItems) => currentItems.title === title);
  if (itemsExist) {
    console.log(chalk.bgRed("Item already exists"));
    return;
  }

  items.push(newItem);

  fs.writeFileSync("./data/item.json", JSON.stringify(items));
  console.log(chalk.bgBlue("Item added successfully"));
}

export default addItems;
