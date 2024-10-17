import fs from "fs";
import { Command } from "commander";
import chalk from "chalk";
const program = new Command();

program
  .name("budget-tracker")
  .description("Ann application to track your budget")
  .version("1.0.0");

// // Add item
// program
//   .command("new")
//   .description("Add new item")
//   .option("-t | --title <value>", "title of the item to be added")
//   .option("-q | --quantity <value>", "amount of the quantity to be added")
//   .option("-p | --price <value>", "price to be added")

//   .action(function (options) {
//     const title = options.title;
//     const quantity = options.quantity;
//     const price = options.price;

//     const newItem = {
//       title: title,
//       quantity: quantity,
//       price: price,
//       createdat: new Date(),
//       lastUpdated: new Date(),
//     };

//     const loadedItems = fs.readFileSync("./data/item.json", "utf-8");
//     let items;
//     if (!loadedItems) {
//       items = [];
//     }
//     items = JSON.parse(loadedItems);

//     const itemsExist = items.find(
//       (currentItems) => currentItems.title === title,
//     );
//     if (itemsExist) {
//       console.log(chalk.bgRed("Item already exists"));
//       return;
//     }

//     items.push(newItem);

//     fs.writeFileSync("./data/item.json", JSON.stringify(items));
//     console.log(chalk.bgBlue("Item added successfully"));
//   });

// // Getting Item
// program
//   .command("get")
//   .description("Display all the Items")
//   .option("-t | --title <value>", "title of the item to be displayed")
//   .action(function (options) {
//     const title = options.title;
//     const loadedItems = fs.readFileSync("./data/item.json", "utf-8");
//     const items = JSON.parse(loadedItems);

//     if (items.length === 0) {
//       console.log(chalk.bgYellow("You do not have any items yet"));
//       return;
//     }

//     if (title) {
//       const item = items.find((currentItems) => currentItems.title === title);
//       if (item) {
//         console.log(item.title);
//         console.log("--------");
//         console.log("item.quantity");
//         console.log("--------");
//         console.log("item.price");
//         return;
//       }

//       console.log(chalk.bgRed(`No notes with title '${title}'`));
//       return;
//     }

//     items.forEach((currentItems) => {
//       console.log(chalk.bgBlue("======="));
//       console.log(currentItems.title);
//       console.log("--------");
//       console.log(currentItems.quantity);
//       console.log("--------");
//       console.log(currentItems.price);
//       console.log("--------");

//       console.log(
//         `CreatedAt: ${new Date(currentItems.createdat).toDateString()}`,
//       );
//       console.log(chalk.bgBlue("=======\n"));
//     });
//   });

// // Update Item
// program
//   .command("update")
//   .description("Update a specified item")
//   .option("-t | --title <value>", "title of the item to be updated")
//   .option("-q | --quantity <value>", "amount of the quantity to be updated")
//   .option("-p | --price <value>", "price to be updated")

//   .action(function (options) {
//     const title = options.title;
//     const quantity = options.quantity;
//     const price = options.price;

//     const updateItem = {
//       title: title,
//       quantity: quantity,
//       price: price,
//       createdat: new Date(),
//       lastUpdated: new Date(),
//     };

//     const allItemsExist = items.find((currentItems) => currentItems.title === title && currentItems.quantity === quantity && currentItems.price === price);
//     if(allItemsExist){
//         console.log(chalk.bgRed("items already exist"));
//         return;
//     }
//     const loadedItems = fs.readFileSync("./data/item.json", "utf-8");
//     let items;
//     if (!loadedItems) {
//       items = [];
//     }
//     items = JSON.parse(loadedItems);

//     const itemsExist = items.find(
//       (currentItems) => currentItems.title === title,
//     );
//     if (itemsExist) {
//       itemsExist.quantity = quantity;
//       itemsExist.price = price;

//       console.log(chalk.bgBlue("Item updated successfully"));
//     } else {
//       items.push(updateItem);
//       console.log(chalk.bgGreen("Items added successfully"));
//     }

//     fs.writeFileSync("./data/item.json", JSON.stringify(items));

//     if (items.length === 0) {
//       console.log("Nothing to update");
//       return;
//     } 
//   });


// // Delete item
// program
//   .command("delete")
//   .description("Delete a specified item")
//   .option("-t | --title <value>", "title of the item to be deleted")
//   .action(function (options) {
//     const title = options.title;
//     const loadedItems = fs.readFileSync("./data/item.json", "utf-8");
//     const items = JSON.parse(loadedItems);

//     if (items.length === 0) {
//       console.log(chalk.bgYellow("Nothing to delete"));
//       return;
//     }

//     const remainingItems = items.filter(
//       (currentItems) => currentItems.title !== title,
//     );
//     if (remainingItems.length === items.length) {
//       console.log(
//         chalk.red(
//           `Could not delete the item with title '${title}'. It doesn't exist`,
//         ),
//       );
//       return;
//     }

//     fs.writeFileSync("./data/item.json", JSON.stringify(remainingItems));
//     console.log(
//       chalk.bgGreen(`Notes with title '${title}' deleted successfully`),
//     );
//   });
program.parse(process.argv);
