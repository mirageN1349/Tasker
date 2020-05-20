import { DomListener } from './DomListener'

export class TaskerComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options)
    this.name = options.name || ''
  }
  toHTML() {
    return ''
  }

  init() {
    this.initDomListener()
  }

  destroy() {
    this.removeDomListener()
  }
}
