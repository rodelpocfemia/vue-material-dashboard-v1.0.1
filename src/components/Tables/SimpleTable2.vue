<template>
  <div>
    <md-table v-model="programFramesItem" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="FPC">{{ item.fpc }}</md-table-cell>
        <md-table-cell md-label="Program Key">{{ item.programKey }}</md-table-cell>
        <md-table-cell md-label="Role Type">{{ item.roleType }}</md-table-cell>
        <md-table-cell md-label="Module Id">{{ item.moduleId }}</md-table-cell>
        <md-table-cell md-label="Inventory Alert Level">{{ item.inventoryAlertLevel }}</md-table-cell>
        <md-table-cell md-label="Whole Sale Price">{{ item.wholesalePrice }}</md-table-cell>
        <md-table-cell md-label="Purchase Price">{{ item.purchasePrice }}</md-table-cell>
      </md-table-row>
    </md-table>
    <div class="text-right">
        <md-button class="md-success" v-on:click="onexport">Download</md-button>
    </div> 
  </div>
</template>

<script>
import XLSX from 'xlsx'

export default {
  name: 'simple-table2',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selected: [],
      programFramesItem: [
        {
          fpc: '409717007973',
          programKey: 'VWFD',
          roleType: 'MODULE',
          moduleId: 1,
          inventoryAlertLevel: 1,
          wholesalePrice: 100,
          purchasePrice: 75
        },
        {
          fpc: '409717008000',
          programKey: 'VWFD',
          roleType: 'MODULE',
          moduleId: 2,
          inventoryAlertLevel: 1,
          wholesalePrice: 100.2,
          purchasePrice: 76.1
        }
      ]
    }
  },
  methods: {
    onexport () { // On Click Excel download button
    
      // export json to Worksheet of Excel
      // only array possible
      var programFramesItemWS = XLSX.utils.json_to_sheet(this.programFramesItem) 

      // A workbook is the name given to an Excel file
      var wb = XLSX.utils.book_new() // make Workbook of Excel

      // add Worksheet to Workbook
      // Workbook contains one or more worksheets
      XLSX.utils.book_append_sheet(wb, programFramesItemWS, 'program_frames') 
      
      // export Excel file
      XLSX.writeFile(wb, 'program_frames.xlsx') // name of the file is 'book.xlsx'
    }
  }
}
</script>
