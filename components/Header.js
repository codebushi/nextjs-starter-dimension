import PropTypes from 'prop-types';
import React from "react";

const Header = (props) => (
		<header id="header" style={props.timeout ? {display: 'none'} : {}}>
			<div className="logo">
				{/*<span className="icon fa-diamond"></span>*/}
				{/*<FontAwesomeIcon icon={faGem} transform="grow-18"/>*/}
				<img src={'static/images/avatar.jpg'} className={'logo'}/>
			</div>
			<div className="content">
				<div className="inner">
					<h1>Rasheed Rahman</h1>
					<p>I'm a software developer passionate about evolving technologies and its everyday impact on humanity.<br/>
						I design, develop, deploy and maintain <a href="/work">SOFTWARE SOLUTIONS</a> <br/>
						and I'm only just evolving!</p>
				</div>
			</div>
			<nav>
				<ul>
					<li><a href="javascript:" onClick={() => {
						props.onOpenArticle('hire_me')
					}}>Hire Me</a></li>
					<li><a href="javascript:" onClick={() => {
						props.onOpenArticle('work')
					}}>Work</a></li>
					<li><a href="javascript:" onClick={() => {
						props.onOpenArticle('about')
					}}>About</a></li>
					<li><a href="javascript:" onClick={() => {
						props.onOpenArticle('contact')
					}}>Contact</a></li>
					<li><a href="javascript:" onClick={() => {
						props.onOpenArticle('interests')
					}}>Interests</a></li>
				</ul>
			</nav>
		</header>
);

Header.propTypes = {
	onOpenArticle: PropTypes.func,
	timeout: PropTypes.bool
};

export default Header
