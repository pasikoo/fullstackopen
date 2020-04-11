import React from 'react'

export default ({ notification }) => {
  if (!notification) {
    return null
  }
  return (
    <div className={`notification ${notification.type === 'error' ? 'error' : 'success'}`}>
      {notification.message}
    </div>
  )
}
