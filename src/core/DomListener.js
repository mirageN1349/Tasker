import { firstLetterToUpperCase } from './utils'

export class DomListener {
  constructor($root, options = {}) {
    this.listeners = options.listeners || []
    this.$root = $root
  }

  initDomListener() {
    this.listeners.forEach(listener => {
      const method = this.getMethod(listener)
      const name = this.name

      if (!this[method]) {
        throw new Error(`Method ${method} no implemented in ${name} Class`)
      }
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    })
  }
  removeDomListener() {
    this.listeners.forEach(listener => {
      const method = this.getMethod(listener)
      this.$root.off(listener, this[method])
    })
  }

  getMethod(listener) {
    return 'on' + firstLetterToUpperCase(listener)
  }
}
