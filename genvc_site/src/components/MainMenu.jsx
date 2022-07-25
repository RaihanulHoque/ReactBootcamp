import StickyLogo from './../assets/images/sticky_logo.png';

const MainMenu = () =>{
    return(
        <>
            <div className="mainmenu-area" id="mainmenu-area">
                <div className="mainmenu-area-bg"></div>
                <nav className="navbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 flex-v-center">
                                <div className="navbar-header">
                                    <a href="index.html" className="custom-logo-link default-logo"><img src={StickyLogo} alt="logo" /></a>
                                    <a href="index.html" className="custom-logo-link sticky-logo"><img src={StickyLogo} alt="logo" /></a>
                                </div>
                                <svg className="ham hamRotate ham8" viewBox="0 0 100 100" width="50">
                                    <path className="line top" d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
                                    <path className="line middle" d="m 30,50 h 40" />
                                    <path className="line bottom" d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
                                </svg>
                                <div id="main-nav" className="stellarnav">                                    
                                    <ul id="nav" className="nav navbar-nav pull-right">
                                        <li className="active"><a href="index.html">Home</a>
                                            <ul>
                                                <li><a href="index.html">Home V1</a></li>
                                                <li><a href="index-2.html">Home V2</a></li>
                                                <li className="active"><a href="index-3.html">Home V3</a></li>
                                                <li><a href="index-4.html">Home V4</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="#service">Service</a>
                                            <ul>
                                                <li><a href="single-service.html">Single Service</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#portfolio">Work</a>
                                            <ul>
                                                <li><a href="single-portfolio.html">Single Portfolio</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Pages</a>
                                            <ul>
                                                <li><a href="shop.html">Shop</a></li>
                                                <li><a href="single-shop.html">Single Shop</a></li>
                                                <li><a href="single-service.html">Single Service</a></li>
                                                <li><a href="single-portfolio.html">Single Portfolio</a></li>
                                            </ul>
                                        </li>
                                        <li className="drop-left"><a href="#news">Blog</a>
                                            <ul>
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="single-blog.html">Single Post</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="header-call-to-action hidden-sm hidden-xs hidden-md">
                                    <a href="#" className="action-button">Get a quote</a>
                                    <button className="search-button"><i className="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default MainMenu;