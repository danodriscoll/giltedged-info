import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

function Models() {

  return (
    <>
      <Helmet>
        <title>Models</title>
        <meta name='description' content='Daniel ODriscoll agent-based models.' />
      </Helmet>
      <div className="container">
        <h1 className="mt-4" id="gilt-edged-mini">
          Gilt Edged Mini (GEM)
        </h1>

        <div className="alert alert-info" role="alert">
          Project GEM is the development of models that may be used to think about real-world economic agent relationships. Specifically, how might sectoral agent behaviours affect and produce macro outcomes in the shape of real-world Gilt dynamics.
        </div>

        <p className="fw-bold">
          Development themes include, but are not limited to the following:
        </p>


        <ol className="list-group list-group-numbered">
          <li className="list-group-item">A system with evolving class agent behaviours. Specifically,
            <ol className="list-group list-group-numbered list-group-flush">
              <li className="list-group-item">Government expenditures and their distribution to producers.</li>
              <li className="list-group-item">Producer employment of households and wage payment.</li>
              <li className="list-group-item">Household taxation strategies and portfolio investment.</li>
            </ol>
          </li>
          <li className="list-group-item">The introduction of a new Asset Manager agent class - together with system accounting adjustments and behaviours.</li>
        </ol>

        <h2 className='mb-4 mt-4'>
          Speculative Future Scenarios
        </h2>

        <p className="fw-bold">
          Project GEM analyses demand that I learn and better understand the following:
        </p>

        <ol className="list-group list-group-numbered">
          <li className="list-group-item">The accounting arrangements of the English monetary system that have been established since 1694 (the <button type="button" className="btn btn-link ps-0 pe-0 icon-link" data-bs-toggle="modal" data-bs-target="#modernModal" style={{ marginTop: `-9px`, marginBottom: `-5px` }}>modern</button> turn).</li>
          <li className="list-group-item">English political-economic history since the modern turn:
            <ol className="list-group list-group-numbered list-group-flush">
              <li className="list-group-item">When and why the English create public money.</li>
            </ol>
          </li>
        </ol>

        <h3 className="mb-4 mt-4">
          Tools
        </h3>

        <p>
          GEM models employ the <a className="icon-link" href="https://mesa.readthedocs.io/stable/index.html" target="_blank">Mesa <i className="bi bi-box-arrow-up-right mb-2"></i></a> agent-based modelling (ABM) framework written in <a className="icon-link" href="https://www.python.org/" target="_blank">Python <i className="bi bi-box-arrow-up-right mb-2"></i></a>. Visit the <a className="icon-link" href="https://www.giltedged.systems" target="_blank">GiltEdged.systems <i className="bi bi-box-arrow-up-right mb-2"></i></a> website for model descriptions and code.
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

export default Models
