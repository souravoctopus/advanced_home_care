import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import FloatingActions from './FloatingActions'
import ScrollManager from './ScrollManager'
import { LoadingState } from '../common/StateMessage'

export default function Layout() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ScrollManager />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Suspense
          fallback={
            <div className="page-loading">
              <LoadingState label="Loading page…" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
