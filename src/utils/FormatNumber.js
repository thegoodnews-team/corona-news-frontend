function format(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
}

export default function formatNumber(num) {
  return format(num)
}
