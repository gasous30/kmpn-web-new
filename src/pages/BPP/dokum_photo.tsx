const importAll = (r: any) => {
  let images: any = {};
  r.keys().map((item: any) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const images = importAll(
  require.context("../../asset/dokum_bpp", false, /\.png/)
);

const arrayImg = Object.values(images);

export default arrayImg;
