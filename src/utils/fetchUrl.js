
import csv from 'csvtojson'
import request from 'request'

export default function getItemsFromSpreadsheet(sheet) {
  return csv()
    .fromStream(request.get(sheet))
    .then(json => json)
}
