import React from 'react'
import { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

const alertCard = (title, description) => {
  return (
    <div className="notification">
      <p className="notificationTitle">{title}</p>
      <p className="notificationDescription">{description}</p>
    </div>
  )
}

const showNotification = ({
  alertTitle,
  alertMsg,
  alertLink
}) => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    store.addNotification({
      title: alertTitle,
      message: alertMsg,
      type: 'default',
      insert: 'bottom',
      content: alertCard(alertTitle, alertMsg),
      container: 'bottom-center',
      animationIn: ['animated fadeIn'],
      animationOut: ['animated fadeOut'],
      dismiss: {
        duration: 4000,
        onScreen: false
      },
      onRemoval: (id, removedBy) => {
        if (removedBy !== 'timeout') {
          window.open(alertLink, '_self')
        }
      }
    })
  }
}

export default showNotification
