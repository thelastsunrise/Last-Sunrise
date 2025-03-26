import { getCollection } from "astro:content";

const sortArticles = async () => {
    const articles = (await getCollection("articles"))
    .sort((a, b) => {
        // sort the sections first
        if (a.data.section === b.data.section) {
            // if two sections are equal, then sort ids
            return a.data.id - b.data.id;
        }
        // otherwise just sort the section
        return a.data.section - b.data.section;
    });
    return articles;
}

export { sortArticles }