
export default async function getItemsFromSpreadsheet(link) {
  const response = await fetch(link)
  const data = await response.json()
  return data
}
