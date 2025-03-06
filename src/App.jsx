import { lazy, Suspense } from "react"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import ScrollToHashElement from "./components/scrollToHashElement"

import ErrorPage from "./routes/errorPage"
import NavBar from './components/navBar'
import Index from './routes/index'
import Story from './routes/background-story'
import Reading from "./routes/reading"
import Models from "./routes/models"
const MarketFinance = lazy(() => import('./routes/market-finance'));

const helmetContext = {};

const Loading = () => {
  return (
    <div>
      <NavBar />
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
    <div>
      <ScrollToHashElement />
      <Suspense fallback={<Loading />}>
        <NavBar />
        <HelmetProvider context={helmetContext}>
          <Outlet />
        </HelmetProvider>
      </Suspense>
    </div>
  );
};

const Error = () => {
  return (
    <div>
      <HelmetProvider context={helmetContext}>
        <ErrorPage />
      </HelmetProvider>
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
        element: <Models />,
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
