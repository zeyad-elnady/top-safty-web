import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | TopSafety — تواصل معنا | قمة السلامة",
  description:
    "Get a free site inspection from TopSafety — Egypt's leading fire safety company. Email us at sales@TOPSAFTY-EG.com or call +20 10 9166 4974. Free quote available.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
