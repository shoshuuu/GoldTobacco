import url from "../../package.json";

export const WooCommerceConfig = {
  url: url.proxy,
  consumerKey: process.env.REACT_APP_INIT_USER_WC_KEY,
  consumerSecret: process.env.REACT_APP_INIT_USER_WC_SECRET,
};
