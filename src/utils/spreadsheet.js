import csv from 'csvtojson'
import request from 'request'

export default async function getItemsFromSpreadsheet(link) {
  const json = await csv().fromStream(
    request.get(
      link
    )
  )
  return json
}
