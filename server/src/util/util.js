// utils.js

const Options = require("../models/option");

async function tickUpdateOptions() {
  try {
    const optionsToUpdate = ["google", "microsoft", "amazon"];

    for (const optionName of optionsToUpdate) {
      const option = await Options.findOne({ name: optionName });

      if (!option) {
        console.log(`Option '${optionName}' not found`);
        continue;
      }

      const changeAmount = Math.floor(Math.random() * 11) - 5;
      option.price += changeAmount;

      if (!option.historicalPrices) {
        option.historicalPrices = [option.price];
      } else {
        option.historicalPrices.push(option.price);

        const maxSize = 500;
        if (option.historicalPrices.length > maxSize) {
          option.historicalPrices.shift();
        }
      }
      console.log(option.name + " + tick");
      await option.save();

      // console.log(`Option '${optionName}' updated: ${option.price}`);
    }
  } catch (error) {
    console.log("Internal Server Error: " + error);
  }
}

function anotherUtilityFunction() {
  console.log("This is another utility function.");
}

module.exports = {
  tickUpdateOptions,
  anotherUtilityFunction,
};
