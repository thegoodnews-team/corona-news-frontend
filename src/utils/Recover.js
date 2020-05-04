export default async function fetchAsyncWorldReport(link) {
  const response = await fetch(link)
  const data = await response.json()
  return data
}
