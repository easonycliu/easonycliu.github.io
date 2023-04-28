import { Navigate } from "react-router-dom"

import MainVeiw from "../view/MainView.js"

import RightContent from "../components/RightContent.js"

var index = [
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
        path: '/',
        element: <Navigate to='/home' />
    }
];

export default index;