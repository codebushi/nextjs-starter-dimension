import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import React from "react";

class Main extends React.Component {
	render() {

		let close = <div className="close" onClick={() => {
			this.props.onCloseArticle()
		}}/>;

		return (
				<div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

					<article id="hire_me" className={`${this.props.article === 'hire_me' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display: 'none'}}>
						<h2 className="major">Hire Me</h2>
						<span className="image main"><img src="/static/images/pic01.jpg" alt=""/></span>
						<p>I'm an aspiring Full Stack Developer with love for Backend Development. I enjoy writing APIs and love following Best Practices.
							By the way, check out my <a href="#work">awesome work</a>.
						</p>
						<p>I enjoy working with a team of diverse culture and intellectuals. I also enjoy any offer that invloves travelling. A shift in workspace is essential 😊</p>

						{close}
					</article>

					<article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display: 'none'}}>
						<h2 className="major">Work</h2>
						<span className="image main"><img src="/static/images/pic02.jpg" alt=""/></span>
						<p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et
							vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
						<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In
							efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
							libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
						{close}
					</article>

					<article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display: 'none'}}>
						<h2 className="major">About</h2>
						<span className="image main"><img src="/static/images/pic03.jpg" alt=""/></span>
						<p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna
							nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in
							faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
						{close}
					</article>

					<article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display: 'none'}}>
						<h2 className="major">Contact</h2>
						<form method="post" action="#">
							<div className="field half first">
								<label htmlFor="name">Name</label>
								<input type="text" name="name" id="name"/>
							</div>
							<div className="field half">
								<label htmlFor="email">Email</label>
								<input type="text" name="email" id="email"/>
							</div>
							<div className="field">
								<label htmlFor="message">Message</label>
								<textarea name="message" id="message" rows="4"/>
							</div>
							<ul className="actions">
								<li><input type="submit" value="Send Message" className="special"/></li>
								<li><input type="reset" value="Reset"/></li>
							</ul>
						</form>
						<ul className="icons">
							<li><a href="https://twitter.com/radiumrasheed">
								<FontAwesomeIcon icon={faTwitter}/>
							</a></li>
							<li><a href="https://instagram.com/radiumrasheed">
								<FontAwesomeIcon icon={faInstagram}/>
							</a></li>
							<li><a href="https://github.com/ra1da35ma">
								<FontAwesomeIcon icon={faGithub}/>
							</a></li>
						</ul>
						{close}
					</article>

					<article id="interest" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
					         style={{display: 'none'}}>

					</article>

				</div>
		)
	}
}

Main.propTypes = {
	route: PropTypes.object,
	article: PropTypes.string,
	articleTimeout: PropTypes.bool,
	onCloseArticle: PropTypes.func,
	timeout: PropTypes.bool
};

export default Main