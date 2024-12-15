import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import UploadDNA from './pages/UploadDNA';
import Results from './pages/Results';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/upload',
        element: <UploadDNA />,
    },
    {
        path: '/results',
        element: <Results />
    }
]);
