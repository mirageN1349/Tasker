import { Tasker } from './components/tasker/Tasker'
import { Header } from './components/header/Header'
import { Toolbar } from './components/toolbar/Toolbar'
import { Draglist } from './components/draglist/Draglist'
import './sass/index.sass'

const tasker = new Tasker('#app', [Header, Toolbar, Draglist])

tasker.render()
