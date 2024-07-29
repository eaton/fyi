import { getId } from '@eatonfyi/schema';

export default {

  date: data => {
    return data.date ||
      data.dates?.start ||
      data.dates?.publish ||
      data.dates?.born;
  },

  title: data => {
    if (data.title) return data.title;

    switch (data.type) {
      case 'SocialMediaPosting':
      case 'SocialMediaThread':
      case 'JournalEntry':
      default:
        return data.name;
    }
  },

  slug: data => {
    if (data.slug) return data.slug;
    return data?.id ? getId(data.id) : undefined;
  },

  eleventyExcludeFromCollections: data => (data.status === 'draft' || data.layout === 'opengraph'),

  permalink: data => {
    if (data.permalink) return data.permalink
  },
};
