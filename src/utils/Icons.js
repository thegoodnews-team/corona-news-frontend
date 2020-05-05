import greenLoupe from '../assets/green-loupe.svg'
import purpleLoupe from '../assets/purple-loupe.svg'
import pinkLoupe from '../assets/pink-loupe.svg'
import greenArrow from '../assets/green-arrow-down.svg'
import purpleArrow from '../assets/purple-arrow-down.svg'
import pinkArrow from '../assets/pink-arrow-down.svg'
import goldArrow from '../assets/arrowgold.svg'
import goldLoupe from '../assets/loupegold.svg'

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
  },
  darkKhaki: {
    loupe: goldLoupe,
    arrow: goldArrow
  }
}

export default function getIcon(color) {
  return ICONS[color]
}
