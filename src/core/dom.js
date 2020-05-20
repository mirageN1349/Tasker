class Dom {
  constructor(selector) {
    this.$el =
      typeof selector === 'string' ? document.querySelector(selector) : selector
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
    }
    return this
  }

  on(listener, cb) {
    this.$el.addEventListener(listener, cb)
  }

  off(listener, cb) {
    this.$el.removeEventListener(listener, cb)
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el
      this.$el.appendChild(node)
    }
    this.$el.append(node)
    return this
  }
}

export function $(selector) {
  return new Dom(selector)
}

$.create = (selector, className = '') => {
  const el = document.createElement(selector)
  if (className) {
    el.classList.add(className)
  }
  return $(el)
}
