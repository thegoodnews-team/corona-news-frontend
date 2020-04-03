export default function send({ name, type, category }) {
  const { gtag } = window
  gtag('event', type, {
    event_category: category,
    event_label: name,
    value: 0
  })
}
