function format(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
}

function removeComma(num) {
  return num.toString().replace(/\D+/g, '')
}

export default function formatNumber(num) {
  var number = removeComma(num)
  return format(number)
}
