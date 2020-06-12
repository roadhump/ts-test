const path = require('path');
const fs = require('fs')

const { TilesetsAPI } = require("@sansumbrella/mapbox-tilesets");

const tilesets = new TilesetsAPI('roadhump', process.env.MAPBOX_ACCESS_TOKEN);
const source = fs.createReadStream(path.resolve('./data.txt'));

const main = async () => {
  const res = await tilesets.uploadSource(source, `source-${Math.round(Math.random() * 100000)}`);
  console.log(res)
}

main();
