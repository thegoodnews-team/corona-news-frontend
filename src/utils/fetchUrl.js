
import csv from 'csvtojson'
import request from 'request'

export default function getItemsFromSpreadsheet(sheet) {
  return csv()
    .fromStream(request.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vQNKZ8-SjW1e8oyt_DNGgdlHjJGbUTZuaX88LSgD5oDR7_ctYXM3Sh5NojrCxIRSHkwgiKuCi6XQmOh/pub?output=csv'))
    .then(json => json)
}
