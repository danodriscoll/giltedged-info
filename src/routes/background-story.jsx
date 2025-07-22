import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Model from '../assets/model_development.svg'

function Index() {

  const [modelHeadingState, setModelHeadingState] = useState(false);

  return (
    <>
      <Helmet>
        <title>Story</title>
        <meta name='description' content='Giltedged project background story.' />
      </Helmet>
      <div className="container">
        <h1 className="mt-4" id="background-story">
          Background Story
        </h1>

        <p className='mt-4'>
          I'll cut to the chase. I'm neither economist nor historian. I'm a full-time carer for my disabled mum. In what feels like a previous life, I was more of an information technology guy with a side gig in accounting. I worked for a Japanese sogo-shosha, a big-4 professional service provider and a major energy transmission company. My further education includes an undergraduate degree in Business &amp; Economics (BA) and a postgraduate degree in Computer Security Forensics & Risk Management (MSc).
        </p>

        <p>
          It seems an age since I was technical and training lead for a number of transnational accounting system projects; Enterprise Resource Planning (ERP) to use the lingo. It was during this time that I opened a self-invested private pension (SIPP). I made regular contributions for a while, but that was then; my SIPP lay dormant, forgotten for ages.
        </p>

        <p>
          Then one day I received an email. It was my SIPP provider: "Your SIPP has a high proportion held as cash" read the subject. They continued, "... This might be part of your strategy, but it can drag on returns." Strategy? I didn't know whether to laugh or cry. What strategy? Surprised to have heard from them at all, I ignored it. A high proportion of not much is not much. But it gnawed at me. I should do <span className="fst-italic">something</span>. I remember my undergraduate economics classes, just, the certainty of lectures articulating the efficient markets hypothesis and the risk free asset. It was obvious, I would invest in a UK government bond. The thing is, it didn't feel obvious. Nothing post 2008 financial system collapse felt obvious. What is <span className="fst-italic">this</span> system? I knew nothing beyond a generally received narrative. I wanted to know more - I had always wanted to know more - about English history, in particular the history and evolution of the English monetary system.
        </p>

        <h2 className='mb-4 mt-4'>
          Accomplished Teachers
        </h2>        

        <p>
          In the summer of 2018 I bought <Link className="icon-link" to="/reading#crashed" id="crashed">Crashed</Link>; a then recently published analysis of the 2008 financial crisis written by Adam Tooze. Thanks to the recommendation algorithm I bought two further books soon after, these being, <Link className="icon-link" to="/reading#monetary-economics" id="monetary-economics">Monetary Economics</Link> written by <button type="button" className="btn btn-link ps-0 pe-0 icon-link" data-bs-toggle="modal" data-bs-target="#godleyModal" style={{ marginTop: `-9px`, marginBottom: `-5px` }}>Wynne Godley</button> and Marc Lavoie (G&amp;L) and <Link className="icon-link" to="/reading#english-monetary-history" id="english-monetary-history">Making Money</Link> written by Christine Desan. Desan explores the evolution of the English monetary system through the ages - a simply fascinating account - with the power to <button type="button" className="btn btn-link ps-0 pe-0 icon-link" data-bs-toggle="modal" data-bs-target="#historyModal" style={{ marginTop: `-9px`, marginBottom: `-5px` }}>historicise</button> G&amp;L's meticulous models. While metallism narrates the compound money of earlier times, it was a system - a monetary system - that bestowed on precious metals a cash price. Today, a government with the authority and power to create currency - no mean feat - will issue bonds in order to drain reserve balances and, if required, to produce safe collateral.
        </p>

        <p>
          My reading continued. By late 2022 it dawned on me that the wonderful books and academic papers I have mostly read since 2018 were each a lens through which to view a particular social system - one of power, resources and the distribution thereof. Latterly, my nascent awareness of modern money as an inherently <Link className="icon-link" to="/background-story/market-finance" id="market-finance">unstable</Link> market-based financial system has come into view. A pro-cyclical, collateralised, bond price sensitive system to completely absorb the theme of Tooze's tome.
        </p>

        <h3 className="mb-4 mt-4">
          Model Endeavours
        </h3>

        <p>
          Some of the academic texts allowed me to construct my own simple accounting treatments (old habits). However, it was time to focus on G&amp;L's book. Specifically, I wanted to understand G&amp;L's incrementally sophisticated sectoral accounting explanations up to the point where a government money system is combined with a commercial banking system. I set out to build computational (agent-based) <a className={`link-${modelHeadingState ? 'info' : 'primary'} icon-link`} href="#model" onClick={() => setModelHeadingState(true)}>model</a> interpretations of the G&amp;L described systems. It's quite a journey.
        </p>

        <div className="row">
          <div className="col text-muted">
            <h3 className={`mt-3 mb-4 text-${modelHeadingState ? 'info' : 'dark'}`} id="tools">
              On Models
            </h3>
            <p>
              The well known aphorism "all models are wrong, but some are useful" comes to mind. My agent-based models spring from my nascent, bounded, comprehension of reading materials describing the evolution of real-world state monetary systems.
            </p>
          </div>
          <div className="col-md-auto d-none d-xl-block">
            <img src={Model} alt="Model development" id="modelWrapper" />
          </div>
        </div>


        <div className="modal fade" id="godleyModal" tabIndex="-1" aria-labelledby="godleyModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="godleyModalLabel">Wynne Godley</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <figure>
                  <blockquote className="blockquote pb-3">
                    <p>
                      ... The world's problems of which are serious will not be solved by market forces alone or even principally by them. Something else has to be done.
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    Macfarlane, A. (2011, March 22) <cite title="Wynne Godley 16th May 2008">Wynne Godley 16th May 2008</cite> [Video file]. Film interviews of people associated with King's College, Cambridge. https://www.sms.cam.ac.uk/media/1117847 [2:03:15-2:03:30]
                  </figcaption>
                </figure>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="historyModal" tabIndex="-1" aria-labelledby="historyModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="historyModalLabel">A Potted History</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>
                  The development of a monetary system in a specific unit of account is one mode of directing resources towards the centre - to mark contributions from people before they are due and give out uniform receipts, tokens, in return.
                </p>
                <p>
                  Historically, system design may blend, with challenges, the ideologies of nominalism and metallism. Money in this context was always a compound of value with a count. Arbitrage opportunities destabilised money supply patterns, principally, when nominal face value diverged from bullion content. Although never simply metallism, bullion content mattered greatly. Supply shortages bedevilled both mediaeval and later commodity monetary systems.
                </p>
                <p>
                  Money is a unit of account. Its payments and collections; an ongoing politically engineered market-based project.
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

export default Index
