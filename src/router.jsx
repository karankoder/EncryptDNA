import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import UploadDNA from './pages/UploadDNA';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/upload',
        element: <UploadDNA />,
    }
]);
