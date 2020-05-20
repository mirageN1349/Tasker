import { TaskerComponent } from '@core/TaskerComponent'

export class Header extends TaskerComponent {
  static className = 'header'
  constructor($root) {
    super($root, {
      name: 'Header',
      listeners: ['click'],
    })
  }

  toHTML() {
    return /*html */ `
  <div class="header__options">
    <button class="header__options-home">
      <img src="src/img/header/header-home.svg" alt="" />
    </button>

    <button class="header__options-tasker">
      <img src="src/img/header/header-taskers.svg" alt="" />
      <span>Избранное</span>
    </button>
  </div>

  <div class="header__info">
    <img src="src/img/header/header.svg" class="header__info-img" />
    <h1 class="header__info-title">Tasker</h1>
  </div>

  <div class="header__options">
    <button class="header__options-theme">
      <img src="src/img/header/header-theme.svg" alt="" />
    </button>
    <div class="header__options-login">
      <img src="src/img/header/header-login.png" alt="" />
    </div>
  </div>
    `
  }

  onClick(e) {}
}
