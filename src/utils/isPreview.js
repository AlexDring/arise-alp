export default function isPreview() {
  return import.meta.env.PUBLIC_STORYBLOK_IS_PREVIEW === 'yes'
} 