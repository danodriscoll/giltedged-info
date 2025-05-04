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
          The <Link className="icon-link" to="/background-story">background story</Link> notes my desire to learn about the fascinating evolution of the English monetary system. A system designed to blend nominalism with metallism and produce the safest (Gilt) asset of all: An asset - with operational tweaks - that remains crucial to the <a className="icon-link" href="https://www.bankofengland.co.uk/quarterly-bulletin/2023/2023/financial-stability-buy-sell-tools-a-gilt-market-case-study" target="_blank">stability <i className="bi bi-box-arrow-up-right mb-2"></i></a> of an inherently unstable market-based finance system.
        </p>

        <p>
          GEM is an evolving research project. It merges the analysis of agent-based model output with real-world economic time-series and historical events since the <button type="button" className="btn btn-link ps-0 pe-0 icon-link" data-bs-toggle="modal" data-bs-target="#modernTurn" style={{ marginTop: `-9px`, marginBottom: `-5px` }}>modern turn</button>. My models and research are tuned to exploring the core of the system as it exists. Not the essence of the system I imagined it to be before my <Link className="icon-link" to="/reading">reading</Link>. In short, Gilt price and yield dynamics reflect a structure distinct from the generally received narrative.
        </p>

        <p>
          Visit the <a className="icon-link" href="https://www.giltedged.systems" target="_blank">GiltEdged.systems <i className="bi bi-box-arrow-up-right mb-2"></i></a> website for a GEM project outline as well as model code gists and descriptions.
        </p>
        <div className="modal fade" id="modernTurn" tabIndex="-1" aria-labelledby="modernTurnLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modernTurnLabel">Modern Turn</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>
                  When the visibility of money as a political project faded, the way it had realigned the societies that authored it also disappeared from view. With that disappearance went compelling questions about the consequences of the transformation - including the role of fiscal action in supporting the value of money<sup>1</sup>.
                </p>
                <p>
                Reconsidering its creation story suggests that <span className="fst-italic">making money</span> is a constitutional project. In mediaeval England, silver and gold were only the beginning, not the end, of the story. They furnished the material value upon which the mediaeval world would act out a debate over how to package, pay and circulate value. That effort distributed resources. It shaped nation building. It configured new ways to represent counted value - public debt, circulating credit, and elaborate hierarchies of credit are all part of the story, as are markets, banks, securities and financial crises. The way the English made money shaped and reshaped the way people conceptualised it and the way they conducted monetary policy. As a matter engineered on a fiscal frame, enhanced by the unique cash quality it offered, and expanded for a charge, money has never been neutral<sup>2</sup>.
                </p>
                <p>
                Bank (of England) notes, like bills, had been blessed from the beginning, or very close to it, by a second constitutional contrivance. Both public officials and individual holders cooperated to institutionalise them as a mode of payment by giving them a unique stature in exchange between the government and its citizens. ... The stature of the Bank's notes again set them apart from their competitors. Specie was not actually <span className="fst-italic">backing</span> Bank issues in the sense that redemption was a significant part of the functioning system. According to the numbers in circulation, people held Bank notes rather than demanding specie. ... Freed from more laborious work, specie began assuming its modern role. First, it acted, as a kind of security, a default guarantee. If the Bank notes failed as money, people could claim specie as a back-up. Less directly, but more practically, specie was a legitimating device. The Bank's commitment to cash its demand instruments visibly limited the number it could issue. And the image offered of gold or silver in the vault gave those holding paper the sense that an anchor existed - even if the anchor was actually elsewhere, in the sound functioning of the fiscal system<sup>3</sup>.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <sup>1</sup><small> Desan, <span className="fst-italic">Making Money</span>, p. 22</small>
                  </li>
                  <li>
                    <sup>2</sup> <small>p. 69</small>
                  </li>
                  <li>
                    <sup>3</sup> <small>pp. 311-319</small>
                  </li>
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Index
