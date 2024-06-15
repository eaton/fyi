import pluginWebc from "@11ty/eleventy-plugin-webc";
import dataExtensions from './_lib/data-extensions.js';

export default async function(eleventyConfig) {
	// Plugins
	eleventyConfig.addPlugin(pluginWebc, {
		components: "_components/**/*.webc",
	});

  eleventyConfig.addPassthroughCopy({
    "./_static/": "/",
  })

  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk')
  eleventyConfig.addLayoutAlias('post', 'layouts/base.njk')
  eleventyConfig.addLayoutAlias('entry', 'layouts/base.njk')
  eleventyConfig.addLayoutAlias('thread', 'layouts/base.njk')
  eleventyConfig.addLayoutAlias('article', 'layouts/base.njk')
  eleventyConfig.addLayoutAlias('textfile', 'layouts/base.njk')
  eleventyConfig.addLayoutAlias('slash', 'layouts/base.njk')
  eleventyConfig.addLayoutAlias('splat', 'layouts/splat.njk')

  // Custom data extensions
  for (const [exts, func] of Object.entries(dataExtensions)) {
    eleventyConfig.addDataExtension(exts, func);
  }

  // Per-page custom CSS/JS, see https://github.com/11ty/eleventy-plugin-bundle
	// Adds the {% css %} and {% js %} paired shortcode
	eleventyConfig.addBundle("css");
	eleventyConfig.addBundle("js");

  return config;
}

const config = {
	// Control which files Eleventy will process
	// e.g.: *.md, *.njk, *.html, *.liquid
	templateFormats: [
		"html",
		"md",
		"njk",
	],

	// Pre-process *.md files with: (default: `liquid`)
	markdownTemplateEngine: "njk",

	// Pre-process *.html files with: (default: `liquid`)
	htmlTemplateEngine: "njk",

	// These are all optional:
	dir: {
		output: "dist",
		input: "src",           // default: "."
		includes: "../_includes",  // default: "_includes" (`input` relative)
		data: "../_data",          // default: "_data" (`input` relative)
	}
};
