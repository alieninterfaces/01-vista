const fs = require('fs');
const rss = require('rss');

const data = require('./src/app/data/pages.json');

const BASE_URL = 'http://www.alieninterfaces.com';

const feed = new rss({
  title: 'Alien Interfaces',
  description: 'A collection of UI/UX made with AI/ML',
  feed_url: `${BASE_URL}/rss.xml`,
  site_url: BASE_URL,
  image_url: `${BASE_URL}/twitter-card.png`,
  author: 'CJ Gammon'
});

data.forEach(item => {
  feed.item({
    title: item.title,
    description: item.description,
    url: `${BASE_URL}/${item.href}`,
    date: item.date
  });
});

const rss_xml = feed.xml({indent: true});
fs.writeFileSync('./dist/rss.xml', rss_xml);