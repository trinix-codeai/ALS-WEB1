import { useEffect } from "react";

const defaultTitle = "Alpha Legal Solutions";
const defaultDescription =
  "Alpha Legal Solutions offers strategic legal support for individuals, startups, and businesses.";

type MetaOptions = {
  description?: string;
  title?: string;
};

export function useDocumentMeta({ title, description }: MetaOptions = {}) {
  useEffect(() => {
    document.title = title ? `${title} | ${defaultTitle}` : defaultTitle;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description ?? defaultDescription);
  }, [description, title]);
}
