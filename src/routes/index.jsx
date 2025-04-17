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

        <p className="fw-semibold mt-4">
          GiltEdged Info is a self-directed learning project.
        </p>

        <h2 className="mt-4 text-secondary">
          Follow the Money
        </h2>

        <p>
          An email received; an interest sparked. Read a mercifully brief <Link className="icon-link" to="/background-story">background story</Link>.
        </p>

        <h3 className="mt-4 text-secondary">
          Monetary System Models
        </h3>

        <p>
          Computational (agent-based) models are valuable for simulating the behaviours and interactions of entities within a system. They allow each 'agent' to follow defined rules, mimicking complex adaptive behaviours and enhancing understanding of system dynamics. This is particularly useful in economics, where numerous components interact (read about the <a className="icon-link" href="https://en.wikipedia.org/wiki/Aggregation_problem" target="_blank">aggregation problem <i className="bi bi-box-arrow-up-right mb-2"></i></a>). Additionally, these models can integrate real-world data to improve accuracy and relevance in predicting outcomes and informing decisions.
        </p>

        <h3 className="mt-4 text-secondary">
          Gilt Edged Mini (GEM)
        </h3>

        <p>
          The <Link className="icon-link" to="/background-story">background story</Link> notes my desire to learn about English history, in particular the evolution of the English monetary system. My motivations for wanting to know more about this system are twofold and connected. First, the long history of this particular social system - its operations and effects - fascinates me. How and why does it proceed in the way it does? Second, I want to better understand the dynamics observed in the secondary market for the United Kingdom of Great Britain and Northern Ireland (UK) Government interest-bearing money instruments. GEM combines these motivations into one evolving project.
        </p>

        <p>
          Visit the <a className="icon-link" href="https://www.giltedged.systems" target="_blank">GiltEdged.systems <i className="bi bi-box-arrow-up-right mb-2"></i></a> website for project GEM as well as model code gists and descriptions.
        </p>

      </div>
    </>
  )
}

export default Index
