import fs from "fs";
import { Command } from "commander";
import chalk from "chalk";
import addItems from "./Data/Controller/addItems.js";
import updateItems from "./Data/Controller/updateItems.js";
import getItems from "./Data/Controller/getItems.js";
import deleteItems from "./Data/Controller/deleteItems.js";
const program = new Command();

program
  .name("budget-tracker")
  .description("Ann application to track your budget")
  .version("1.0.0");

// // Add item
program
  .command("new")
  .description("Add new item")
  .option("-t | --title <value>", "title of the item to be added")
  .option("-q | --quantity <value>", "amount of the quantity to be added")
  .option("-p | --price <value>", "price to be added")

  .action(function (options) {
    const title = options.title;
    const quantity = options.quantity;
    const price = options.price;

    addItems(title, quantity, price);
  });

// Getting Item
program
  .command("get")
  .description("Display all the Items")
  .option("-t | --title <value>", "title of the item to be displayed")
  .action(function (options) {
    const title = options.title;

    getItems(title);
  });

// Update Item
program
  .command("update")
  .description("Update a specified item")
  .option("-t | --title <value>", "title of the item to be updated")
  .option("-q | --quantity <value>", "amount of the quantity to be updated")
  .option("-p | --price <value>", "price to be updated")

  .action(function (options) {
    const title = options.title;
    const quantity = options.quantity;
    const price = options.price;

    updateItems(title, quantity, price);
  });

// Delete item
program
  .command("delete")
  .description("Delete a specified item")
  .option("-t | --title <value>", "title of the item to be deleted")
  .action(function (options) {
    const title = options.title;

    deleteItems(title);
  });
program.parse(process.argv);
