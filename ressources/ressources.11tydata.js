const titleCase = (str) => str.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

export default {
    "date": "git Last Modified",
    "layout": "libdoc_page.liquid",
    eleventyNavigation: {
        parent: "Ressources",
    },
	eleventyComputed: {
        title: (data) => titleCase(data?.page?.fileSlug),
		eleventyNavigation: {
			key: (data) => data?.page?.fileSlug,
			title: (data) => titleCase(data?.page?.fileSlug),
		},
	},
};

