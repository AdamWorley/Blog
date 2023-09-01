import rss from "@astrojs/rss";

const postImportResult = import.meta.glob("../content/blog/**/*.{md,mdx}", {
  eager: true,
});
const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    title: "Wordley Blog",
    description: "A blog about soft skills",
    site: import.meta.env.SITE,
    stylesheet: "/rss/styles.xsl",
    items: posts
      .filter((post) => !post.frontmatter.draft)
      .map((post) => ({
        link: `blog/${post.file.split("/").pop().split(".").shift()}`,
        title: post.frontmatter.title,
        pubDate: post.frontmatter.publishDate,
        description: post.frontmatter.description,
      })),
  });
