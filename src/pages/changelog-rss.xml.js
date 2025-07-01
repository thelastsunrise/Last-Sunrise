import rss from "@astrojs/rss";

export async function GET(context) {
return rss({
    title: "Last Sunrise - Changelog",
    description: "Every single change on the website. I'm not sure you want to be subscribed to this.",
    site: context.site,
    items: [
    {
        title: "3.1.2",
        description: "Published a new part to the Basilio legacy saga! Some QOL changes for the Sims section as well, including clickable images that don't break and the most rudementary of cast pages.",
        pubDate: "2025-07-01",
        link: "https://lastsunrise.art/shrines/sims/basilio-g2-4/"
    },
    {
        title: "3.1.1",
        description: "Fixed up the half broken Sims page CSS and published a new part of the legacy saga!",
        pubDate: "2025-06-27",
        link: "https://lastsunrise.art/shrines/sims/basilio-g2-3/"
    },
    {
        title: "3.1.0",
        description: "Made real actual CSS for the Sims shrine, which means we're onto a new major site version :-)",
        pubDate: "2025-06-26",
        link: "https://lastsunrise.art/shrines/sims/"
    },
    {
        title: "3.0.8",
        description: "Posted part 3 of the Basilio legacy challenge blog. Also fixed the double scrollbar issue.",
        pubDate: "2025-06-25",
        link: "https://lastsunrise.art/shrines/sims/basilio-g2-2/"
    },
    {
        title: "3.0.7",
        description: "Posted a new Sims post, and got next/prev buttons working for that section of the site too.",
        pubDate: "2025-06-24",
        link: "https://lastsunrise.art/shrines/sims/basilio-g2-1/"
    },
    {
        title: "3.0.6",
        description: "Updated framework for blog section titling and created a new Sims shrine...sort of. Basically I'm just blogging about my current TS4 legacy challenge.",
        pubDate: "2025-06-22",
        link: "https://lastsunrise.art/shrines/sims/basilio-g1/"
    },
    {
        title: "3.0.5",
        description: "Fixed even more issues for mobile displays.",
        pubDate: "2025-03-21"
    },
    {
        title: "3.0.4",
        description: "Added a button to return to the top of any page, and fixed the sizing of images in blog posts...again. Also added a button to the Persona 3 fanlisting!",
        pubDate: "2025-03-14"
    },
    {
        title: "3.0.3",
        description: "Wrote a new blog post about my trip to Japan! Additionally, updated the styling of blog images so they take up less vertical space, and transferred the old blog script that allows expanding the images for preview.",
        pubDate: "2025-03-13",
        link: "https://lastsunrise.art/blog/japan-2025"
    },
    {
        title: "3.0.2",
        description: "Added pagination and inline previews to the blog directory, a changelog to the index, made the graveyard cards more readable, and fixed image sizing on small screens.",
        pubDate: "2025-02-06",
    },
    {
        title: "3.0.1",
        description: "Fixed a few of the semantic element placements, some linking issues, as well as the broken sitemap.",
        pubDate: "2025-01-30",
        link: "https://lastsunrise.art/blog/v3-0"
    },
    {
        title: "3.0.0",
        description: "Reworked the website...again! New index, a graveyard for pages past, possibly the last change(b)log, general housekeeping and hopefully some much better performance now that the site's built with a SSG.",
        pubDate: "2025-01-30",
        link: "https://lastsunrise.art/blog/v3-0"
    },
    {
        title: "2.3.6",
        description: "Moved the site over from Neocities to a VPS off Contabo!",
        pubDate: "2024-01-11",
    },
    {
        title: "2.3.5",
        description: "Fixed a linking issue on the 404 page.",
        pubDate: "2023-12-27",
    },
    {
        title: "2.3.4",
        description: "Updated the currently section on the index, fixed some misinfo on the MGS codecs article, and added some new drawings to the MGS shrine homepage!",
        pubDate: "2023-12-19",
    },
    {
        title: "2.3.3",
        description: "Fixed up some stamps, added a button, and most importantly posted my first article on codecs to the MGS shrine.",
        pubDate: "2023-12-07",
    },
    {
        title: "2.3.2",
        description: "Added stamps to the MGS shrine, as well as some new art to the shrine's gallery!",
        pubDate: "2023-12-06",
    },
    {
        title: "2.3.1",
        description: "Made the MGS shrine responsive.",
        pubDate: "2023-12-05",
    },
    {
        title: "2.3.0",
        description: "Procrastinating the actually important site updates with a mini update and a new shrine! - MGS Shrine - What it says on the tin: the landing page for a new Metal Gear shrine to tide over my brainrot.",
        pubDate: "2023-11-23",
        link: "https://lastsunrise.art/blog/v2-3"
    },
    {
        title: "2.2.1",
        description: "Updated the Index and added a new WCN session recap & tweaked some assets on the WCN page.",
        pubDate: "2023-11-07",
    },
    {
        title: "2.2.0",
        description: "Added 'What Comes Next?', a hub for my D&D campaign, an RSS feed for the campaign, and some accessibility improvements.",
        pubDate: "2023-10-23",
        link: "https://lastsunrise.art/blog/v2-2"
    },
    {
        title: "2.1.5",
        description: "Updated the Index AGAIN!! After vanishing for a bit. ^^;;",
        pubDate: "2023-10-16",
    },
    {
        title: "2.1.4",
        description: "Updated the current stats on the Index.",
        pubDate: "2023-07-06",
    },
    {
        title: "2.1.3",
        description: "New blog post for pride month...albeit the tail end of it.",
        pubDate: "2023-06-28",
        link: "https://lastsunrise.art/blog/aromanticism"
    },
    {
        title: "2.1.2",
        description: "Added a new clique/ring to the Index!",
        pubDate: "2023-06-24",
    },
    {
        title: "2.1.1",
        description: "Updated the Index; added some new site buttons & updated the webmaster status.",
        pubDate: "2023-06-22",
    },
    {
        title: "2.1.0",
        description: "Added a blogs page, popout images, and universal sidebars.",
        pubDate: "2023-06-07",
        link: "https://lastsunrise.art/blog/v2-1"
    },
    {
        title: "2.0.2",
        description: "Changed some links in preparation for the next site update.",
        pubDate: "2023-06-07",
    },
    {
        title: "2.0.1",
        description: "Fixed the titles of existing pages and made a favicon.",
        pubDate: "2023-06-05",
    },
    {
        title: "2.0.0",
        description: "Completely overhauled the website, now off Bootstrap; also began changelog blogs and a copyright page.",
        pubDate: "2023-06-05",
        link: "https://lastsunrise.art/blog/v2-0"
    }
    ],
    customData: `<language>en-us</language>`,
});
}
