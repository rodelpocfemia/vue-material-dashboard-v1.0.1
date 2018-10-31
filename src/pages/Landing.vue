<template>
  <div>
    <div>
      <md-toolbar class="md-success">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <h3 class="md-title">Brand</h3>
          </div>
          <div class="md-toolbar-section-end">
            <md-button class="md-just-icon md-simple md-toolbar-toggle" @click="showNavigation = true">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </md-button>

            <div class="md-collapse">
              <md-list>
                <md-list-item to="#dashboard">
                  <i class="material-icons">dashboard</i>
                  <p class="hidden-lg hidden-md">Dashboard</p>
                </md-list-item>

                <md-list-item to="#user" @click="showDialog = true">
                  <i class="material-icons">person</i>
                  <p class="hidden-lg hidden-md">Profile</p>
                </md-list-item>
              </md-list>
            </div>
          </div>
        </div>

      </md-toolbar>
      <md-drawer :md-active.sync="showNavigation">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">My App name</span>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-drawer>
      <md-dialog :md-active.sync="showDialog">
        <md-dialog-title>Login</md-dialog-title>
        <md-card class="md-card-profile" style="width:100%;">
          <div class="md-card-avatar">
            <img class="img" :src="cardUserImage">
          </div>

          <md-card-content>
            <h6 class="category text-gray">CEO / Co-Founder</h6>
            <h4 class="card-title">Alec Thompson</h4>
           
            <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>User Id</label>
              <md-input v-model="firstname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Password</label>
              <md-input v-model="lastname" type="text"></md-input>
            </md-field>
          </div>
          </md-card-content>
        </md-card>
        <md-dialog-actions>
          <md-button class="md-success" to="/dashboard">Login</md-button>
          <md-button class="md-success" @click="showDialog = false">Cancel</md-button>
        </md-dialog-actions>
      </md-dialog>
    </div>
    <div style="height:700px;" :data-color="activeColor" :data-image="backgroundImage" :style="sidebarStyle">
      asdf
    </div>
  </div>  
</template>

<script>
import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable
} from '@/components'

export default {
    name: 'Temporary',
    components: {
      StatsCard,
      ChartCard,
      NavTabsCard,
      NavTabsTable,
      OrderedTable
    },
    props: {
      cardUserImage: {
        type: String,
        default: require('@/assets/img/faces/marc.jpg')
      },
      backgroundImage: {
        type: String,
        default: require('@/assets/img/sidebar-1.jpg')
      },
      imgLogo: {
        type: String,
        default: require('@/assets/img/vue-logo.png')
      },
      activeColor: {
        type: String,
        default: 'green',
        validator: (value) => {
          let acceptedValues = ['', 'purple', 'blue', 'green', 'orange', 'red']
          return acceptedValues.indexOf(value) !== -1
        }
      },
    },
    computed: {
      sidebarStyle () {
        return {
          backgroundImage: `url(${this.backgroundImage})`
        }
      }
    },
    data: () => ({
      showDialog: false,
      showNavigation: false,
      showSidepanel: false
    })    
  }
</script>

<style lang="scss" scoped>
  .md-app {
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
 .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
 }
  .div {
    background-color: black;
  }
  .test-background{
        position: relative;
        height: calc(100vh - 75px);
        overflow: auto;
        width: 260px;
        z-index: 4;

        .dropdown .dropdown-backdrop{
            display: none !important;
        }

        .navbar-form{
            border: none;
        }

        .nav{
            padding: 0;

            [data-toggle="collapse"] ~ div > ul > li > a{
                padding-left: 60px;
            }

            .caret{
                margin-top: 13px;
                position: absolute;
                right: 18px;
            }
        }
    }
  </style>