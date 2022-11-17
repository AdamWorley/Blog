import rss from '@astrojs/rss';
import getPostData from '../utils/getPostData'

const postImportResult = import.meta.glob('../data/blog-posts/**/*.md', { eager: true });
const posts = Object.values(postImportResult);

export const get = () => rss({
  title: 'Wordley Blog',
  description: 'A humble Astronaut’s guide to the stars',
  site: import.meta.env.SITE,
  stylesheet: '/rss/styles.xsl',
  items: posts.map((post) => ({
    link: `blog/${getPostData(post).slug}` ,
    title: post.frontmatter.title,
    pubDate: post.frontmatter.publishDate,
    description: post.frontmatter.description
  }))
});