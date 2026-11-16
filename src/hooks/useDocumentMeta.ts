import { useEffect } from 'react';

/** Sets the page title and meta description for SEO and browser tabs. */
export function useDocumentMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title;
    if (description) {
      let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.name = 'description';
        document.head.appendChild(tag);
      }
      tag.content = description;
      document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute('content', title);
      document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', description);
    }
  }, [title, description]);
}
