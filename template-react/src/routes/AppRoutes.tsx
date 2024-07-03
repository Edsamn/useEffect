import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Timer from '../pages/Timer';
import Error404 from '../pages/Error404';
import Counter from '../pages/Counter';
import Fetch from '../pages/Fetch';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Timer />,
    errorElement: <Error404 />,
  },
  {
    path: '/counter',
    element: <Counter />,
  },
  {
    path: '/fetch',
    element: <Fetch></Fetch>,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
