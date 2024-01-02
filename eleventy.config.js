export default async function(eleventyConfig) {
  return {
		dir: {
      input: "src",           // default: "."
      includes: "_includes",  // default: "_includes"
      data: "_data",          // default: "_data"
      output: "_site"          // default: "_site"
    },
		templateFormats: ["html", "njk", "md", "11ty.js"],
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk"
	};
}