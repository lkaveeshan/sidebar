import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fa fa-home',
        label: 'Employees',
        items: [
          {
              routeLink: 'products/level1.1',
              icon: 'fa fa-file',
              label: 'People',
              items: [
                {
                    routeLink: 'products/level2.1',
                    icon: 'fa fa-wrench',
                    label: 'Teams',
                }
            ]
          },
          {
              routeLink: 'products/level1.2',
              icon: 'fa fa-wrench',
              label: 'Teams'
          }
      ]
    },
    {
        routeLink: 'products',
        icon: 'fa fa-box-open',
        label: 'People'
    },
    {
        routeLink: 'statistics',
        icon: 'fa fa-chart-bar',
        label: 'Teams'
    },
    {
        routeLink: 'coupens',
        icon: 'fa fa-home',
        label: 'Payroll',
        items: [
            {
                routeLink: 'coupens/list',
                icon: 'fa fa-copy',
                label: 'List Coupens'
            },
            {
                routeLink: 'coupens/create',
                icon: 'fa fa-copy',
                label: 'Create Coupens'
            }
        ]
    },
    {
        routeLink: 'pages',
        icon: 'fa fa-file',
        label: 'Run Payroll'
    },
    {
        routeLink: 'media',
        icon: 'fa fa-camera',
        label: 'Payroll History'
    },
    {
        routeLink: 'settings',
        icon: 'fa fa-home',
        label: 'Hiring',
        expanded: true,
        items: [
            {
                routeLink: 'settings/profile',
                icon: 'fa fa-copy',
                label: 'Profile'
            }/*,
            {
                routeLink: 'settings/customize',
                label: 'Customize'
            }*/
        ]
    },
];
