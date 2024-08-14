import { Sequence } from './src';

interface Rss {
  version: string;
  channel: RssChannel;
}

interface RssChannel {
  title: string;
  description: string;
  link: string;
  copyright?: string;
  lastBuildDate?: Date;
  pubDate?: Date;
  ttl?: number;
  language?: string;
  items: readonly RssItem[];
}

interface RssItem {
  title: string;
  description: string;
  link: string;
  comments?: readonly string[];
  category?: string;
  author?: string;
  enclosure?: string;
  guid?: string;
  pubDate?: Date;
  source?: string;
}

console.log(new Sequence([]));
console.log(`Hello Node.js v${process.versions.node}!`);

import { createServer } from 'http';

const hostname = '127.0.0.1';
const port = 3000;

createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World 1');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
