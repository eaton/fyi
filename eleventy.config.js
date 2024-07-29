import pluginWebc from "@11ty/eleventy-plugin-webc";
import dataExtensions from './_config/data-extensions.js';
import pluginNavigation from "@11ty/eleventy-navigation";
import pluginTwitter from "eleventy-plugin-embed-twitter";
import pluginYoutube from "eleventy-plugin-youtube-embed";
import pluginVimeo from "eleventy-plugin-vimeo-embed";
import pluginMarkdownFilter from "@jgarber/eleventy-plugin-markdown";

import eleventyImage from "./_config/plugins/image.js";
import * as dateFilters from './_config/filters/dates.js';

export default async function(eleventyConfig) {
  // --------------------- Plugins
	eleventyConfig.addPlugin(pluginWebc, {
		components: "_components/**/*.webc",
	});
  eleventyConfig.addPlugin(pluginNavigation);

  // Remote resource embedding. There are probably others, but.
  eleventyConfig.addPlugin(pluginTwitter);
  eleventyConfig.addPlugin(pluginVimeo);
  eleventyConfig.addPlugin(pluginYoutube);

  eleventyConfig.addPlugin(pluginMarkdownFilter);
  eleventyConfig.addPlugin(eleventyImage);

  // --------------------- Filters
  for (const [name, func] of Object.entries(dateFilters)) {
    eleventyConfig.addFilter(name, func);
  }

  eleventyConfig.addPassthroughCopy({
    "./src/_static/": "/static/",
  })

  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk')
  eleventyConfig.addLayoutAlias('page', 'layouts/base.njk')
  eleventyConfig.addLayoutAlias('post', 'layouts/base.njk')
  eleventyConfig.addLayoutAlias('social', 'layouts/base.njk')
  eleventyConfig.addLayoutAlias('textfile', 'layouts/base.njk')
  eleventyConfig.addLayoutAlias('email', 'layouts/base.njk')
  eleventyConfig.addLayoutAlias('article', 'layouts/base.njk')
  eleventyConfig.addLayoutAlias('talk', 'layouts/base.njk')

  // Custom data extensions
  // We add .csv, .tsv, .ndjson, and .json5
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
