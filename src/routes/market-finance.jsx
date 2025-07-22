import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

function MarketFinance() {

  return (
    <>
      <Helmet>
        <title>Market Finance</title>
        <meta name='description' content='A simple description of market-based finance' />
      </Helmet>    
      <div className="container">
        <h1 className="mt-4" id="market-finance">
          Market Finance
        </h1>

        <p>
          In the generally received model of capitalism a bank opens the monetary circuit when the corporate sector decides to begin production. To simplify, the banking sector creates bank credit for corporations, wages are paid, goods and financial securities are purchased, until finally, corporations repay their debt and the circuit is closed.
        </p>

        <h3>
          Circuit Evolution
        </h3>

        <p>
          Endogenous money in market-based finance traces an anomalous monetary circuit. Credit organises around asset securities and derivatives markets. Shadow money is born as a repurchase (repo) transaction, as a sale of securities (the collateral) with the promise to buy back. Shadow money (brought into being to finance securities) is the debt of asset backed securities traders. Shadow money is the debt collateralised by the very securities that it finances.
        </p>

        <h3>
          Securities
        </h3>

        <p>
          To paraphrase professor of economics and macro-finance Daniela Gabor, "... Fiscal and monetary arms of the state must respond to changes in the financial system if they want to preserve capitalism (financial capitalism) in some form. Specifically, if shadow money created via repo is to preserve value - parity with traditional forms of money - during times of crisis then central banks must intervene in order to make these new <span className="fst-italic">promises-to-pay</span> <button type="button" className="btn btn-link ps-0 pe-0 icon-link" data-bs-toggle="modal" data-bs-target="#safeModal" style={{ marginTop: `-9px`, marginBottom: `-5px` }}>safe</button>."
        </p>

        <h3>
          A Simple Accounting Example
        </h3>

        <p>
          How might money balances, banking deposits, created ex-nihilo by a bank as loan origination, be converted into the money-like claims of a repurchase (repo) agreement?
        </p>

        <p>
          This is a highly simplified summary accounting of how a lending bank may replace the deposit funding of its loan book with repo funding - and in the process - destroy bank deposits in favour of the endogenous creation of repo deposits.
        </p>

        <div className="alert alert-primary" role="alert">
          All transactors hold deposit accounts at the same bank. Steps outlined.
        </div>

        <ol className="list-group list-group-numbered mb-3">
          <li className="list-group-item">
            Bank lends to the debtor household by issuing a loan, creating a deposit in the process.
            <span className="badge bg-dark float-end">Step 1</span>
          </li>
          <li className="list-group-item">
            Debtor household spends the newly obtained deposit by purchasing an asset, transferring the deposit to the creditor.
            <span className="badge bg-dark float-end">Step 2</span>
          </li>
          <li className="list-group-item">
            Not wishing to hold the deposit, the creditor household purchases a share in the Money Market Fund (MMF).
            <span className="badge bg-dark float-end">Step 3</span>
          </li>
          <li className="list-group-item">
            The MMF has an excess of 'cash' and uses a repo to lend short-term to a dealer-broker - exchanges bank deposit for repo asset.
            <span className="badge bg-dark float-end">Step 4</span>
          </li>
          <li className="list-group-item">
            Finally, dealer-broker lends to the bank through bilateral repo market. Allows the loan issuing bank to replace deposit funding with repo funding.
            <span className="badge bg-dark float-end">Step 5</span>
          </li>
        </ol>

        <table className="table table-bordered table-hover">
          <thead>
            <tr>                
              <th style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>Asset Value</th>
              <th>Bank (Loan Issuing)</th>
              <th>Household</th>
              <th>Creditor</th>
              <th>Money Market Fund</th>
              <th>Dealers / Broker</th>
              <th style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>Sum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>£500</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>(Individual / Corporation / Government)</td>
              <td>(Shadow Bank)</td>
              <td>(Shadow Bank)</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>&nbsp;</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgrey`, borderWidth: `1px`, color: `white` }}>
                <span className="badge bg-dark">Step 1</span>
              </td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>&nbsp;</td>
            </tr>
            <tr>
              <td>Loans (Asset)</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>£500.00</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>-£500.00</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>0</td>
              <td>0</td>
              <td>0</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0</td>
            </tr>
            <tr>
              <td>Deposits (Credit (ex nihilo))</td>
              <td style={{ backgroundColor: `#c3e6cb`, color: `#155724`, borderColor: `lightgray`, borderWidth: `1px` }}>-£500.00</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>£500.00</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>0</td>
              <td>0</td>
              <td>0</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgrey`, borderWidth: `1px`, color: `white` }}>
                <span className="badge bg-dark">Step 2</span>
              </td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>&nbsp;</td>
            </tr>
            <tr>
              <td>Loans</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>£500.00</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>-£500.00</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>0</td>
              <td>0</td>
              <td>0</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0</td>
            </tr>
            <tr>
              <td>Deposits</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>-£500.00</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>0</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>£500.00</td>
              <td>0</td>
              <td>0</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0</td>
            </tr>
            <tr>
              <td style={{ color: `gray` }}>Asset Value</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `gray`, borderColor: `lightgray`, borderWidth: `1px` }}>£500.00</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `gray`, borderColor: `lightgray`, borderWidth: `1px` }}>-£500.00</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgrey`, borderWidth: `1px`, color: `white` }}>
                <span className="badge bg-dark">Step 3</span>
              </td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>&nbsp;</td>
            </tr>
            <tr>
              <td>Loans</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>£500.00</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>-£500.00</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>0</td>
              <td>0</td>
              <td>0</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0</td>
            </tr>
            <tr>
              <td>Deposits</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>-£500.00</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>0</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>0</td>
              <td>£500.00</td>
              <td>0</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0</td>
            </tr>
            <tr>
              <td style={{ color: `gray` }}>Asset Value</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `gray`, borderColor: `lightgray`, borderWidth: `1px` }}>£500.00</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `gray`, borderColor: `lightgray`, borderWidth: `1px` }}>-£500.00</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0</td>
            </tr>
            <tr>
              <td style={{ color: `gray` }}>NAV Shares Value</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `gray`, borderColor: `lightgray`, borderWidth: `1px` }}>£500.00</td>
              <td style={{ color: `grey` }}>-£500.00</td>
              <td>&nbsp;</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgrey`, borderWidth: `1px`, color: `white` }}>
                <span className="badge bg-dark">Step 4</span>
              </td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>&nbsp;</td>
            </tr>
            <tr>
              <td>Loans</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>£500.00</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>-£500.00</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>0</td>
              <td>0</td>
              <td>0</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0</td>
            </tr>
            <tr>
              <td>Deposits</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>-£500.00</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>0</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>0</td>
              <td>0</td>
              <td>£500.00</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0</td>
            </tr>
            <tr>
              <td style={{ color: `gray` }}>Asset Value</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `gray`, borderColor: `lightgray`, borderWidth: `1px` }}>£500.00</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `gray`, borderColor: `lightgray`, borderWidth: `1px` }}>-£500.00</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0</td>
            </tr>
            <tr>
              <td style={{ color: `gray` }}>NAV Shares Value</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `gray`, borderColor: `lightgray`, borderWidth: `1px` }}>£500.00</td>
              <td style={{ color: `grey` }}>-£500.00</td>
              <td>&nbsp;</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0</td>
            </tr>
            <tr>
              <td style={{ color: `gray` }}>Tri-Party Repo Asset</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `gray`, borderColor: `lightgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ color: `grey` }}>£500.00</td>
              <td style={{ color: `grey` }}>-£500.00</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgrey`, borderWidth: `1px`, color: `white` }}>
                <span className="badge bg-dark">Step 5</span>
              </td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `gray`, borderColor: `darkgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>&nbsp;</td>
            </tr>
            <tr>
              <td>Loans</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>£500.00</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>-£500.00</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>0</td>
              <td>0</td>
              <td>0</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0</td>
            </tr>
            <tr>
              <td>Deposits</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>0</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>0</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>0</td>
              <td>0</td>
              <td>0</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0</td>
            </tr>
            <tr>
              <td style={{ color: `gray` }}>Asset Value</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `gray`, borderColor: `lightgray`, borderWidth: `1px` }}>£500.00</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `gray`, borderColor: `lightgray`, borderWidth: `1px` }}>-£500.00</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0</td>
            </tr>
            <tr>
              <td style={{ color: `gray` }}>NAV Shares Value</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `gray`, borderColor: `lightgray`, borderWidth: `1px` }}>£500.00</td>
              <td style={{ color: `grey` }}>-£500.00</td>
              <td>&nbsp;</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0</td>
            </tr>
            <tr>
              <td style={{ color: `gray` }}>Tri-Party Repo Asset</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `gray`, borderColor: `lightgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ color: `grey` }}>£500.00</td>
              <td style={{ color: `grey` }}>-£500.00</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0</td>
            </tr>
            <tr>
              <td style={{ color: `gray` }}>Bilateral Repo</td>
              <td style={{ backgroundColor: `#c3e6cb`, color: `grey`, borderColor: `lightgray`, borderWidth: `1px` }}>-£500.00</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `#856404`, borderColor: `lightgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ backgroundColor: `#ffeeba`, color: `gray`, borderColor: `lightgray`, borderWidth: `1px` }}>&nbsp;</td>
              <td style={{ color: `grey` }}>&nbsp;</td>
              <td style={{ color: `grey` }}>£500.00</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>Sum</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0.00</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0.00</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0.00</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0.00</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>£0.00</td>
              <td style={{ backgroundColor: `white`, color: `black`, borderColor: `#dddddd`, borderWidth: `1px` }}>&nbsp;</td>
            </tr>
          </tbody>
        </table>

        <p>
          Market-based accounting is a spreadsheet interpretation of the 'off-balance sheet' description of a shadow banking monetary circuit created by Jo Michell, University of the West of England, Bristol (UWE).
        </p>

        <div className="alert alert-secondary" role="alert">
          <cite>
            Michell, Jo. (May 1, 2017). Do Shadow Banks Create Money? 'Financialisation' and the Monetary Circuit. Metroeconomica, Volume 68, Issue 2, Pages 354-377. doi: 10.1111/meca.12149.
          </cite>
        </div>

        <p>
          Framework misunderstanding and spreadsheet accounting errors are Dan's responsibility alone.
        </p>

        <p className='mt-4 mb-5'>
          Back to the <Link to="/background-story#market-finance">story</Link>.
        </p>

        <div className="modal fade" id="safeModal" tabIndex="-1" aria-labelledby="safeModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="safeModalLabel">Safe Asset</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>
                  A 'safe asset' is an asset that is (almost always) valued at face value without expensive and prolonged analysis. An asset is not born, but becomes safe in order to accommodate evolutionary changes in finance that require new safe assets.
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

export default MarketFinance
