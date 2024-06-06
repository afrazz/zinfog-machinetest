import React from 'react'

export const publicRoutes = [
    {
      key: 'public.login',
      path: `/public/login`,
      component: React.lazy(() =>
        import('pages/public/Login')
      ),
    },
  ]
  
export const protectedRoutes = [
    {
        key: 'dashboard.orders',
        path: `/dashboards/orders`,
        component: React.lazy(() => import('pages/dashboard/Orders')),
    },
// We can Add More Routes Here
]