const importAll = (r: any) => {
  let images: any = {};
  r.keys().map((item: any) => {
    images[item.replace("./", "")] = r(item);
  });
  return Object.values(images);
};

const images_lg = importAll(
  require.context("../../asset/dokum_kudt/lg", false, /\.png/)
);

const images_sm = importAll(
  require.context("../../asset/dokum_kudt/sm", false, /\.png/)
);

const img = {
  lg: images_lg,
  sm: images_sm,
};

export default img;
