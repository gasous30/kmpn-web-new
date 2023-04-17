const importAll = (r: any) => {
  let images: any = {};
  r.keys().map((item: any) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const images = importAll(
  require.context("../../asset/stakeholder", false, /\.png/)
);

const stakeholder_data = [
  {
    title: "ketua himpunan",
    name: "fariz rifqi m.",
  },
  {
    title: "wakil ketua himpunan",
    name: "ulya firdausi r.",
  },
  {
    title: "sekretaris jenderal",
    name: "haryokusumo",
  },
  {
    title: "sekretaris",
    name: "asiah annur s.",
  },
  {
    title: "bendahara",
    name: "kenneth christian",
  },
  {
    title: "kadiv fundraising",
    name: "m. fiahsani taqwin.",
  },
  {
    title: "kadiv medkominfo",
    name: "elsa nurul h.",
  },
  {
    title: "biro esdm",
    name: "eduardo imanuel b.",
  },
  {
    title: "sub-biro msdm",
    name: "athiyya w. m.",
  },
  {
    title: "sub-biro kaderisasi",
    name: "syahrir ginanjar",
  },
  {
    title: "sub-biro pa",
    name: "faisal akmal r.",
  },
  {
    title: "kabid internal",
    name: "firda adrila s.",
  },
  {
    title: "kadiv kesra",
    name: "m. faraadis",
  },
  {
    title: "kadiv akademik",
    name: "bryan",
  },
  {
    title: "kadiv rmb",
    name: "m. furqon",
  },
  {
    title: "kadiv kekeluargaan",
    name: "rahmat nuralamsyah",
  },
  {
    title: "kabid eksternal",
    name: "diandra lintang k.",
  },
  {
    title: "kadiv intrakampus",
    name: "fatimah ahmad r.",
  },
  {
    title: "kadiv ekstrakampus",
    name: "bayu aji r.",
  },
  {
    title: "kadiv rad",
    name: "vatresya vanya r.",
  },
  {
    title: "kadiv pengmas",
    name: "pasha rheizal a.w.",
  },
  {
    title: "kabid keprofesian",
    name: "rifiqi widy h.",
  },
  {
    title: "kadiv pwk",
    name: "daniel tanu s.",
  },
  {
    title: "kadiv persiapan karir",
    name: "ahmad izza f.",
  },
];

export default stakeholder_data;
