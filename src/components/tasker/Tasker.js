import { $ } from '@core/dom'

export class Tasker {
  constructor(selector, components = []) {
    this.$el = $(selector)
    this.components = components || []
  }

  getRoot() {
    const $root = $.create('div', 'tasker')
    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      $el.html(component.toHTML())
      $root.append($el)

      return component
    })

    return $root
  }

  render() {
    console.log(this.$el)

    this.$el.append(this.getRoot())
    this.components.forEach(component => {
      component.init()
    })
  }
}
