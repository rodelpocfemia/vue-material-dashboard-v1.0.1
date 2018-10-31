import DropDown from './components/Dropdown.vue'
import ProgramFramesTable from './components/Tables/ProgramFramesTable.vue'
import SimpleTable2 from './components/Tables/SimpleTable2.vue'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component('drop-down', DropDown)
    Vue.component('programframes-table', ProgramFramesTable)
    Vue.component('simple-table2', SimpleTable2)
  }
}

export default GlobalComponents
