import { renderRichText } from "@storyblok/astro"

export function renderRichTextWithButtons(content) {
  return renderRichText(content, {
    blokResolvers: {
      button: (props) => {
        return `<a href="${props.button_link.cached_url}" class="cta">${props.button_name}</a>`
      }
    }
  })
}