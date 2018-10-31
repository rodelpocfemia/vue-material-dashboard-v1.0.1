import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'

import Dashboard from '@/pages/Dashboard.vue'
import UserProfile from '@/pages/UserProfile.vue'
import TableList from '@/pages/TableList.vue'
import Typography from '@/pages/Typography.vue'
import Icons from '@/pages/Icons.vue'
import Maps from '@/pages/Maps.vue'
import Notifications from '@/pages/Notifications.vue'
import UpgradeToPRO from '@/pages/UpgradeToPRO.vue'
import Test from '@/pages/Test.vue'
import Login from '@/pages/Login.vue'
import Landing from '@/pages/Landing.vue'
import ExcelSample from '@/pages/ExcelSample.vue'
import ExcelSample2 from '@/pages/ExcelSample2.vue'
import ExcelSample3 from '@/pages/ExcelSample3.vue'
import SampleVuetify from '@/pages/SampleVuetify.vue'

const routes = [  
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },  
  {
    path: '/Landing',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'user',
        name: 'User Profile',
        component: UserProfile
      },
      {
        path: 'table',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        meta: {
          hideFooter: true
        },
        component: Maps

      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'Test',
        name: 'Test',
        component: Test
      },
      {
        path: 'ExcelSample',
        name: 'Excel Sample3',
        component: ExcelSample3
      },
      {
        path: 'SampleVuetify',
        name: 'Sample Vuetify',
        component: SampleVuetify
      }      
    ]
  }
]

export default routes
