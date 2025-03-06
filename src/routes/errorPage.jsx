import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

function ErrorPage() {

  return (
    <>
      <Helmet>
        <title>Error!</title>
        <meta name='description' content='Error Page' />
      </Helmet>
      <div className="container">
        <h1 className="mt-4" id="page-not-found">
          Error Page
        </h1>
        <p>
          An error has occurred or that page no longer exists. Best head <Link to="/" className="icon-link">home</Link>.
        </p>
      </div>
    </>
  )
}

export default ErrorPage
