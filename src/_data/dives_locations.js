const { readFileSync } = require("fs");
const { importer } = require("dive-log-importer");

const divesExportFile = `./content/dives/all.xml`;

const key = loc => `${loc.lat}-${loc.lng}`;
function uniqueLocation(dives) {
  const record = {};
  const locations = dives.map(d => d.location);
  return locations.reduce((acc, loc) => {
    const k = key(loc);
    if (!record[k]) {
      acc.push(loc);
      record[k] = true;
    }
    return acc;
  }, []);
}

module.exports = async function () {
  const xml = readFileSync(divesExportFile, "utf-8");
  const logbook = importer(xml);

  if (logbook) {
    const divesWithLoc = logbook.dives.filter(d => {
      const lat = Number(d.location.lat);
      const lng = Number(d.location.lng);
      // Filter out invalid coordinates: NaN or (0, 0) aka "Null Island"
      return !isNaN(lat) && !isNaN(lng) && (lat !== 0 || lng !== 0);
    });
    return uniqueLocation(divesWithLoc);
  }
  return [];
};
