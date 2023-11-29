import config from '../config';
import Home from '../pages/Home';
import Create from '../pages/Create';

const publicRouter = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.create,
        component: Create,
    },
];

const privateRouter = [];

export { publicRouter, privateRouter };
