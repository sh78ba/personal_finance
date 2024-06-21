import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../Body/Dashboard'
import Root from './Root'
import Expense from '../Body/Expense'
import Signin from '../SignInSignUp/Signin'

const router=createBrowserRouter([
        {
          path: "/signin",
          element: <Signin />,
        },
        {
          path: "/",
          element: <Root />,
          children: [
            {
              path: "/dashboard",
              element: <Dashboard />,
              index: true
            },
            {
              path: "/expense",
              element: <Expense />
            }
          ]
        }
          ])

export default router
