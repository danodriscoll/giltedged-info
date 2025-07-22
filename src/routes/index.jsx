import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

function Index() {

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name='description' content='Giltedged project home page.' />
      </Helmet>
      <div className="container">
        <h1 className="mt-4" id="home">
          GiltEdged.Info
        </h1>

        <p className="fw-semibold mt-3">
          GiltEdged Info is a self-directed learning project.
        </p>

        <h2 className="mt-5 text-secondary">
          Follow the Money
        </h2>

        <p>
          An email received; an interest sparked. Read a mercifully brief <Link className="icon-link" to="/background-story">background story</Link>.
        </p>

        <h2 className="mt-5 text-secondary">
          Gilt Edged Mini (GEM)
        </h2>

        <figure className="mt-4 mb-4">
          <blockquote className="blockquote">
            <p>
              To know your future you must know your past
            </p>
          </blockquote>
          <figcaption className="blockquote-footer">
            George Santayana
          </figcaption>
        </figure>

        <p>
          Political-economy has gilt dynamic effects. Peruse project <Link className='icon-link' to='/gilt-edged-mini'>GEM</Link>
        </p>

      </div>
    </>
  )
}

export default Index
