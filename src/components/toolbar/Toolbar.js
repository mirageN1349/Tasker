import { TaskerComponent } from '@core/TaskerComponent'

export class Toolbar extends TaskerComponent {
  static className = 'toolbar'

  toHTML() {
    return /*html */ `
   
  <div class="toolbar-name" contenteditable="true">
    Название таскера
  </div>

  <div class="toolbar-favorite">
    <img src="src/img/toolbar/toolbar-favorite.svg" alt="" />
  </div>

    `
  }
}
