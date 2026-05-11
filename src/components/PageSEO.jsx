import { useEffect } from 'react';

export default function PageSEO({ title, description, image, canonical }) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector, content, attr = 'content') => {
      let el = document.querySelector(selector);
      if (!el) {
        const isProperty = selector.includes('property');
        el = document.createElement('meta');
        const key = isProperty ? 'property' : 'name';
        const val = selector.match(/["']([^"']+)["']/)?.[1] || '';
        el.setAttribute(key, val);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, content);
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:type"]', 'website');
    setMeta('meta[property="og:site_name"]', 'Sai Skin Care');

    if (image)     setMeta('meta[property="og:image"]', image);
    if (canonical) setMeta('meta[property="og:url"]', canonical);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }
  }, [title, description, image, canonical]);

  return null;
}