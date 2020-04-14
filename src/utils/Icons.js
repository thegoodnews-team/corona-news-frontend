import greenLoupe from '../assets/green-loupe.svg'
import purpleLoupe from '../assets/purple-loupe.svg'
import pinkLoupe from '../assets/pink-loupe.svg'
import greenArrow from '../assets/green-arrow-down.svg'
import purpleArrow from '../assets/purple-arrow-down.svg'
import pinkArrow from '../assets/pink-arrow-down.svg'

const ICONS = {
  green: {
    loupe: greenLoupe,
    arrow: greenArrow
  },
  purple: {
    loupe: purpleLoupe,
    arrow: purpleArrow
  },
  pink: {
    loupe: pinkLoupe,
    arrow: pinkArrow
  }
}

export default function getIcon(color) {
  return ICONS[color]
}
