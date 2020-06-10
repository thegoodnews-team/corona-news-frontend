const getCookieValue = (cookieName) => {
  const name = `${cookieName}=`
  const decodedCookie = decodeURIComponent(document.cookie)
  const coockies = decodedCookie.split(';') || []

  const cookie = coockies.find((item) => {
    return item.trim().startsWith(name)
  })

  return cookie && cookie.trim().substring(name.length, cookie.length)
}

export { getCookieValue }
