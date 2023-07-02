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
    url: '/compras/lista',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Pagamentos',
    url: '/pagamentos/lista',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Operacional',
    title: true
  },
  {
    name: 'Corte',
    url: '/cortes/lista',
    iconComponent: { name: 'cil-puzzle' }    
  },
  {
    name: 'Costura',
    url: '/costuras/lista',
    iconComponent: { name: 'cil-cursor' }    
  },
  {
    name: 'Estoque',
    url: '',
    iconComponent: { name: 'cil-notes' },
    
  },
  {
    name: 'Vendas',
    url: '',
    iconComponent: { name: 'cil-chart-pie' }
  },
  {
    name: 'Caixa',
    iconComponent: { name: 'cil-star' },
    url: '',    
  }
];
