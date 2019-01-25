const Footer = (props) => (
    <footer id="footer">
        <ul className="icons">
            <li><a href="https://www.linkedin.com/company/mondayhero" target="_blank" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
            <li><a href="https://twitter.com/gomondayhero" target="_blank" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/gomondayhero" target="_blank" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://instagram.com/gomondayhero" target="_blank" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
        </ul>
        <ul className="copyright">
            <li>&copy;
        {props.name ? props.name: 'MondayHero'}. All rights reserved.</li>
        </ul>
    </footer>
)

export default Footer;