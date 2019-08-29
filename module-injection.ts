import { useEffect, useState, FC } from 'react'
import { Reducer } from 'redux'

export type Meta = {
  name: string
  longName: string
  id: string
  version: string
}

export type Item = Meta & {
  routes: JSX.Element[]
  menus: JSX.Element[]
  reducerKey?: string
  reducer?: Reducer
}

export const eventName = 'addItem'

declare global {
  interface Window {
    inject(item: Item): void
  }
}

let queue: Array<CustomEvent<Item>> | null = []

window.inject = (item: Item) => {
  const event = new CustomEvent<Item>(eventName, {
    detail: item,
  })

  if (queue) {
    queue.push(event)
    return
  }

  window.dispatchEvent(event)
}

type ItemHandler = (item: CustomEvent<Item>) => void

export const useModuleInjection = (): Array<Item> => {
  const [items, setItems] = useState<Array<Item>>([])

  useEffect(() => {
    const handler: ItemHandler = item =>
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
