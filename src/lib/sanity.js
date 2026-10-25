import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: 'pnd84vi7',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source) => builder.image(source)

export const QUERIES = {
  services: `*[_type == "service"] | order(_createdAt asc) { _id, title, short, badge, "imageUrl": image.asset->url, details[]{ heading, items } }`,
  siteSettings: `*[_type == "siteSettings"][0]`,
  prislista: `*[_type == "prislista"][0]{ categories[]{ _key, title, icon, description, rows[]{ _key, label, price, note }, bullets, quote }, goodToKnow[]{ _key, icon, label, text } }`,
  whyUs: `*[_type == "whyUs"][0]{ points[]{ _key, icon, title, text } }`,
  intro: `*[_type == "intro"][0]{ heading, body, stats[]{ _key, number, label }, trustPoints[]{ _key, icon, title, text } }`,
  ctaBanner: `*[_type == "ctaBanner"][0]{ headline, subtext }`,
}
