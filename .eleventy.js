module.exports = config => {
  // Copy `img/` to `_site/img`
  config.addPassthroughCopy({
    "static/responses": "responses",
    "static/images": "images",
    "src/js": "js",
  });

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
