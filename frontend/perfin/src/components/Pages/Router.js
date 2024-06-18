import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../Body/Dashboard'
import Root from './Root'
import Expense from '../Body/Expense'

const router=createBrowserRouter(

    [
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element:<Dashboard/>,
                index:true
            },
            {
                path:"/expense",
                element:<Expense/>
            }

        ]
    }

])

export default router