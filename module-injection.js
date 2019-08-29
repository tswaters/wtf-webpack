import { useEffect, useState } from 'react'

export const eventName = 'addItem'

let queue = []

window.inject = (item) => {
  const event = new CustomEvent(eventName, {
    detail: item,
  })

  if (queue) {
    queue.push(event)
    return
  }

  window.dispatchEvent(event)
}

export const useModuleInjection = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const handler = item =>
      setItems(_items => [..._items, item.detail])

    window.addEventListener(eventName, handler)

    if (queue) {
      queue.forEach(item => window.dispatchEvent(item))
      queue = null
    }

    return () => window.removeEventListener(eventName, handler)
  }, [])

  return items
}
