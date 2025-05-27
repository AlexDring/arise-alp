import { renderRichText } from "@storyblok/astro"

export function renderRichTextRenderer(content) {
  return renderRichText(content, {
    resolver: (component, blok) => {
      switch (component) {
        case "button":
          const href = blok.button_link.cached_url;
          
          if (import.meta.env.STORYBLOK_IS_PREVIEW === 'yes') {
            return `<a href="${href}" class="cta">${blok.button_name}</a>`;
          }
          
          const siteUrl = import.meta.env.SITE;
          const url = new URL(href.startsWith('/') ? href : `/${href}`, siteUrl);
          return `<a href="${url}" class="cta">${blok.button_name}</a>`;
        default:
          return `Component ${component} not found`
      }
    }
  })
}