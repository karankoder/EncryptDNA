import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import UploadDNA from './pages/UploadDNA';
import Test from './components/Test';
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
        path: '/test',
        element: <Test />,
    },
    {
        path: '/results',
        element: <Results />
    }
]);
