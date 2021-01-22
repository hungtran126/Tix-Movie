import TitleAdmin from 'components/TitleAdmin'
import React from 'react'
import { Link } from 'react-router-dom'

function DashboardPage(props) {
    return (
        <>
            <div className="header bg-primary pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center py-4">
                            <div className="col-lg-8 col-8">
                                <h6 className="h2 text-white d-inline-block mb-0">
                                    <TitleAdmin />
                                </h6>
                                <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                                    <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                        <li className="breadcrumb-item"><Link to="/admin"><i className="fas fa-home" /></Link></li>
                                        <li className="breadcrumb-item">
                                            <Link to="#">
                                                <TitleAdmin />
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Default</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-lg-4 col-4 text-right">
                                <a href="#" className="btn btn-sm btn-neutral">Tạo mới</a>
                                <a href="#" className="btn btn-sm btn-neutral">Filters</a>
                            </div>
                        </div>
                        {/* Card stats */}
                    </div>
                </div>
            </div>
            <div className="container-fluid mt--6">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="card bg-default">
                            <div className="card-header bg-transparent">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="text-light text-uppercase ls-1 mb-1">Overview</h6>
                                        <h5 className="h3 text-white mb-0">Sales value</h5>
                                    </div>
                                    <div className="col">
                                        <ul className="nav nav-pills justify-content-end">
                                            <li className="nav-item mr-2 mr-md-0" data-toggle="chart" data-target="#chart-sales-dark" data-update="{&quot;data&quot;:{&quot;datasets&quot;:[{&quot;data&quot;:[0, 20, 10, 30, 15, 40, 20, 60, 60]}]}}" data-prefix="$" data-suffix="k">
                                                <a href="#" className="nav-link py-2 px-3 active" data-toggle="tab">
                                                    <span className="d-none d-md-block">Month</span>
                                                    <span className="d-md-none">M</span>
                                                </a>
                                            </li>
                                            <li className="nav-item" data-toggle="chart" data-target="#chart-sales-dark" data-update="{&quot;data&quot;:{&quot;datasets&quot;:[{&quot;data&quot;:[0, 20, 5, 25, 10, 30, 15, 40, 40]}]}}" data-prefix="$" data-suffix="k">
                                                <a href="#" className="nav-link py-2 px-3" data-toggle="tab">
                                                    <span className="d-none d-md-block">Week</span>
                                                    <span className="d-md-none">W</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="chart">
                                    <canvas id="chart-sales-dark" className="chart-canvas" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-header bg-transparent">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                                        <h5 className="h3 mb-0">Total orders</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="chart">
                                    <canvas id="chart-bars" className="chart-canvas" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-8">
                        <div className="card">
                            <div className="card-header border-0">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Page visits</h3>
                                    </div>
                                    <div className="col text-right">
                                        <a href="#!" className="btn btn-sm btn-primary">See all</a>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table align-items-center table-flush">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Page name</th>
                                            <th scope="col">Visitors</th>
                                            <th scope="col">Unique users</th>
                                            <th scope="col">Bounce rate</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                /argon/
                                            </th>
                                            <td>
                                                4,569
                                            </td>
                                            <td>
                                                340
                                            </td>
                                            <td>
                                                <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                /argon/index.html
                                            </th>
                                            <td>
                                                3,985
                                            </td>
                                            <td>
                                                319
                                            </td>
                                            <td>
                                                <i className="fas fa-arrow-down text-warning mr-3" /> 46,53%
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                /argon/charts.html
                                            </th>
                                            <td>
                                                3,513
                                            </td>
                                            <td>
                                                294
                                            </td>
                                            <td>
                                                <i className="fas fa-arrow-down text-warning mr-3" /> 36,49%
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                /argon/tables.html
                                            </th>
                                            <td>
                                                2,050
                                            </td>
                                            <td>
                                                147
                                            </td>
                                            <td>
                                                <i className="fas fa-arrow-up text-success mr-3" /> 50,87%
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                /argon/profile.html
                                            </th>
                                            <td>
                                                1,795
                                            </td>
                                            <td>
                                                190
                                            </td>
                                            <td>
                                                <i className="fas fa-arrow-down text-danger mr-3" /> 46,53%
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-header border-0">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Social traffic</h3>
                                    </div>
                                    <div className="col text-right">
                                        <a href="#!" className="btn btn-sm btn-primary">See all</a>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table align-items-center table-flush">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Referral</th>
                                            <th scope="col">Visitors</th>
                                            <th scope="col" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                Facebook
                                            </th>
                                            <td>
                                                1,480
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">60%</span>
                                                    <div>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-gradient-danger" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '60%' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                Facebook
                                            </th>
                                            <td>
                                                5,480
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">70%</span>
                                                    <div>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '70%' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                Google
                                            </th>
                                            <td>
                                                4,807
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">80%</span>
                                                    <div>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-gradient-primary" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                Instagram
                                            </th>
                                            <td>
                                                3,678
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">75%</span>
                                                    <div>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-gradient-info" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{ width: '75%' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                twitter
                                            </th>
                                            <td>
                                                2,645
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">30%</span>
                                                    <div>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-gradient-warning" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} style={{ width: '30%' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardPage;
