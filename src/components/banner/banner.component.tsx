import './banner.styles.scss';

function Banner(){

    return(
        <div className="banner">
            <div className="banner__feed">
                <img alt="" src={require("../../miscellaneous/banner images/banner1.jpg")} 
                className="banner__feed__item"/>
                <img alt="" src={require("../../miscellaneous/banner images/banner2.jpg")} 
                className="banner__feed__item"/>
                <img alt="" src={require("../../miscellaneous/banner images/banner3.png")} 
                className="banner__feed__item"/>
                <img alt="" src={require("../../miscellaneous/banner images/banner4.png")} 
                className="banner__feed__item"/>
            </div>
        </div>
    )
}

export default Banner;
