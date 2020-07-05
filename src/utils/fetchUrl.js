import Tabletop from 'tabletop'

export default function getItemsFromSpreadsheet(sheet) {
  return Tabletop.init({
    key: '1uGAZWgEeNEEWXu-CI8Di95cCq6CidFy7LUlH2KQluZ0',
    simpleSheet: true,
    wanted: [sheet]
  }).then((data, tabletop) => data)
}
