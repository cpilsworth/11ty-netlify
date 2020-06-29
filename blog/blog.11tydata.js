module.exports = {
    layout: "blog.liquid",
    permalink: "/{{ page.date | date: '%Y/%m' }}/{{ page.fileSlug }}/index.html",
}