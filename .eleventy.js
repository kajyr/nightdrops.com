module.exports = config => {
  // Pass-through copy
  config.addPassthroughCopy({
    "static/responses": "responses",
    "static/images": "images",
    "src/js": "js",
  });

  // robots.txt is a template that gets rendered
  // (no pass-through copy needed)

  // Date filter for sitemap (ISO 8601)
  config.addFilter("dateFilter", date => {
    return new Date(date).toISOString().split("T")[0];
  });

  // Provide current date to sitemap
  config.addGlobalData("now", new Date());

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
    },
  };
};
