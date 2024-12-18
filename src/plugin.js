export function plugin() {
    // All remark and rehype plugins return a separate function
    return function (tree, file) {
        console.log(file);

    file.data.astro.frontmatter.customProperty = 'Generated property';
    };
}