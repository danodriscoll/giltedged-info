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

        <p className="fw-semibold">
          GiltEdged Info is a self-directed learning project.
        </p>

        <p>
          An email received; an interest sparked and into the history of our money system rabbit hole I went. Read a mercifully brief <Link to="/background-story">back story</Link>.
        </p>

        <h2 className="mt-4">
          Monetary System Models
        </h2>

        <p>
          Computational (agent-based) models are valuable for simulating the behaviours and interactions of entities within a system. They allow each 'agent' to follow defined rules, mimicking complex adaptive behaviours and enhancing understanding of system dynamics. This is particularly useful in economics, where numerous components interact. Additionally, these models can integrate real-world data to improve accuracy and relevance in predicting outcomes and informing decisions.
        </p>

        <p>
          View project <Link to="/gilt-edged-mini">Gilt Edged Mini</Link>.
        </p>

        <h2 className="mt-4">
          Outputs &amp; Analyses
        </h2>

        <p>
          A Substack serves as a repository for Project GEM developments and scenarios. Analyses of GEM outputs may blend with real-world UK macro times-series and historical events.
        </p>

      </div>
    </>
  )
}

export default Index
