import { Navigate } from "react-router-dom"

import MainVeiw from "../view/MainView.js"
import Orders from "../view/OrdersView.js"
import Cart from "../view/CartView.js"
import IniView from "../view/IniView.js"
import BookDetailView from "../view/BookDetailView.js"

import RightContent from "../components/RightContent.js"
import BookDetail from "../components/BookDetail.js"

var index = [
    {
        path: '/home',
        element: <IniView />,
    },
    {
        path: '/home',
        element: <MainVeiw />,
        children: [
            {
                path: ':op/:info',
                element: <RightContent />
            }
        ]
    },
    {
        path: '/orders',
        element: <Orders />
    },
    {
        path: '/cart',
        element: <Cart />
    },
    {
        path: '/bookdetail',
        element: <BookDetailView />,
        children: [
            {
                path: ':id',
                element: <BookDetail />
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to='/home' />
    }
];

export default index;