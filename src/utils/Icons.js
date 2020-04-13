import greenLoupe from '../assets/green-loupe.svg'
import purpleLoupe from '../assets/purple-loupe.svg'
import greenArrow from '../assets/green-arrow-down.svg'
import purpleArrow from '../assets/purple-arrow-down.svg'

const ICONS = {
  green: {
    loupe: greenLoupe,
    arrow: greenArrow
  },
  purple: {
    loupe: purpleLoupe,
    arrow: purpleArrow
  },
  red: {
    loupe: '',
    arrow: ''
  }
}

export default function getIcon(color) {
  return ICONS[color]
}
