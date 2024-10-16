import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    viewportHeight: 500,
    viewportWidth: 750,
  },
});
