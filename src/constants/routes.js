import Dashboard from 'views/Dashboard';

export const paths = {
  DASHBOARD: '/',
  NEWS: '/news',
  QUIZ: '/quiz',
  ADMIN: '/admin',
};

export default [
  {
    path: paths.DASHBOARD,
    component: Dashboard,
    exact: true,
  },
];
