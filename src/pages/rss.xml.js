import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: "Wordley Blog",
    description: "A blog about soft skills",
    site: context.site,
    stylesheet: "/rss/styles.xsl",
    items: blog.filter((post) => !post.data.draft)
    .map((post) => ({
      title: post.data.title,
      link: `/blog/${post.slug}/`,
      pubDate: post.data.publishDate,
      description: post.data.description,
    })),
  });
}