import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
return rss({
    title: 'Last Sunrise - Blog',
    description: 'Webbed Site',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('../blog/*.mdx')),
    customData: `<language>en-us</language>`,
});
}