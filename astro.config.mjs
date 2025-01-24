// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://lastsunrise.art",
  integrations: [sitemap({
    filter: (page) =>
      page !== "https://lastsunrise.art/graveyard/subpages/index-v1-footer/" &&
      page !== "https://lastsunrise.art/graveyard/subpages/index-v1-leftsidebar/" &&
      page !== "https://lastsunrise.art/graveyard/subpages/index-v1-rightsidebar/",
  })]
});