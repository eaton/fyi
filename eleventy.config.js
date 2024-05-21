import pluginWebc from "@11ty/eleventy-plugin-webc";
import { Json5, Yaml, Csv, Tsv, NdJson } from '@eatonfyi/serializers'
import applyTypeset from 'typeset';

/**
 * @param {*} eleventyConfig
 * @param {import("shiki-twoslash").UserConfigSettings} options
 */
export default async function(eleventyConfig) {
	// Plugins
	// eleventyConfig.addPlugin(pluginRss);
	// eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(pluginWebc, {
		components: "_components/**/*.webc",
	});

  // Transforms
  eleventyConfig.addTransform('typeset', content => {
    if ((this.page.outputPath || "").endsWith(".html")) {
      return applyTypeset(content);
    } else {
      return content;
    }
  });

  // Custom data formats
  eleventyConfig.addDataExtension("yml, yaml", new Yaml().parse);
  eleventyConfig.addDataExtension("json5", new Json5().parse);
  eleventyConfig.addDataExtension("ndjson", new NdJson().parse);
  eleventyConfig.addDataExtension("csv", new Csv().parse);
  eleventyConfig.addDataExtension("tsv", new Tsv().parse);

	// Run Eleventy when these files change:
	// https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

	// Watch content images for the image pipeline.
	// eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

  // Per-page bundles, see https://github.com/11ty/eleventy-plugin-bundle
	// Adds the {% css %} and {% js %} paired shortcode
	eleventyConfig.addBundle("css");
	eleventyConfig.addBundle("js");
	eleventyConfig.addBundle("footnotes");

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
		output: "dist",
		input: "src",           // default: "."
		includes: "../_includes",  // default: "_includes" (`input` relative)
		data: "../_data",          // default: "_data" (`input` relative)
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
