import pluginWebc from "@11ty/eleventy-plugin-webc";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */

export default async function(eleventyConfig) {
  // Pass through file copies

	// Run Eleventy when these files change:
	// https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

	// Watch content images for the image pipeline.
	// eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

  // Per-page bundles, see https://github.com/11ty/eleventy-plugin-bundle
	// Adds the {% css %} and {% js %} paired shortcode
	eleventyConfig.addBundle("css");
	eleventyConfig.addBundle("js");
	eleventyConfig.addBundle("footnotes");

	// Official plugins
	// eleventyConfig.addPlugin(pluginRss);
	// eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(pluginWebc, {
		components: "_components/**/*.webc",
	});

	// Custom filters
	// eleventyConfig.addPlugin(...);
}

export const config = {
	// Control which files Eleventy will process
	// e.g.: *.md, *.njk, *.html, *.liquid
	templateFormats: [
		"html",
		"md",
		"njk",
		"webc"
	],

	// Pre-process *.md files with: (default: `liquid`)
	markdownTemplateEngine: "webc",

	// Pre-process *.html files with: (default: `liquid`)
	htmlTemplateEngine: "webc",

	// These are all optional:
	dir: {
		input: "content",          // default: "."
		includes: "../_includes",  // default: "_includes" (`input` relative)
		data: "../_data",          // default: "_data" (`input` relative)
		output: "_site"
	},

	// -----------------------------------------------------------------
	// Optional items:
	// -----------------------------------------------------------------

	// If your site deploys to a subdirectory, change `pathPrefix`.
	// Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

	// When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
	// it will transform any absolute URLs in your HTML to include this
	// folder name and does **not** affect where things go in the output folder.

	// pathPrefix: "/",
};