import PropTypes from 'prop-types';
import { FaCode } from "react-icons/fa";

const People={
    'header':'Is a team of software developers, digital marketers and designers',
    'p': 'Hire us to build your web applications, devise your internet marketing plan, Manage your digital advertising, and craft custom buisness solutions using cutting edge technologies.'
}
const Abe={
    'header':'Abe',
    'p':'Has been developing software professionally for 4 years'
}
const handleKeyPress=(e, callback)=>{
    if(e.key === 'Enter'){
        callback()
    }
}
const Header = (props) => (

    <header id="header" style={props.timeout ? { display: 'none' } : {}}> 
        <div id="" onClick={()=>props.isDrawing()} className="logo glowButton" tabIndex={0} onKeyPress={handleKeyPress, props.isDrawing}>
            {/*<span className="icon fa-diamond"></span>*/}
            <div>
            <div className="text-wrap">
            <span style={{transform:'rotate(-35deg)'}}>P</span>            
            <span style={{transform:'rotate(-12deg)'}}>u</span>
            <span style={{transform:'rotate(12deg)'}}>s</span>
            <span style={{transform:'rotate(35deg)'}}>h</span>       
            </div>

            <FaCode id="codeButton" style={props.draw? {transform: 'rotateX(3.142rad)'}:{}}/>
            </div>
 
        </div>
        <div className="content">
            <div className="inner">
                <h1>Marketing, Design, Coding</h1>
                <h2>{!props.draw&&!props.isArticleVisible?People['header']:Abe['header']}</h2>
                <p>{!props.draw&&!props.isArticleVisible?People['p']:Abe['p']}</p>
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
