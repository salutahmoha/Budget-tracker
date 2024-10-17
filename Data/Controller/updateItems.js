import fs from "fs";
import chalk from "chalk";
function updateItems(title, quantity, price) {
  const updateItem = {
    title: title,
    quantity: quantity,
    price: price,
    createdat: new Date(),
    lastUpdated: new Date(),
  };

  // const allItemsExist = items.find(
  //   (currentItems) =>
  //     currentItems.title === title &&
  //     currentItems.quantity === quantity &&
  //     currentItems.price === price,
  // );
  // if (allItemsExist) {
  //   console.log(chalk.bgRed("items already exist"));
  //   return;
  // }

  const loadedItems = fs.readFileSync("./data/item.json", "utf-8");
  let items;
  if (!loadedItems) {
    items = [];
  }
  items = JSON.parse(loadedItems);

  const itemsExist = items.find((currentItems) => currentItems.title === title);
  if (itemsExist) {
    itemsExist.quantity = quantity;
    itemsExist.price = price;

    console.log(chalk.bgBlue("Item updated successfully"));
  } else {
    items.push(updateItem);
    console.log(chalk.bgGreen("Items added successfully"));
  }

  fs.writeFileSync("./data/item.json", JSON.stringify(items));

  if (items.length === 0) {
    console.log("Nothing to update");
    return;
  }
}

export default updateItems;
