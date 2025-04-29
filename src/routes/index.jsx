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
          The <Link className="icon-link" to="/background-story">background story</Link> notes my desire to learn about English history, especially the fascinating evolution of the English monetary system. But it's more than the love of a good story that motivated me to know more about this system. Like many, I hold a UK Treasury Gilt in my personal pension. And while I have no interest in daytrading Gilts, I am interested in why such an investment will demonstrate the price dynamics it does over the longer-term. Obviously, I needed to read - a lot. The thing is, my <Link className="icon-link" to="/reading">reading</Link> to date has led me to understand this system differently from what I imagined it to be; distinctly different from the generally received narrative. In my humble opinion our fiscal system is an anachronism. It needs to be updated for the modern world. Instead, the system is retrofitted with policies and tools in an effort to stabilise an inherently unstable market-based finance.
        </p>

        <p>
          Of course, given the deep rooted history and design of UK fiscal mechanics, significant change is unlikely. With this in mind my agent-based modelling and research endeavours are tuned to exploring dynamics at the core of the system as it exists; dynamics that may present before reactive <a className="icon-link" href="https://www.bankofengland.co.uk/quarterly-bulletin/2023/2023/financial-stability-buy-sell-tools-a-gilt-market-case-study" target="_blank">policies <i className="bi bi-box-arrow-up-right mb-2"></i></a> are even called to action.
        </p>

        <p>
          Visit the <a className="icon-link" href="https://www.giltedged.systems" target="_blank">GiltEdged.systems <i className="bi bi-box-arrow-up-right mb-2"></i></a> website for an explanation of project GEM as well as model code gists and descriptions.
        </p>

      </div>
    </>
  )
}

export default Index
