import https from "https";
import chalk from "chalk";

const get_joke = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";
  https.get(url, (response) => {
    let data = "";
    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      let joke = JSON.parse(data);
      console.log(`Random joke `);
      console.log(chalk.red(`${joke.setup}`));
      console.log(chalk.blue.bgRed.bold(`${joke.punchline}`));
    });

    response.on("error", (error) => {
      console.log(error.message);
    });
  });
};

get_joke();
