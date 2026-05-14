import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://topsafety-eg.com/sitemap.xml",
    host: "https://topsafety-eg.com",
  };
}
