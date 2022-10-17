require("dotenv").config({
  path: `.env.development`,
})

module.exports = {
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        accessToken: "cf85f58d4a7cae462f9be2c2d4e2e40ef728d800def4dfe2139ab0d533016c8067b722a39e1943d292e9d95f7f51d29a6c3521999302c885c1642b36bc2137a2d8533b81ea74e28b3f69b32edf4bed1f4a14411cf7a5e11fd7ceb419c48d3447c4eaa1787105b521bb2ea4dcfaffccb5bf64d2f69f39ea136497d01dea748bd4",
        collectionTypes: [
          {
            singularName: "article",
            queryParams: {
              publicationState:
               "true" === "true" ? "preview" : "live",
              populate: {
                cover: "*",
                blocks: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "author",
          },
          {
            singularName: "category",
          },
        ],
        singleTypes: [
          {
            singularName: "about",
            queryParams: {
              populate: {
                blocks: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "global",
            queryParams: {
              populate: {
                favicon: "*",
                defaultSeo: {
                  populate: "*",
                },
              },
            },
          },
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
  ],
}
