import fs from "fs";
import chalk from "chalk";

function getItems(title) {
  const loadedItems = fs.readFileSync("./data/item.json", "utf-8");
  const items = JSON.parse(loadedItems);

  if (items.length === 0) {
    console.log(chalk.bgYellow("You do not have any items yet"));
    return;
  }

  if (title) {
    const item = items.find((currentItems) => currentItems.title === title);
    if (item) {
      console.log(item.title);
      console.log("--------");
      console.log("item.quantity");
      console.log("--------");
      console.log("item.price");
      return;
    }

    console.log(chalk.bgRed(`No notes with title '${title}'`));
    return;
  }

  items.forEach((currentItems) => {
    console.log(chalk.bgBlue("======="));
    console.log(currentItems.title);
    console.log("--------");
    console.log(currentItems.quantity);
    console.log("--------");
    console.log(currentItems.price);
    console.log("--------");

    console.log(
      `CreatedAt: ${new Date(currentItems.createdat).toDateString()}`,
    );
    console.log(chalk.bgBlue("=======\n"));
  });
}
export default getItems;
