import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import Statistics from '../Pages/Statistics/Statistics';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import DonationDetails from '../Components/DonationDetails/DonationDetails';

const Router = createBrowserRouter([
    {
        path:'/',
        element: <Layout></Layout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/data.json')
            },
            {
                path:'/donation',
                element: <Donation></Donation>
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>,
                loader:()=>fetch('/data.json')
            },
            {
                path:'/donations/:id',
                element:<DonationDetails></DonationDetails>,
                loader:()=>fetch('/data.json')
            }
        ]
    }
])

export default Router;