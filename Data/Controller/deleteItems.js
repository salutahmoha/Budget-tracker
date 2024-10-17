import chalk from "chalk";
import fs from "fs";
function deleteItems(title) {
  const loadedItems = fs.readFileSync("./data/item.json", "utf-8");
  const items = JSON.parse(loadedItems);

  if (items.length === 0) {
    console.log(chalk.bgYellow("Nothing to delete"));
    return;
  }

  const remainingItems = items.filter(
    (currentItems) => currentItems.title !== title,
  );
  if (remainingItems.length === items.length) {
    console.log(
      chalk.red(
        `Could not delete the item with title '${title}'. It doesn't exist`,
      ),
    );
    return;
  }

  fs.writeFileSync("./data/item.json", JSON.stringify(remainingItems));
  console.log(
    chalk.bgGreen(`Notes with title '${title}' deleted successfully`),
  );
}

export default deleteItems;
