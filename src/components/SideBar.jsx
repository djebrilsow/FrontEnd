import React from 'react'
import {Link} from 'react-router-dom'

const SideBar = () => {
  return (
    <div>
          {/* START PAGE SIDEBAR */}
    <div className="page-sidebar">
      {/* START X-NAVIGATION */}
      <ul className="x-navigation">
        <li className="xn-logo">
          <a href="index.html">Joli Admin</a>
          <a href="#" className="x-navigation-control" />
        </li>
        <li className="xn-profile">
          <a href="#" className="profile-mini">
            <img src="assets/images/users/avatar.jpg" alt="John Doe" />
          </a>
          <div className="profile">
            <div className="profile-image">
              <img src="assets/images/users/avatar.jpg" alt="John Doe" />
            </div>
            <div className="profile-data">
              <div className="profile-data-name">John Doe</div>
              <div className="profile-data-title">Web Developer/Designer</div>
            </div>
            <div className="profile-controls">
              <a href="pages-profile.html" className="profile-control-left"><span className="fa fa-info" /></a>
              <a href="pages-messages.html" className="profile-control-right"><span className="fa fa-envelope" /></a>
            </div>
          </div>                                                                        
        </li>
        <li className="xn-title">Navigation</li>
        <li className="active">
          <a href="index.html">
            <span className="fa fa-desktop" />
           <span className="xn-text">Dashboard</span>
           </a>                        
        </li>   
        {/*----- list Products-------- */}
        <li className="xn-title">
            <div class="dropdown">
              <button
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product
              </button>
              <ul>
                <li className="active dropdown-menu">
                  <Link to="" className="dropdown-item">
                    <span className="fa fa-plus-square" />{" "}
                    <span className="xn-text">Add Product</span>
                  </Link>
                </li>
                <li className="active dropdown-menu">
                  <Link to="" className="dropdown-item">
                    <span className="fa fa-file-text-o" />{" "}
                    <span className="xn-text">List Product</span>
                  </Link>
                </li>
              </ul>
            </div>
        </li>
        {/* List sub-categories */}
        <li className="xn-title">
            <div class="dropdown">
              <button
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SubCategories
              </button>
              <ul>
                <li className="active dropdown-menu">
                  <Link to="" className="dropdown-item">
                    <span className="fa fa-plus-square" />{" "}
                    <span className="xn-text">Add SubCategory</span>
                  </Link>
                </li>
                <li className="active dropdown-menu">
                  <Link to="" className="dropdown-item">
                    <span className="fa fa-file-text-o" />{" "}
                    <span className="xn-text">List SubCategory</span>
                  </Link>
                </li>
              </ul>
            </div>
        </li>
        {/* List Categories */}
        <li className="xn-title">
            <div class="dropdown">
              <button
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </button>
              <ul>
                <li className="active dropdown-menu">
                  <Link to="" className="dropdown-item">
                    <span className="fa fa-plus-square" />{" "}
                    <span className="xn-text">Add Categories</span>
                  </Link>
                </li>
                <li className="active dropdown-menu">
                  <Link to="/categories" className="dropdown-item">
                    <span className="fa fa-file-text-o" />{" "}
                    <span className="xn-text">List Categories</span>
                  </Link>
                </li>
              </ul>
            </div>
        </li>
        <li className="xn-openable">
          <a href="#"><span className="fa fa-file-text-o" /> <span className="xn-text">Layouts</span></a>
          <ul>
            <li><a href="layout-boxed.html">Boxed</a></li>
            <li><a href="layout-nav-toggled.html">Navigation Toggled</a></li>
            <li><a href="layout-nav-top.html">Navigation Top</a></li>
            <li><a href="layout-nav-right.html">Navigation Right</a></li>
            <li><a href="layout-nav-top-fixed.html">Top Navigation Fixed</a></li>                            
            <li><a href="layout-nav-custom.html">Custom Navigation</a></li>
            <li><a href="layout-frame-left.html">Frame Left Column</a></li>
            <li><a href="layout-frame-right.html">Frame Right Column</a></li>
            <li><a href="layout-search-left.html">Search Left Side</a></li>
            <li><a href="blank.html">Blank Page</a></li>
          </ul>
        </li>
        <li className="xn-title">Components</li>
        <li className="xn-openable">
          <a href="#"><span className="fa fa-cogs" /> <span className="xn-text">UI Kits</span></a>                        
          <ul>
            <li><a href="ui-widgets.html"><span className="fa fa-heart" /> Widgets</a></li>                            
            <li><a href="ui-elements.html"><span className="fa fa-cogs" /> Elements</a></li>
            <li><a href="ui-buttons.html"><span className="fa fa-square-o" /> Buttons</a></li>                            
            <li><a href="ui-panels.html"><span className="fa fa-pencil-square-o" /> Panels</a></li>
            <li><a href="ui-icons.html"><span className="fa fa-magic" /> Icons</a><div className="informer informer-warning">+679</div></li>
            <li><a href="ui-typography.html"><span className="fa fa-pencil" /> Typography</a></li>
            <li><a href="ui-portlet.html"><span className="fa fa-th" /> Portlet</a></li>
            <li><a href="ui-sliders.html"><span className="fa fa-arrows-h" /> Sliders</a></li>
            <li><a href="ui-alerts-popups.html"><span className="fa fa-warning" /> Alerts &amp; Popups</a></li>                            
            <li><a href="ui-lists.html"><span className="fa fa-list-ul" /> Lists</a></li>
            <li><a href="ui-tour.html"><span className="fa fa-random" /> Tour</a></li>
          </ul>
        </li>                    
        <li className="xn-openable">
          <a href="#"><span className="fa fa-pencil" /> <span className="xn-text">Forms</span></a>
          <ul>
            <li>
              <a href="form-layouts-two-column.html"><span className="fa fa-tasks" /> Form Layouts</a>
              <div className="informer informer-danger">New</div>
              <ul>
                <li><a href="form-layouts-one-column.html"><span className="fa fa-align-justify" /> One Column</a></li>
                <li><a href="form-layouts-two-column.html"><span className="fa fa-th-large" /> Two Column</a></li>
                <li><a href="form-layouts-tabbed.html"><span className="fa fa-table" /> Tabbed</a></li>
                <li><a href="form-layouts-separated.html"><span className="fa fa-th-list" /> Separated Rows</a></li>
              </ul> 
            </li>
            <li><a href="form-elements.html"><span className="fa fa-file-text-o" /> Elements</a></li>
            <li><a href="form-validation.html"><span className="fa fa-list-alt" /> Validation</a></li>
            <li><a href="form-wizards.html"><span className="fa fa-arrow-right" /> Wizards</a></li>
            <li><a href="form-editors.html"><span className="fa fa-text-width" /> WYSIWYG Editors</a></li>
            <li><a href="form-file-handling.html"><span className="fa fa-floppy-o" /> File Handling</a></li>
          </ul>
        </li>
        <li className="xn-openable">
          <a href="tables.html"><span className="fa fa-table" /> <span className="xn-text">Tables</span></a>
          <ul>                            
            <li><a href="table-basic.html"><span className="fa fa-align-justify" /> Basic</a></li>
            <li><a href="table-datatables.html"><span className="fa fa-sort-alpha-desc" /> Data Tables</a></li>
            <li><a href="table-export.html"><span className="fa fa-download" /> Export Tables</a></li>                            
          </ul>
        </li>
        <li className="xn-openable">
          <a href="#"><span className="fa fa-bar-chart-o" /> <span className="xn-text">Charts</span></a>
          <ul>
            <li><a href="charts-morris.html"><span className="xn-text">Morris</span></a></li>
            <li><a href="charts-nvd3.html"><span className="xn-text">NVD3</span></a></li>
            <li><a href="charts-rickshaw.html"><span className="xn-text">Rickshaw</span></a></li>
            <li><a href="charts-other.html"><span className="xn-text">Other</span></a></li>
          </ul>
        </li>                    
        <li>
          <a href="maps.html"><span className="fa fa-map-marker" /> <span className="xn-text">Maps</span></a>
        </li>                    
        <li className="xn-openable">
          <a href="#"><span className="fa fa-sitemap" /> <span className="xn-text">Navigation Levels</span></a>
          <ul>                            
            <li className="xn-openable">
              <a href="#">Second Level</a>
              <ul>
                <li className="xn-openable">
                  <a href="#">Third Level</a>
                  <ul>
                    <li className="xn-openable">
                      <a href="#">Fourth Level</a>
                      <ul>
                        <li><a href="#">Fifth Level</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>                            
          </ul>
        </li>
      </ul>
      {/* END X-NAVIGATION */}
    </div>
    {/* END PAGE SIDEBAR */}
    </div>
  )
}

export default SideBar
