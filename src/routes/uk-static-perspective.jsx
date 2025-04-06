import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

function StaticPerspective() {

  return (
    <>
      <Helmet>
      <title>UK Static Perspective</title>
      <meta name='description' content='A UK static perspective.' />
      </Helmet>    
      <div className="container">
        <h1 className="mt-4" id="static-perspective">
          UK Static Perspective
        </h1>

        <p className="fw-semibold mt-4">
          A United Kingdom of Great Britain and Northern Ireland (UK-GB) perspective.
        </p>

        <h2 className='mb-4 mt-4'>
          ABMLP-X
        </h2>

        <p>
          A simple analysis of the velocity and acceleration of a Government money system - the new bills issued - alongside UK Gilt yield dynamics from the second quarter of 1974 through to the fourth quarter of 2023.
        </p>

        <h3 className='text-secondary mt-5'>
          The Velocity and Acceleration of Supply: New Bills Issued (Quarterly)
        </h3>

        <p>
          A model run free from interest payments on Government money.
        </p>

        <p className="fw-semibold">
          Model Run Parameter Inputs
        </p>

        <ul className="list-group">
          <li className="list-group-item">
            Model: ABMLP-X
          </li>
          <li className="list-group-item">
            Government Expenditure: See Model Input: Real-World Expenditures from resource.
          </li>
          <li className="list-group-item">
            Taxation rate: 37% (Flat rate; all household agents)
          </li>
          <li className="list-group-item">
            Number of Producers: 90
          </li>
          <li className="list-group-item">
            Number of Households: 100
          </li>
          <li className="list-group-item">
            Bond Coupon Rate: 0%
          </li>
          <li className="list-group-item">
            Interest Rate: 0%
          </li>
        </ul>

        <p className="fw-semibold mt-4">
          Model Run Charts
        </p>

        <ol className="list-group list-group-numbered">
          <li className="list-group-item">
            View the <a className="icon-link" href="https://www.data-reports.net/giltedged-info/virgo-420-23-05-2024-analysis-velocity.html" target="_blank">velocity <i className="bi bi-box-arrow-up-right mb-2"></i></a> of model bills issued.
          </li>
          <li className="list-group-item">
            View the <a className="icon-link" href="https://www.data-reports.net/giltedged-info/virgo-420-23-05-2024-analysis-acceleration.html" target="_blank">acceleration <i className="bi bi-box-arrow-up-right mb-2"></i></a> of model bills issued.
          </li>
        </ol>

        <p className='mt-4'>
          The velocity plot shows two periods, among others, where the velocity of model bills leads to a similar reaction in the real-world Gilt yield. The period between July 1997 and July 2003, however, shows the trend velocity of model bills issued increasing while the trend Gilt yield is decreasing. When we look at the acceleration of model bills issued, we see that across the same period there is actually a negative acceleration trend occurring. The velocity of bills issued may be increasing, but the system is experiencing negative acceleration - to which Gilt yields may be reacting.
        </p>

        <h3 className='text-secondary mt-5'>
          The Velocity and Acceleration of Supply: New Bills Issued <span className="fw-semibold">at Interest</span> (Quarterly)
        </h3>

        <p>
          A model run that includes interest payments on Government money assets.
        </p>

        <p className="fw-semibold">
          Model Run Parameter Inputs
        </p>

        <ul className="list-group">
          <li className="list-group-item">
            Model: ABMLP-X
          </li>
          <li className="list-group-item">
            Government Expenditure: See Model Input: Real-World Expenditures from resource.
          </li>
          <li className="list-group-item">
            Taxation rate: 37% (Flat rate; all household agents)
          </li>
          <li className="list-group-item">
            Number of Producers: 90
          </li>
          <li className="list-group-item">
            Number of Households: 100
          </li>
          <li className="list-group-item">
            Bond Coupon Rate: 1%
          </li>
          <li className="list-group-item">
            Interest (Base) Rate: See Model Input: Real-World Interest Rates from resource.
          </li>
        </ul>

        <p className="fw-semibold mt-4">
          Model Run Charts
        </p>

        <ol className="list-group list-group-numbered">
          <li className="list-group-item">
            View the <a className="icon-link" href="https://www.data-reports.net/giltedged-info/libra-498-07-06-2024-analysis-velocity.html" target="_blank">velocity <i className="bi bi-box-arrow-up-right mb-2"></i></a> of model bills issued.
          </li>
          <li className="list-group-item">
            View the <a className="icon-link" href="https://www.data-reports.net/giltedged-info/libra-498-07-06-2024-analysis-acceleration.html" target="_blank">acceleration <i className="bi bi-box-arrow-up-right mb-2"></i></a> of model bills issued.
          </li>
          <li className="list-group-item">
            The model <a className="icon-link" href="https://www.data-reports.net/giltedged-info/libra-498-07-06-2024-analysis-bond-yield.html" target="_blank">bond yield <i className="bi bi-box-arrow-up-right mb-2"></i></a>.
          </li>
        </ol>

        <h3 className='text-secondary mt-5'>
          The Velocity of Supply: New Bills Issued <span className="fw-semibold">at Interest</span> (Monthly)
        </h3>

        <p className="fw-semibold mt-4">
          From Quarterly to Monthly Expenditure Time-Series
        </p>

        <p>
          The [<a className="icon-link" href="https://www.ons.gov.uk/economy/grossdomesticproductgdp/timeseries/nmrp/" target="_blank">ONS <i className="bi bi-box-arrow-up-right mb-2"></i></a>] provides quarterly Government expenditure time-series. Model development and analysis may benefit by exploding the quarterly expenditure series consumed by the model into a <a className="icon-link" href="https://www.data-reports.net/giltedged-info/explode_quarterly_values.html" target="_blank">monthly data series <i className="bi bi-box-arrow-up-right mb-2"></i></a>. Monthly interest (base) rates are offered by the Central Bank (See resource).
        </p>

        <p>
          Showing a calculated <a className="icon-link" href="https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.rolling.html" target="_blank">rolling average <i className="bi bi-box-arrow-up-right mb-2"></i></a> (window=3) velocity of a Government money system - the new bills issued - alongside UK Gilt yield dynamics from March 1974 through to the May of 2024. The coupon rate on bonds (consols) are now calculated as the average of the Central Bank base rate set across the previous 3 steps.
        </p>
 
        <p className="fw-semibold">
          Model Run Parameter Inputs
        </p>

        <ul className="list-group">
          <li className="list-group-item">
            Model: ABMLP-X
          </li>
          <li className="list-group-item">
            Government Expenditure: See Model Input: Real-World Expenditures from resource.
          </li>
          <li className="list-group-item">
            Taxation rate: 37% (Flat rate; all household agents)
          </li>
          <li className="list-group-item">
            Bond Coupon Rate: (See the <span className="fst-italic">get_coupon_rate</span> function).
          </li>
          <li className="list-group-item">
            Interest (Base) Rate: See Model Input: Real-World Interest Rates from resource.
          </li>
        </ul>

        <p className="fw-semibold mt-4">
          Model Run Charts
        </p>

        <p>
          The rolling average <a className="icon-link" href="https://www.data-reports.net/giltedged-info/bills-velocity-rolling-average.html" target="_blank">velocity <i className="bi bi-box-arrow-up-right mb-2"></i></a> of Government bills issued.
        </p>

        <hr className="bg-secondary mt-3 mb-4 col-md-3" />

        <p className='mb-4'>
          Back to <Link to="/gilt-edged-mini#nav-bar">GEM</Link>.
        </p>

      </div>
    </>
  )
}

export default StaticPerspective
