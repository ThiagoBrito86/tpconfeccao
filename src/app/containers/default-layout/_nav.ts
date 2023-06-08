import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Financeiro'
  },
  {
    name: 'Compras',
    url: '/theme/colors',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Pagamentos',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Operacional',
    title: true
  },
  {
    name: 'Corte',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' }    
  },
  {
    name: 'Facção',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' }    
  },
  {
    name: 'Estoque',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    
  },
  {
    name: 'Vendas',
    url: '/charts',
    iconComponent: { name: 'cil-chart-pie' }
  },
  {
    name: 'Caixa',
    iconComponent: { name: 'cil-star' },
    url: '/icons',    
  }
];
