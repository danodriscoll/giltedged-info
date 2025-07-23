import { lazy, Suspense } from "react"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import ScrollToHashElement from "./components/scrollToHashElement"

import ErrorPage from "./routes/errorPage"
import NavBar from './components/navBar'
import Footer from "./components/footer"
import Index from './routes/index'
import Story from './routes/background-story'
import Reading from "./routes/reading"
import GEM from "./routes/gilt-edged-mini"
const MarketFinance = lazy(() => import('./routes/market-finance'));

const helmetContext = {};

const Loading = () => {
  return (
    <div>
      <div className="container">
        <h1 className="mt-4 text-secondary" id="loading-page">
          Loading...
        </h1>
      </div>
    </div>
  );
};

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ScrollToHashElement />
      <NavBar />
      <Suspense fallback={<Loading />}>
        <HelmetProvider context={helmetContext}>
          <Outlet />
        </HelmetProvider>
      </Suspense>
      <Footer />
    </div>
  );
};

const Error = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <HelmetProvider context={helmetContext}>
        <ErrorPage />
      </HelmetProvider>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/background-story",
        element: <Story />,
      },
      {
        path: "/gilt-edged-mini",
        element: <GEM />,
      },
      {
        path: "/reading",
        element: <Reading />,
      },
      {
        path: "/background-story/market-finance",
        element: <MarketFinance />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
])

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App
