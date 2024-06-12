function App() {
    return (
      <>
        <nav className="navbar navbar-light bg-dark p-3">
          <div className="d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between bg-dark">
            <a className="nav-link active" aria-current="page" href="#">
              <h2>Innover</h2>
            </a>
            <button
              className="navbar-toggler d-md-none collapsed mb-3"
              type="button"
              data-toggle="collapse"
              data-target="#sidebar"
              aria-controls="sidebar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="col-12 col-md-4 col-lg-2">
            <input className="search-query form-control" type="text" placeholder="Search" aria-label="Search" />
          </div>
          <div className="col-12 col-md-5 col-lg-8 d-flex align-items-center justify-content-md-end mt-3 mt-md-0 bg-dark">
            <div className="dropdown">
              <button
                className="btn text-muted"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                </svg>
                Shiraz Khan ⇣
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="#">View Profile</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
              <div className="position-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span className="ml-2">Home</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-currency-dollar" viewBox="0 0 16 16">
                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zM7.591 6.945c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zM9.182 8.817c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
                      </svg>
                      <span className="ml-2">Salary</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-inbox" viewBox="0 0 16 16">
                        <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z"/>
                      </svg>
                      <span className="ml-2">Inbox</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.39.451 2.693 1.197 3.79-.2.663-.53 1.58-1.002 2.682a.513.513 0 0 0 .681.684c.931-.372 1.856-.759 2.289-.975zM2.766 12.09l-.97.46c.24-.518.46-1.045.646-1.548l.36-.972-.625-.854A5.978 5.978 0 0 1 2 8c0-3.255 2.936-6 7-6s7 2.745 7 6-2.936 6-7 6c-.592 0-1.17-.064-1.728-.186a.5.5 0 0 0-.305.03c-.555.263-1.544.72-2.895 1.059.311-.661.578-1.324.798-1.962a.5.5 0 0 0-.068-.424l-.814-1.236z"/>
                      </svg>
                      <span className="ml-2">Chat</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-calendar-week" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm11 2a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 .5-.5zm-3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6zm-3-.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 .5-.5z"/>
                      </svg>
                      <span className="ml-2">Calendar</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <div className="row">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <div className="col-4">
                    <h1 className="h2">Dashboard</h1>
                  </div>
                </div>
              </div>
              <div class="row my-4">
                    <div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <div class="card text-white bg-primary h-100">
                            <button class="card-header fw-bold">ATTENDANCE</button>
                            <div class="card-body">
                  
                              <p class="card-text">click here to redirect to marking ur presence</p>
                            </div>
                          </div>
                    </div>
                    <div class="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
                        <div class="card text-white bg-danger h-100">
                            <button class="card-header fw-bold">HR HELPDESK</button>
                            <div class="card-body">
                              <p class="card-text">Need assistance from HR then click here</p>
                            </div>
                          </div>
                    </div>
                    <div class="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
                        <div class="card text-white bg-warning h-100">
                            <button class="card-header fw-bold">TICKETS</button>
                            <div class="card-body">
                              <p class="card-text">If you have any technical difficulties with the device click here to raise a ticket</p>
                            </div>
                          </div>
                    </div>
                </div>
              <div className="table-responsive">
                <table className="table table-striped table-sm table-hover">
                  <thead>
                  <tr>
                  <th>Sl. no </th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                 </tr>
                  </thead>
                  <tbody>
                  <tr>
                                          <td>1</td>
                                          <td>Mohammed Shiraz Khan</td>
                                          <td>Associate developer</td>
                                          <td>Innover</td>
                                          <td>21</td>
                                          <td>2024/05/08</td>
                                          
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>Mohammed </td>
                                        <td>Associate developer</td>
                                        <td>Innover India</td>
                                        <td>25</td>
                                        <td>2024/05/10</td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>John </td>
                                        <td>Software engineer</td>
                                        <td>Innover USA</td>
                                        <td>23</td>
                                        <td>2023/05/10</td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td>Aamir </td>
                                        <td>Associate developer</td>
                                        <td>Innover</td>
                                        <td>30</td>
                                        <td>2024/05/10</td>
                                      </tr>
                                      <tr>
                                        <td>5</td>
                                        <td>Sanath</td>
                                        <td>Associate engineer</td>
                                        <td>Innover India</td>
                                        <td>33</td>
                                        <td>2022/03/12</td>
                                      </tr>
                                      <tr>
                                        <td>6</td>
                                        <td>David</td>
                                        <td>Marketing head</td>
                                        <td>Innover canada</td>
                                        <td>45</td>
                                        <td>2021/07/12</td>
                                      </tr>
                                      <tr>
                                        <td>7</td>
                                        <td>Adam</td>
                                        <td>Senior engineer</td>
                                        <td>Innover India</td>
                                        <td>28</td>
                                        <td>2023/08/12</td>
                                      </tr>
                                      <tr>
                                        <td>8</td>
                                        <td>Amit Deshmukh</td>
                                        <td>Lead Developer</td>
                                        <td>Innover- bangalore</td>
                                        <td>35</td>
                                        <td>2024/04/10</td>
                                      </tr>
                  </tbody>
                  <tfoot>
                                      <tr>
                                          <th> <code>LAST UPDATED 2024/06/12</code> </th>
                                      </tr>
                                  </tfoot>
                </table>
              </div>
              <footer class="pt-5 d-flex justify-content-between">
                    
                    <ul class="nav m-0">
                        <li class="nav-item">
                          <a class="nav-link text-secondary" aria-current="page" href="#">Privacy Policy</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-secondary" href="#">Terms and conditions</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-secondary" href="#">Contact</a>
                        </li>
                      </ul>
                </footer>
            </main>
          </div>
        </div>
      </>
    );
  }
  
  export default App;