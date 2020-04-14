import Dashboard from 'views/Dashboard';

const paths = {
  DASHBOARD: '/',
};

export default [
  {
    path: paths.DASHBOARD,
    component: Dashboard,
    exact: true,
  },
];
