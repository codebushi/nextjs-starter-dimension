import PropTypes from 'prop-types';
import { FaCode } from "react-icons/fa";


const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div id="" onClick={()=>props.isDrawing()} className="logo glowButton">
            {/*<span className="icon fa-diamond"></span>*/}
            <FaCode id="codeButton" style={props.draw? {transform: 'rotate(190deg)'}:{}} />
        </div>
        <div className="content">
            <div className="inner">
                <h1>{props.draw?"Some People":"Abe"}</h1>
                <p>"Some People <a href="https://www.freecodecamp.org/news/how-i-changed-careers-and-landed-a-job-as-a-developer-in-six-months-d5cc5f7c19f6/">Land A job as a developer in 6 months</a> and released<br />
                for free under the <a href="https://html5up.net/license">Creative Commons</a> license."</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('intro') }}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('work') }}>Work</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('about') }}>About</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('contact') }}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
