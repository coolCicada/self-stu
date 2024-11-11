import { createRoot } from "react-dom/client";
import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom";
import App from './react/App';

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
    },
]);

const root = createRoot(document.querySelector('#app')!);
console.log('router:', router);

root.render(<RouterProvider router={router} />);