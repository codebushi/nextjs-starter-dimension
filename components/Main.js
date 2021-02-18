import PropTypes from "prop-types";
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
// import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
// import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
// import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import {FiGithub, FiLink, FiFacebook} from "react-icons/fi"

import MailForm from "./MailForm";
class Main extends React.Component {
  render() {
    const {article, formCloser}=this.props
    const closeHandler=()=>{
      this.props.onCloseArticle();
      if(article==='contact'){
        console.log('the form was closed')
        formCloser()
      }
    }

    let close = (
      <div
        onKeyPress={(e)=>{
          if(e.key === 'Enter'){
            closeHandler()
          }
        }}
        tabIndex={0}
        className="close"
        onClick={() => {
          closeHandler() 
        }}
      ></div>
    );

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        <article
          id="intro"
          className={`${this.props.article === "intro" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Intro</h2>
          {/* <span className="image main">
            <img src="/static/images/pic01.jpg" alt="" />
          </span> */}
          <p>
            Abe is looking for a position with a software company where he will
            be able to contribute to the success of the company by utilizing his
            skills in javascript and web development. Ideally, the firm will
            offer future growth opportunities. He has 3-4 years of experience in the field of computer
            programming, digital marketing, and design. His skills include but
            are not limited to.
          </p>
          <p>Web and Application development:</p>
          <ul className="a">
            <li>Javascript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>WAMP Stack</li>
            <li>PHP, MySQL</li>
            <li>API integration</li>
            <li>Basic Git and Github</li>
            <li>Progressive Web App</li>
            <li>Geolocation</li>
            <li>Basic Workflow Automation</li>
          </ul>

          <p>Engineering Principles:</p>
          <ul className="a">
            <li>Stacks</li>
            <li>Queues</li>
            <li>Binary Trees</li>
            <li>Linked List</li>
            <li>JS runtime and Event Loop</li>
            <li>Closures</li>
            <li>This &#38; Object prototypes</li>
          </ul>

          <p>Digital Marketing:</p>
          <ul className="a">
            <li>SEO</li>
            <li>Paid Advertising (PPC Google and Bing Ads management)</li>
            <li>Blogging</li>
            <li>Search Engine Marketing</li>
            <li>Social Media</li>
          </ul>

          <p>Design:</p>
          <ul className="a">
            <li>Adobe Creative Cloud</li>
            <li>Logo Creation</li>
            <li>SVG</li>
            <li>CodePen Creative Animations</li>
          </ul>

          <p>
            {" "}
            {/* Some of his work is in private repositories but source code can be
            made available upon request. */}
          </p>

          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === "work" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src="/static/images/pic02.jpg" alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>

          <span className="image main">
            <img src="/static/images/pic02.jpg" alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>

          <span className="image main">
            <img src="/static/images/pic02.jpg" alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === "about" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">About</h2>
          <p>
            Abe enjoys studying foreign languages, travel, going to the gym, and martial arts, he currently resides in Chicago.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === "contact" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Contact</h2>
          <MailForm FormIsOpen={this.props.FormIsOpen}/>
          <ul className="icons">
            <li>
              <a href="#" className="social"> <FiFacebook /></a>
            </li>
            <li>
              <a href="#" className="social"> <FiLink/></a>
            </li>
            <li>
              <a href="#" className="social"><FiGithub /></a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Main;
