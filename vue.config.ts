export default {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === "production" ? "/" + "soulworker-res-toolchain" + "/" : "/",
};
