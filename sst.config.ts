/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "afood-landingpage",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Nextjs("afood-landingpage", {
      // Optional: customize domain
      // domain: "afood.ma",
      // protect: ["production"].includes(input?.stage),
      // // Optional: environment variables
      // environment: {
      //   NEXT_PUBLIC_API_URL: "https://api.example.com"
      // }
    });
  },
});