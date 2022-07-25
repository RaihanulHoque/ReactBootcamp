import Layer1Img from './../assets/images/home/home_three_layer_1.png'
import Layer2Img from './../assets/images/home/home_three_layer_2.png'

const BannerArea = () =>{
    return(
        <>
         <div className="welcome-text-area font16">
            <div className="top-bg-layer-1 wow slideInLeft" data-wow-delay="1s" data-wow-duration="1s"></div>
            <div className="top-bg-layer-2 wow slideInRight" data-wow-delay="1s" data-wow-duration="1s"></div>
            <div className="welcome-area">
                <div className="container">
                    <div className="row flex-v-center">
                        <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12">
                            <div className="welcome-text">
                                <p className="top-subhidding wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.5s">Creative &amp; Digital agency</p>
                                <h1 className="wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1s"><span>We Are Making</span>Creative Product</h1>
                                <p className="wow fadeInUp" data-wow-delay="0.9s" data-wow-duration="1.5s">Someone want to play with digital products &amp; minimal interior designs.</p>
                                <div className="home-button mt40 xs-mt40 wow fadeInUp" data-wow-delay="1.2s" data-wow-duration="2s">
                                    <a href="#">Learn More <i className="fa fa-arrow-right"></i></a>
                                    <a className="video-button" href="#"><i className="fa fa-play"></i> How It Works?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="welcome-layer hidden-sm hidden-xs">
                        <div className="home-layer-1 wow zoomIn" data-wow-delay="0.5s" data-wow-duration="2s"><img src={Layer1Img} alt="Layer One" /></div>
                        <div className="home-layer-2 wow zoomIn" data-wow-delay="1s" data-wow-duration="1s"><img src={Layer2Img} alt="Layer 2" /></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BannerArea;