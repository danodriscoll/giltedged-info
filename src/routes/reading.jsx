import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

function Reading() {

  return (
    <>
      <Helmet>
        <title>Reading</title>
        <meta name='description' content='Daniel ODriscoll reading list.' />
      </Helmet>
      <div className="container">
        <h1 className="mt-4" id="reading-list">
          Reading
        </h1>

        <h2 className="mt-4 mb-4 text-muted">
          Domain
        </h2>

        <table className="table table-striped mt-4 mb-5">
          <thead>
            <tr>
              <th>Type</th>
              <th>Author(s)</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            <tr id='monetary-economics'>
              <td>Book</td>
              <td>Wynne Godley &amp; Marc Lavoie (G&amp;L)</td>
              <td>Monetary Economics: An Integrated Approach to Credit, Money, Income, Production and Wealth</td>
            </tr>
            <tr id='english-monetary-history'>
              <td>Book</td>
              <td>Christine Desan</td>
              <td>Making Money: Coin, Currency, and the Coming of Capitalism</td>
            </tr>
            <tr id='crashed'>
              <td>Book</td>
              <td>Adam Tooze</td>
              <td>Crashed: How a Decade of Financial Crises Changed the World</td>
            </tr>
            <tr>
              <td>Book</td>
              <td>Stephen Engelmann</td>
              <td>Economic <button type="button" className="btn btn-link ps-0 pe-0 icon-link" data-bs-toggle="modal" data-bs-target="#rationalityModal" style={{ marginTop: `-9px`, marginBottom: `-5px` }}>Rationality</button></td>
            </tr>
            <tr>
              <td>Book</td>
              <td>Hyman P. Minsky</td>
              <td>John Maynard Keynes</td>
            </tr>
            <tr>
              <td>Book</td>
              <td>Martin Mayer</td>
              <td>Nightmare on Wall Street: Salomon Brothers and the Corruption of the <button type="button" className="btn btn-link ps-0 pe-0 icon-link" data-bs-toggle="modal" data-bs-target="#bondMarketModal" style={{ marginTop: `-9px`, marginBottom: `-5px` }}>Marketplace</button></td>
            </tr>
            <tr>
              <td>Book</td>
              <td>Kjell G. Nyborg</td>
              <td>Collateral Frameworks: The Open Secrets of Central Banks</td>
            </tr>
            <tr>
              <td>Book</td>
              <td>John F. Weeks</td>
              <td>The Debt Delusion: Living Within Our Means and Other Fallacies</td>
            </tr>
          </tbody>
        </table>

        <table className="table table-striped mt-4 mb-5">
          <thead>
            <tr>
              <th>Type</th>
              <th>Author(s)</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Book</td>
              <td>Albert O. Hirschman</td>
              <td>The Passions and the Interests: Political arguments for capitalism before its triumph</td>
            </tr>
            <tr>
              <td>Book</td>
              <td>Carl Wennerlind</td>
              <td>Casualties of Credit: The English Financial Revolution, 1620-1720</td>
            </tr>
            <tr>
              <td>Book</td>
              <td>Steven Pincus</td>
              <td>1688: The First Modern Revolution</td>
            </tr>
            <tr>
              <td>Book</td>
              <td>David Kynaston</td>
              <td>Till Time's Last Stand: A History of the Bank of England 1694 - 2013</td>
            </tr>
            <tr>
              <td>Book</td>
              <td>Peter Mathias</td>
              <td>The First Industrial Nation: The Economic History of Britain 1700-1914</td>
            </tr>
            <tr>
              <td>Book</td>
              <td>Politics UK: Tenth Edition</td>
              <td>Editors: Bill Jones, Philip Norton &amp; Isabelle Hertner</td>
            </tr>
          </tbody>
        </table>        

        <table className="table table-striped mt-4 mb-5">
          <thead>
            <tr>
              <th>Type</th>
              <th>Author(s)</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Report</td>
              <td>Daniela Gabor</td>
              <td>The Wall Street Consensus</td>
            </tr>
            <tr>
              <td>Report</td>
              <td>Daniela Gabor</td>
              <td>Revolution without revolutionaries: Interrogating the return of monetary financing</td>
            </tr>
            <tr>
              <td>Report</td>
              <td>Daniela Gabor, Yannis Dafermos &amp; Jo Michel</td>
              <td>Institutional Supercycles: An Evolutionary Macro-Finance Approach</td>
            </tr>
            <tr>
              <td>Report</td>
              <td>Daniela Gabor</td>
              <td>Towards a theory of shadow money</td>
            </tr>
            <tr>
              <td>Report</td>
              <td>Daniela Gabor</td>
              <td>Critical macro-finance: A theoretical lens</td>
            </tr>
            <tr>
              <td>Report</td>
              <td>Daniela Gabor, Marina Hubner &amp; Benjamin Braun</td>
              <td>Governing through financial markets: Towards a critical political economy of Capital Markets Union</td>
            </tr>
            <tr>
              <td>Report</td>
              <td>Daniela Gabor &amp; Benjamin Braun</td>
              <td>Green macrofinancial regimes</td>
            </tr>
            <tr>
              <td>Journal Article</td>
              <td>Peden, G. C.</td>
              <td>"The 'Treasury View' on Public Works and Employment in the Interwar Period." The Economic History Review 37, no. 2 (1984): 167-81. https://doi.org/10.2307/2596879.</td>
            </tr>
            <tr>
              <td>Journal Article</td>
              <td>Booth, Alan</td>
              <td>"New Revisionists and the Keynesian Era in British Economic Policy." The Economic History Review 54, no. 2 (2001): 346-66. http://www.jstor.org/stable/3091910.</td>
            </tr>
          </tbody>
        </table>

        <h2 className="mt-4 mb-4 text-muted" id="language">
          Language
        </h2>
        <table className="table table-striped mt-4 mb-5">
          <thead>
            <tr>
              <th>Type</th>
              <th>Author(s)</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Book</td>
              <td>Albert O. Hirschman</td>
              <td>The Rhetoric of Reaction</td>
            </tr>
            <tr id="metaphor">
              <td>Book</td>
              <td>George Lakoff &amp; Mark Johnson</td>
              <td>Metaphors we Live By</td>
            </tr>
            <tr>
              <td>Book</td>
              <td>Zoltan Kovecses</td>
              <td>Metaphor</td>
            </tr>
            <tr>
              <td>Book</td>
              <td>Jonathan Charteris-Black</td>
              <td>Corpus Approaches to Critical Analysis</td>
            </tr>
            <tr>
              <td>Book</td>
              <td>Andrew Goatly</td>
              <td>Washing the Brain - Metaphor and Hidden Ideology</td>
            </tr>
          </tbody>
        </table>

        <h2 className="mt-4 mb-4 text-muted" id="tools">
          Tools
        </h2>
        <table className="table table-striped mt-4 mb-5">
          <thead>
            <tr>
              <th>Type</th>
              <th>Author(s)</th>                
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Book</td>
              <td>Donella H. Meadows</td>
              <td>Thinking in Systems: A Primer</td>
            </tr>
            <tr>
              <td>Book</td>
              <td>Editors: Leigh Tesfatsion &amp; Ken Judd</td>
              <td>Handbook of Computational Economics Volume 2</td>
            </tr>        
            <tr>
              <td>Book</td>
              <td>Bill Lubanovic</td>            
              <td>Introducing Python: Modern Computing in Simple Packages</td>
            </tr>
            <tr>
              <td>Book</td>
              <td>Wes Mckinney</td>
              <td>Python for Data Analysis: Data Wrangling with Pandas, Numpy, and IPython</td>
            </tr>
            <tr>
              <td>Book</td>
              <td>Joel Grus</td>
              <td>Data Science from Scratch: First Principles with Python</td>
            </tr>          
          </tbody>
        </table>

        <div className="modal fade" id="bondMarketModal" tabindex="-1" aria-labelledby="bondMarketModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="bondMarketModalLabel">Government Bond Market</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>
                  ... Professor Marcus Nadler of New York University, who was an Austrian refugee, taught a night course on financial markets, a big lecture course with almost two hundred students. (Charles) Simon enrolled.  He got Rudolf Smutny to go with him, and then Billy Salomon, for a few weeks.  "We wanted to know," Simon recalled, "why when Uncle Sam borrowed so much money [over time] his credit rating didn't decline.  Why did rates go down [over time] rather than up?  Nadler explained that the more the government borrowed, the more money there was. This was stunning to those of us who had no background. Nadler's great ability to teach inspired those of us who had never gone to college. Smutny had no education and didn't really want an education; he went because he wanted to know why I idolized Nadler. ... I was very privileged to have that time with the old man." (Charles Simon, circa 1950s)<br/>
                </p>
                <p>
                  ... Simon soon learned that there was a lot more to bond trading than whether there were more sellers or more buyers.
                </p>
                <p className="fw-light fst-italic">
                  Mayer, M. 1993: Nightmare on Wall Street: Salomon Brothers and the Corruption of the Marketplace. New York. SIMON & SCHUSTER. p. 73.
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="rationalityModal" tabindex="-1" aria-labelledby="rationalityModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="rationalityModalLabel">Governing Interest</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>
                  (On 'Nature and Significance', by Lionel Robbins) ... Robbins wants to free economics proper as much as possible from psychology, and as much as possible from policy. However, the point here is that intentions, biases etc. are not what is at issue but instead the more foundational logic of economic rationality itself. Economic rationality displaces political sovereignty with economic sovereignty. Thus the political significance of economic rationality is that through this displacement struggles against domination or any other form of conflict and cooperation over shared space are reframed: they are reframed as problems of domestic and social administration, problems in Robbin's terms, of more harmonious government.
                </p>
                <p>
                  In this way, the logic of more-or-less rational allocative choice limits political understanding and straight-jackets collective action. Such constraints are convenient for dominant classes and interests, but they are particularly ill-suited to the scale and character of multiple contemporary crises. The attempt to address these crises through economic government necessarily falls short, and it engenders more of the problems that economic rationality is so ill-suited to solve.
                </p>
                <p className="fw-light fst-italic">
                  Engelmann, S. 2022: Economic Rationality. New Jersey. Polity Press. p. 103.
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

export default Reading
