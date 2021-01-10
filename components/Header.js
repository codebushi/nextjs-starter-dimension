import PropTypes from 'prop-types';
import { FaCode } from "react-icons/fa";

const People={
    'header':'Some People',
    'p':<a href='https://www.freecodecamp.org/news/how-i-changed-careers-and-landed-a-job-as-a-developer-in-six-months-d5cc5f7c19f6/'>Land a job as a developer in 6 months going from knowing only rudimentary things</a>
}
const Abe={
    'header':'Abe',
    'p':'has been studying for 3 years... has yet to be interviewed'
}
const Header = (props) => (

    <header id="header" style={props.timeout ? { display: 'none' } : {}}> 
        <div id="" onClick={()=>props.isDrawing()} className="logo glowButton">
            {/*<span className="icon fa-diamond"></span>*/}
            <div>
            <div className="text-wrap">
            <span style={{transform:'rotate(-35deg)'}}>P</span>            
            <span style={{transform:'rotate(-12deg)'}}>u</span>
            <span style={{transform:'rotate(12deg)'}}>s</span>
            <span style={{transform:'rotate(35deg)'}}>h</span>       
            </div>

            <FaCode id="codeButton" style={props.draw? {transform: 'rotateX(3.142rad)'}:{}} />
            </div>
 
        </div>
        <div className="content">
            <div className="inner">
                <h1>{!props.draw?People['header']:Abe['header']}</h1>
                {/* {props.draw?(<p>"People <a href="https://www.freecodecamp.org/news/how-i-changed-careers-and-landed-a-job-as-a-developer-in-six-months-d5cc5f7c19f6/">Land a job as a developer in 6 months</a>
                from knowing only rudimentary things about JavaScript and CSS to landing a job as a front-end developer 
              </p>):"H"} */}
                <p>{!props.draw?People['p']:Abe['p']}</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#" onClick={() => { props.onOpenArticle('intro') }}>Intro</a></li>
                <li><a href="#" onClick={() => { props.onOpenArticle('work') }}>Work</a></li>
                <li><a href="#" onClick={() => { props.onOpenArticle('about') }}>About</a></li>
                <li><a href="#" onClick={() => { props.onOpenArticle('contact') }}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
