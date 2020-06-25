import { Dashboard, Login, Admin, Quiz, News } from 'views';

export const paths = {
  DASHBOARD: '/',
  NEWS: '/news',
  QUIZ: '/quiz',
  ADMIN: '/admin',
  LOGIN: '/login',
};

export default [
  {
    path: paths.DASHBOARD,
    component: Dashboard,
    exact: true,
  },
  {
    path: paths.NEWS,
    component: News,
    exact: true,
  },
  {
    path: paths.QUIZ,
    component: Quiz,
    exact: true,
  },
  {
    path: paths.ADMIN,
    component: Admin,
    exact: true,
    isPrivate: true,
  },
  {
    path: paths.LOGIN,
    component: Login,
    exact: true,
  },
];
