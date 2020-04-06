function hashCode(str) {
  var hash = 0

  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }

  return hash
}

function intToARGB(i) {
  var hex =
    parseInt(((i >> 24) & 0xff) / 1.6).toString(16) +
    parseInt(((i >> 16) & 0xff) / 1.6).toString(16) +
    parseInt(((i >> 8) & 0xff) / 1.6).toString(16) +
    (i & 0xff).toString(16)

  hex += '000000'

  return hex.substring(0, 6)
}

export default function toHexColor(text) {
  return intToARGB(hashCode(text.toLowerCase()))
}
