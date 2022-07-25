import MainMenu from './MainMenu'; 
import BannerArea from './BannerArea'; 
const Header = () =>{
    return(
        <header className="top-area" id="home">
            <div className="header-top-area" id="scroolup">
                <MainMenu />
            </div>

            <BannerArea />
             
        </header>
            
    )
}

export default Header;