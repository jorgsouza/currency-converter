const puppeteer = require("puppeteer");
const readlineSync = require("readline-sync");

console.log("Bem vindo ao Bot conversor 💰");

// (async () => {
//   })();

async function robo() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const quantidadeMoeda =
    readlineSync.question("Informe a quantidade de moeda: ") || "1";
  const moedaBase =
    readlineSync.question("Informe uma moeda base: ") || "dolar";
  const moedaFinal =
    readlineSync.question("Informe uma moeda desejada: ") || "real";
  const url = `https://www.google.com/search?q=${quantidadeMoeda}+${moedaBase}+para+${moedaFinal}&rlz=1C1CHZN_pt-BRBR919BR919&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome..69i57j0j0i10i433j0i10l2j0j0i10j0j0i10l2.3999j1j1&sourceid=chrome&ie=UTF-8`;
  await page.goto(url);

  const resultado = await page.evaluate(() => {
    return document.querySelector(".a61j6.vk_gy.vk_sh.Hg3mWc").value;
  });

  console.log(`O valoda de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`);

  await browser.close();
  process.exit();
}

robo();
