import { renderRichText } from "@storyblok/astro"

export function renderRichTextRenderer(content) {
  return renderRichText(content, {
    resolver: (component, blok) => {
      switch (component) {
        case "button":
          return `<a href="${blok.button_link.cached_url}" class="cta">${blok.button_name}</a>`
          break
        default:
          return `Component ${component} not found`
      }
    }
  })
}