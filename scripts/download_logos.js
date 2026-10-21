const fs = require("fs");
const https = require("https");
const http = require("http");
const path = path = require("path");

const dir = path.join(__dirname, "../assets/images/logos");
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const logos = {
  vw: "https://www.carlogos.org/car-logos/volkswagen-logo.png",
  renault: "https://www.carlogos.org/car-logos/renault-logo.png",
  chevrolet: "https://www.carlogos.org/car-logos/chevrolet-logo.png",
  ford: "https://www.carlogos.org/car-logos/ford-logo.png",
  toyota: "https://www.carlogos.org/car-logos/toyota-logo.png",
  fiat: "https://www.carlogos.org/car-logos/fiat-logo.png"
};

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith("https") ? https : http;
    const request = protocol.get(
      url,
      { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" } },
      (response) => {
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          const redirectUrl = response.headers.location.startsWith("http")
            ? response.headers.location
            : new URL(response.headers.location, url).toString();
          return download(redirectUrl, dest).then(resolve).catch(reject);
        }
        if (response.statusCode !== 200) {
          return reject(new Error(`Failed with status ${response.statusCode} for ${url}`));
        }
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on("finish", () => {
          file.close(resolve);
        });
      }
    );
    request.on("error", reject);
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function run() {
  for (const [name, url] of Object.entries(logos)) {
    const dest = path.join(dir, `${name}.png`);
    console.log(`Downloading ${name}...`);
    try {
      await download(url, dest);
      console.log(`Saved ${dest}`);
    } catch (e) {
      console.error(`Error downloading ${name}:`, e.message);
    }
    await sleep(1000);
  }
}

run();
