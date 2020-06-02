import { NbMenuItem } from '@nebular/theme';

export const HOME_MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: {icon:'fa-home', pack:'font-awesome'},
    link: '/home/dashboard',
    home: true,
  },
  {
    title: 'Devices',
    icon: {icon:'fa-copy', pack:'font-awesome'},
    children: [
      {
        title: 'Device Groups',
        link: '/home/device/device-group',
      },
      {
        title: 'Device Network View',
        link: '/pages/layout/list',
      },
      {
        title: 'Toplogy View',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Geographical View',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Device Maintenance',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },

  {
    title: 'Device Notification',
    icon: {icon:'fa-bell', pack:'font-awesome'},
    children: [
      {
        title: 'SNMP Trap',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Syslog',
        link: '/pages/layout/list',
      },
      {
        title: 'Alarms',
        link: '/pages/layout/infinite-list',
      },
    ],
  },
  {
    title: 'Configuration',
    icon: {icon:'fa-cogs', pack:'font-awesome'},
    children: [
      {
        title: 'Configure Destination',
        link: '/pages/forms/inputs',
      },
    ],
  },
  {
    title: 'Discovery',
    icon: {icon:'fa-search', pack:'font-awesome'},
    link: '/home/discovery',

  },
  {
    title: 'Cloud Container',
    icon: {icon:'fa-cloud', pack:'font-awesome'},
    link: '/pages/ui-features',

  }, {
    title: 'Users',
    icon: {icon:'fa-user', pack:'font-awesome'},
    link: '/home/users',

  }];
//   {
//     title: 'Extra Components',
//     icon: 'message-circle-outline',
//     children: [
//       {
//         title: 'Calendar',
//         link: '/pages/extra-components/calendar',
//       },
//       {
//         title: 'Progress Bar',
//         link: '/pages/extra-components/progress-bar',
//       },
//       {
//         title: 'Spinner',
//         link: '/pages/extra-components/spinner',
//       },
//       {
//         title: 'Alert',
//         link: '/pages/extra-components/alert',
//       },
//       {
//         title: 'Calendar Kit',
//         link: '/pages/extra-components/calendar-kit',
//       },
//       {
//         title: 'Chat',
//         link: '/pages/extra-components/chat',
//       },
//     ],
//   },
//   {
//     title: 'Maps',
//     icon: 'map-outline',
//     children: [
//       {
//         title: 'Google Maps',
//         link: '/pages/maps/gmaps',
//       },
//       {
//         title: 'Leaflet Maps',
//         link: '/pages/maps/leaflet',
//       },
//       {
//         title: 'Bubble Maps',
//         link: '/pages/maps/bubble',
//       },
//       {
//         title: 'Search Maps',
//         link: '/pages/maps/searchmap',
//       },
//     ],
//   },
//   {
//     title: 'Charts',
//     icon: 'pie-chart-outline',
//     children: [
//       {
//         title: 'Echarts',
//         link: '/pages/charts/echarts',
//       },
//       {
//         title: 'Charts.js',
//         link: '/pages/charts/chartjs',
//       },
//       {
//         title: 'D3',
//         link: '/pages/charts/d3',
//       },
//     ],
//   },
//   {
//     title: 'Editors',
//     icon: 'text-outline',
//     children: [
//       {
//         title: 'TinyMCE',
//         link: '/pages/editors/tinymce',
//       },
//       {
//         title: 'CKEditor',
//         link: '/pages/editors/ckeditor',
//       },
//     ],
//   },
//   {
//     title: 'Tables & Data',
//     icon: 'grid-outline',
//     children: [
//       {
//         title: 'Smart Table',
//         link: '/pages/tables/smart-table',
//       },
//       {
//         title: 'Tree Grid',
//         link: '/pages/tables/tree-grid',
//       },
//     ],
//   },
//   {
//     title: 'Miscellaneous',
//     icon: 'shuffle-2-outline',
//     children: [
//       {
//         title: '404',
//         link: '/pages/miscellaneous/404',
//       },
//     ],
//   },
//   {
//     title: 'Auth',
//     icon: 'lock-outline',
//     children: [
//       {
//         title: 'Login',
//         link: '/auth/login',
//       },
//       {
//         title: 'Register',
//         link: '/auth/register',
//       },
//       {
//         title: 'Request Password',
//         link: '/auth/request-password',
//       },
//       {
//         title: 'Reset Password',
//         link: '/auth/reset-password',
//       },
//     ],
//   },
// ];