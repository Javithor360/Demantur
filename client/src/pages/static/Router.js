import { Outlet, useLocation } from 'react-router-dom'

export const IndexRouter = () => {
  const location = useLocation()

  const Res = () => {
    if (location.pathname !== '/static/') return (
      <Outlet />
    )

    return (
      <h1>404</h1>
    )
  }

  return (
    <Res />
  )
}
