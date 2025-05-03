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
          Monetary System Models
        </h2>

        <p>
          Computational (agent-based) models are valuable for simulating the behaviours and interactions of entities within a system. They allow each 'agent' to follow defined rules, mimicking complex adaptive behaviours and enhancing understanding of system dynamics. This is particularly useful in economics, where numerous components interact (read about the <a className="icon-link" href="https://en.wikipedia.org/wiki/Aggregation_problem" target="_blank">aggregation problem <i className="bi bi-box-arrow-up-right mb-2"></i></a>). Additionally, these models can integrate real-world data to improve accuracy and relevance in predicting outcomes and informing decisions.
        </p>

        <h2 className="mt-5 text-secondary">
          Gilt Edged Mini (GEM)
        </h2>

        <p>
          The <Link className="icon-link" to="/background-story">background story</Link> notes my desire to learn about English history, especially the fascinating evolution of the English monetary system. But it's more than the love of a good story that motivated me to know more about this system. Like many, I hold a UK Treasury Gilt in my personal pension. Why does such an investment move up and down in price over time? Obviously, I needed to read - a lot. The thing is, my <Link className="icon-link" to="/reading">reading</Link> to date has led me to understand this system differently from what I imagined it to be; distinctly different from the generally received narrative.
        </p>

        <p>
          The framework of UK fiscal mechanics is deep rooted in history. My agent-based modelling and research endeavours are tuned to exploring the core of the system as it exists. To observe the intrinsic dynamics of a system implicitly responsible for the <a className="icon-link" href="https://www.bankofengland.co.uk/quarterly-bulletin/2023/2023/financial-stability-buy-sell-tools-a-gilt-market-case-study" target="_blank">stabilisation <i className="bi bi-box-arrow-up-right mb-2"></i></a> of an inherently unstable market-based finance.
        </p>

        <p>
          Visit the <a className="icon-link" href="https://www.giltedged.systems" target="_blank">GiltEdged.systems <i className="bi bi-box-arrow-up-right mb-2"></i></a> website for an explanation of project GEM as well as model code gists and descriptions.
        </p>

      </div>
    </>
  )
}

export default Index
