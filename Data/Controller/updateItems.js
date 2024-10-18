import fs from "fs";
import chalk from "chalk";

function updateItems(title, quantity, price) {
  const loadedItems = fs.readFileSync("./data/item.json", "utf-8");
  let items = loadedItems ? JSON.parse(loadedItems) : [];

  const itemsExist = items.find((currentItems) => currentItems.title === title);

  if (itemsExist) {
    if (itemsExist.quantity === quantity && itemsExist.price === price) {
      console.log(chalk.bgRed("Record already exists"));
      return;
    }

    // Update only the fields that are provided
    if (quantity !== undefined) {
      itemsExist.quantity = quantity;
    }
    if (price !== undefined) {
      itemsExist.price = price;
    }

    itemsExist.lastUpdated = new Date();
    console.log(chalk.bgBlue("Item updated successfully"));
  } else {
    const updateItem = {
      title: title,
      quantity: quantity || "",
      price: price || "",
      createdat: new Date(),
      lastUpdated: new Date(),
    };

    items.push(updateItem);
    console.log(chalk.bgGreen("Item added successfully"));
  }

  fs.writeFileSync("./data/item.json", JSON.stringify(items));

  if (items.length === 0) {
    console.log("Nothing to update");
    return;
  }
}

export default updateItems;
