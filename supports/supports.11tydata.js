const titleCase = (str) => str.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

export default {
    status: "noindex",
    "date": "git Last Modified",
    "layout": "libdoc_page.liquid",
    eleventyComputed: {
        title: (data) => titleCase(data?.page?.fileSlug),
    },
};