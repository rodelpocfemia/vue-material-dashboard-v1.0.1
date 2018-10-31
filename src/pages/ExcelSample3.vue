<template>
<div class="content">
    <div class="md-layout">
        <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
            <md-card>
                <md-card-header data-background-color="green">
                    <h4 class="title">Program Frames</h4>
                    <p class="category">Displays list of Program Frames</p>                                     
                </md-card-header>
                <md-card-content>
                    <simple-table2 table-header-color="green"></simple-table2>                  
                </md-card-content>
            </md-card>
        </div>        
    </div>   
</div>
</template>
<script>

import {  
  ProgramFramesTable,
  SimpleTable2
} from '@/components'

export default{    
    components: {        
        ProgramFramesTable,
        SimpleTable2
    }
}
</script>