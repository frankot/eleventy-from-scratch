module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/images/');
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: "src",
            output: "dist"
        }
    }
};