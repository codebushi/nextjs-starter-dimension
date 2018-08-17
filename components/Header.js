import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'

const Header = (props) => (
		<header id="header" style={props.timeout ? {display: 'none'} : {}}>
			<div className="logo">
				{/*<span className="icon fa-diamond"></span>*/}
				<FontAwesomeIcon icon={faGem} transform="grow-18"/>
			</div>
			<div className="content">
				<div className="inner">
					<h1>Dimension</h1>
					<p>A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a> and released<br/>
						for free under the <a href="https://html5up.net/license">Creative Commons</a> license.</p>
				</div>
			</div>
			<nav>
				<ul>
					<li><a href="javascript:" onClick={() => {
						props.onOpenArticle('intro')
					}}>Intro</a></li>
					<li><a href="javascript:" onClick={() => {
						props.onOpenArticle('work')
					}}>Work</a></li>
					<li><a href="javascript:" onClick={() => {
						props.onOpenArticle('about')
					}}>About</a></li>
					<li><a href="javascript:" onClick={() => {
						props.onOpenArticle('contact')
					}}>Contact</a></li>
				</ul>
			</nav>
		</header>
);

Header.propTypes = {
	onOpenArticle: PropTypes.func,
	timeout: PropTypes.bool
};

export default Header
