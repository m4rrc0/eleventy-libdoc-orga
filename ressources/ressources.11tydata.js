export default {
    "date": "git Last Modified",
    "layout": "libdoc_page.liquid",
	eleventyComputed: {
		eleventyNavigation: {
			key: (data) => data.eleventyNavigation.key || data.page.fileSlug,
			parent: (data) => data.page.fileSlug === "index" ? "" : "Ressources",
		},
	},
};

