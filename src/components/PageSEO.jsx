import { useEffect } from 'react';

export default function PageSEO({ title, description, image, canonical }) {
  useEffect(() => {
    document.title = title;

    const set = (selector, content, attr = 'content') => {
      let el = document.querySelector(selector);
      if (!el) {
        const [type, key] = selector.includes('property') ? ['meta', 'property'] : ['meta', 'name'];
        el = document.createElement(type);
        const val = selector.match(/["']([^"']+)["']/)?.[1] || '';
        el.setAttribute(key, val);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, content);
    };

    set('meta[name="description"]', description);
    set('meta[property="og:title"]', title);
    set('meta[property="og:description"]', description);
    set('meta[property="og:type"]', 'website');
    set('meta[property="og:site_name"]', 'Sai Skin Care');

    if (image)     set('meta[property="og:image"]', image);
    if (canonical) set('meta[property="og:url"]', canonical);
  }, [title, description, image, canonical]);

  return null;
}