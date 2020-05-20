import { TaskerComponent } from '@core/TaskerComponent'

export class Draglist extends TaskerComponent {
  static className = 'dragcell'
  constructor($root) {
    super($root, {
      name: 'Draglist',
      listeners: ['click', 'submit'],
    })
  }
  toHTML() {
    return /*html */ `
  <form class="draglist">
    <div class="draglist-coll">
      <div class="draglist-plus">
        <img src="src/img/draglist/draglist-add.svg" alt="" />
      </div>
      <div class="draglist-text">Добавить колонку</div>
    </div>

    <div class="draglist-card none">
      <textarea
        class="draglist-textarea"
        aria-label="Название колонки"
        spellcheck="false"
        dir="auto"
        maxlength="512"
        style="overflow: hidden; overflow-wrap: break-word; height: 28px;"
      >
Название колонки
         </textarea
      >
      <div class="js-active-cardForm">
        <div class="draglist-plus">
          <img src="src/img/draglist/draglist-add.svg" alt="" />
        </div>
        <div class="draglist-text">Добавить карточку</div>
      </div>
    </div>

    <div class="draglist-task none">
      <textarea
        class="draglist-textarea"
        aria-label="Название колонки"
        spellcheck="false"
        dir="auto"
        maxlength="512"
        style="overflow: hidden; overflow-wrap: break-word; height: 28px;"
      >
Название колонки
         </textarea
      >

      <div class="draglist__task-template" draggable="true">
        Тестовая задача
      </div>

      <div class="draglist__input-task">
        <textarea
          class="draglist-textarea-task"
          dir="auto"
          placeholder="Ввести заголовок карточки"
          style="
            overflow: hidden;
            overflow-wrap: break-word;
            resize: none;
            height: 54px;
          "
        ></textarea>
      </div>

      <div>
        <button class="draglist-button js-task">Добавить карточку</button>
        <button class="draglist-close">
          <img src="src/img/draglist/draglist-close.svg" alt="#" />
        </button>
      </div>
    </div>

    <div class="draglist-cell none">
      <input
        type="text"
        autocomplete="off"
        dir="auto"
        placeholder="Заголовок колонки"
        maxlength="512"
        class="draglist__active-coll"
      />
      <div>
        <button class="draglist-button js-coll">Добавить</button>
        <button class="draglist-close">
          <img src="src/img/draglist/draglist-close.svg" alt="#" />
        </button>
      </div>
    </div>
  </form>


    `
  }
  onClick() {}
  onSubmit() {}
}
