import rss from '@astrojs/rss';

export async function GET(context) {
return rss({
    title: 'Last Sunrise - Changelog',
    description: 'Webbed Site',
    site: context.site,
    items: [
    {
        title: '2.0.2',
        description: 'Changed some links in preparation for the next site update.',
        pubDate: '2023-06-07',
    },
    {
        title: '2.0.1',
        description: 'Fixed the titles of existing pages and made a favicon.',
        pubDate: '2023-06-05',
    },
    ],
    customData: `<language>en-us</language>`,
});
}
