const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "../public/gallery");
const outputFile = path.join(__dirname, "../data/gallery.json");

let id = 1;
let result = [];

// mapping folder → category clean
const categoryMap = {
  "bingkai": "bingkai",
  "design lain-lain": "design lain-lain",
  "event bazaar": "event bazaar",
  "hanging poster": "hanging poster",
  "merchandise": "merchandise",
  "project": "project"
};

const folders = fs.readdirSync(baseDir);

folders.forEach((folder) => {
  const folderPath = path.join(baseDir, folder);

  if (fs.lstatSync(folderPath).isDirectory()) {
    const files = fs.readdirSync(folderPath);

    files.forEach((file) => {
      if (file.endsWith(".jpg") || file.endsWith(".png") || file.endsWith(".jpeg")) {

        result.push({
          id: id++,
          src: `/gallery/${folder}/${file}`,
          category: categoryMap[folder] || "other",
          title: file.replace(/\.[^/.]+$/, ""),
          description: folder
        });

      }
    });
  }
});

// write JSON
fs.writeFileSync(outputFile, JSON.stringify(result, null, 2));

console.log("gallery.json generated!");