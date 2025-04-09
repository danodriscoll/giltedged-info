import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

function GEM() {

  return (
    <>
      <Helmet>
        <title>Models</title>
        <meta name='description' content='GEM research.' />
      </Helmet>
      <div className="container">
        <h1 className="mt-4" id="gilt-edged-mini">
          Gilt Edged Mini (GEM)
        </h1>

        <p className='mt-4'>
          The <Link className="icon-link" to="/background-story">background story</Link> notes my ambition to learn about English history, in particular the evolution of the English monetary system. Project GEM is this ambition in progress. GEM is the organisation and exploration of both agent model analysis - speculative agent model run scenarios - and historical datasets spanning centuries, economic and otherwise pertinent to the United Kingdom of Great Britain and Northern Ireland (UK).
        </p>

        <h2 className='mb-4 mt-4'>
          Agent Model
        </h2>

        <p>
          Agent-Based Model Liquidity Preference-X (ABMLP-X) is an interpretation - an open ended development - of the third sectoral system described by Wynne Godley and Marc Lavoie (G&L) in their book <Link className="icon-link" to="/reading#monetary-economics" id="monetary-economics">Monetary Economics</Link>. ABMLP-X (the model) may consume pro rata expenditure and interest rate time-series for the UK.
        </p>


        <h3 className='mb-4 mt-4'>
          Model Run Scenarios: Past, Present & Future
        </h3>

        <p className="fw-bold mt-4">
          Model Run Time Spans
        </p>

        <ol className="list-group list-group-numbered list-group-flush">
          <li className="list-group-item">
            Highly condensed annual UK economic time-series data: Beginning 1695; ending 1954.            
          </li>
          <li className="list-group-item">
            UK quarterly economic time-series <a className="icon-link" href="https://www.data-reports.net/giltedged-info/explode_quarterly_values.html" target="_blank">exploded <i className="bi bi-box-arrow-up-right mb-2"></i></a> into monthly time-series from 1955 to the present: A model run may end with the latest release of economic time-series data made available from the ONS website.
          </li>
          <li className="list-group-item">
            To the future: A model run may also end with time-series values that go beyond available <a className="icon-link" href="https://www.ons.gov.uk/" target="_blank">ONS <i className="bi bi-box-arrow-up-right mb-2"></i></a> data - values determined by model agent logics. The latest release of ONS time-series data is typically one financial quarter behind today's date. A model run that proceeds with model generated values is an imagined journey to both the present and future.
          </li>
        </ol>

        <p className='mb-4 mt-4'>
          Visit the <a className="icon-link" href="https://www.giltedged.systems" target="_self">GiltEdged.systems <i className="bi bi-box-arrow-up-right mb-2"></i></a> website for model code gists and descriptions.
        </p>

        <h3 className='mb-4 mt-4'>
          Model Analysis
        </h3>

        <p>
          Model run macro and agent-level outputs are wrangled and analysed. For instance, model macro output is augmented with trend change (<span className="fst-italic">velocity</span>) and trend change in the change (<span className="fst-italic">acceleration</span>) at which new bills are issued by the Government as a percentage of national income. View a <Link className="icon-link" to="/gilt-edged-mini/uk-static-perspective">UK Static Perspective</Link> for a simple example of correlation between model system analysis and real-world UK Gilt dynamics.
        </p>

        <h2 className='mb-4 mt-4'>
          Research
        </h2>

        <p className="fw-bold">
          Themes include, but are not limited to:
        </p>

        <ol className="list-group list-group-numbered list-group-flush">
          <li className="list-group-item">
            The accounting arrangements of the English monetary system since the <button type="button" className="btn btn-link ps-0 pe-0 icon-link" data-bs-toggle="modal" data-bs-target="#modernModal" style={{ marginTop: `-9px`, marginBottom: `-5px` }}>modern turn</button>.
          </li>
          <li className="list-group-item">
            Historical patterns of events that affect English public money creation.
          </li>
          <li className="list-group-item">
            How the evolving behavioural logic of agents affect model system aggregates, in particular:
            <ol className="list-group list-group-numbered list-group-flush">
              <li className="list-group-item">
                Within the framework of an evolving Asset Manager agent class.
              </li>
            </ol>
          </li>
        </ol>

        <p className='mt-4'>
          GEM research makes use of sharable <a className="icon-link" href="https://notebooklm.google/" target="_blank">notebooks <i className="bi bi-box-arrow-up-right mb-2"></i></a>. <span className="text-muted">Email:</span> <a className="icon-link" href="mailto:daniel@giltedged.info">daniel@giltedged.info</a>.
        </p>

        <div className="modal fade" id="modernModal" tabIndex="-1" aria-labelledby="modernModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modernModalLabel">Modern Money System</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>
                  When the visibility of money as a political project faded, the way it had realigned the societies that authored it also disappeared from view. With that disappearance went compelling questions about the consequences of the transformation - including the role of fiscal action in supporting the value of money.<sup>1</sup>
                </p>
                <p>
                  Reconsidering its creation story suggests that "making money" is a constitutional project. In mediaeval England, silver and gold were only the beginning, not the end, of the story. They furnished the material value upon which the mediaeval world would act out a debate over how to package, pay and circulate value. That effort distributed resources. It shaped nation building. It configured new ways to represent counted value - public debt, circulating credit, and elaborate hierarchies of credit are all part of the story, as are markets, banks, securities and financial crises. The way the English made money shaped and reshaped the way people conceptualised it and the way they conducted monetary policy. As a matter engineered on a fiscal frame, enhanced by the unique cash quality it offered, and expanded for a charge, money has never been neutral.<sup>2</sup>
                </p>
                <p>
                  Bank (of England) notes, like bills, had been blessed from the beginning, or very close to it, by a second constitutional contrivance. Both public officials and individual holders cooperated to institutionalise them as a mode of payment by giving them a unique stature in exchange between the government and its citizens. ... The stature of the Bank's notes again set them apart from their competitors. Specie was not actually "backing" Bank issues in the sense that redemption was a significant part of the functioning system. According to the numbers in circulation, people held Bank notes rather than demanding specie. ... Freed from more laborious work, specie began assuming its modern role. First, it acted, as a kind of security, a default guarantee. If the Bank notes failed as money, people could claim specie as a back-up. Less directly, but more practically, specie was a legitimating device. The Bank's commitment to cash its demand instruments visibly limited the number it could issue. And the image offered of gold or silver in the vault gave those holding paper the sense that an anchor existed – <span className="fst-italic">even if the anchor was actually elsewhere, in the sound functioning of the fiscal system.</span><sup>3</sup>
                </p>
                <hr className="bg-secondary mt-4 mb-4 col-md-3" />
                <p className="fw-light fst-italic">
                  <sup>1</sup> <small>Desan, C. 2015: Making Money: Coin, Currency, and the Coming of Capitalism. Oxford University Press. p. 22.</small><br/>
                  <sup>2</sup> <small>See p. 69.</small><br/>
                  <sup>3</sup> <small>See pp. 311 - 319.</small>
                </p>
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

export default GEM
