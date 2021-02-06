import PropTypes from 'prop-types';

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Next.js Starter - Forked from: <a href="https://github.com/codebushi/nextjs-starter-dimension">codebushi</a>. Project <a href="https://github.com/KravMaguy/nextjs-starter-dimension">Repository</a> Built with: <a href="https://github.com/zeit/next.js">Next.js</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
