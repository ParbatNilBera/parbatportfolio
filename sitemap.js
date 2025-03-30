import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { Readable } from "stream";

const sitemap = new SitemapStream({ hostname: "https://parbatnilbera.me" });

const urls = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/projects", changefreq: "weekly", priority: 0.9 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
];

const stream = new Readable({ read() {} });

urls.forEach((link) => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap).then((data) => {
  createWriteStream("./public/sitemap.xml").write(data);
  console.log("✅ Sitemap generated successfully!");
});
