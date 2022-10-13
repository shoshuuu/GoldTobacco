import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { WooCommerceConfig } from "./WooCommerceConfig";

export const WooCommerce = new WooCommerceRestApi({
  url: WooCommerceConfig.url,
  consumerKey: WooCommerceConfig.consumerKey,
  consumerSecret: WooCommerceConfig.consumerSecret,
  version: "wc/v3",
  axiosConfig: {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  },
});
