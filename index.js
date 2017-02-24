const exportStops = require("hafas-export-stops-by-coordinates");

const ENDPOINT_BASE_URL_TEMPLATE = "https://fahrplanauskunft.verkehrsverbund-warnow.de/bin/query.exe/dny?performLocating=2&tpl=stop2json&look_stopclass=2147483647&look_minx={minx}&look_miny={miny}&look_maxx={maxx}&look_maxy={maxy}";

exportStops(ENDPOINT_BASE_URL_TEMPLATE, 5, 47, 15, 56, null, [80]);
