require('dotenv').config()
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!", process.env.NAME);
    await sleep(5000);
  }
}

main();
