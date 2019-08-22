const fs = require("fs")

const text = fs.readFileSync("./template.js", "utf-8");

// Gets the argument passed to npm run duplicate -- filename
// If none is passed, fallback to config in packages.json
// And fallback to new if helper file is run directly via node
const fileName = process.argv[2] || process.env.npm_package_config_name || "new"

// add check to see if file exists, and add timestamp if it exists?
fs.writeFile(fileName + ".js", text)