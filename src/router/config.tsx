
import { RouteObject } from 'react-router-dom';
import Home from '../pages/home/page';
import Skills from '../pages/skills/page';
import Experience from '../pages/experience/page';
import Projects from '../pages/projects/page';
import Contact from '../pages/contact/page';
import NotFound from '../pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/skills',
    element: <Skills />,
  },
  {
    path: '/experience',
    element: <Experience />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
