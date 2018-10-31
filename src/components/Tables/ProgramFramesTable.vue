<template>
  <div>  
    <md-table v-model="programframes" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        
      </md-table-row>
    </md-table>      
  </div>  
</template>
<script>
import FDService_ProgramFrames from '@/services/FDService_ProgramFrames.js'

export default {
  name: 'programframes-table',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data() {
      return {
      programframes: null
    }
  },
  methods: {
      async getAPIData () {
        const response = await FDService_ProgramFrames.getProgramFrames()        
        this.programframes = response.data.programFramesItem
        console.log(response.data.programFramesItem)
        //console.log(this.programframes)
      }
  },
  created: function () {
    this.getAPIData()    
  } 
}
</script>
