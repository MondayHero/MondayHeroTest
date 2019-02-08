import Link from 'next/link'
import Head from 'next/head'
import classNames from 'classnames';


const liStyle = {
    margin: 10
}

const Header = (props) => {
    var headerClass = classNames({
        'alt': props.isAlt ? true : false,
        'reveal': props.isReveal ? true : false
    })
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                <link rel="stylesheet" href="/static/assets/css/main.css" />
                <link rel="stylesheet" href="/static/stylesheets/icon/icomoon/style.css" />
                <link rel="apple-touch-icon" sizes="57x57" href="/static/fab/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/static/fab/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/static/fab/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/static/fab/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/static/fab/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/static/fab/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/static/fab/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/static/fab/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/static/fab/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/fab/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/static/fab/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/static/fab/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/static/fab/favicon-16x16.png" />
                <link rel="manifest" href="/static/fab/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/static/fab/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="stylesheet" href="/static/stylesheets/style.css" />

                <title>
                    MondayHero
            </title>

                <script src="static/assets/js/jquery.min.js"></script>
                <script src="static/assets/js/jquery.dropotron.min.js"></script>
                <script src="static/assets/js/jquery.scrollex.min.js"></script>
                <script src="static/assets/js/browser.min.js"></script>
                <script src="static/assets/js/breakpoints.min.js"></script>
                <script src="static/assets/js/util.js"></script>
                <script src="static/assets/js/main.js"></script>
                <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/5451485.js"></script>

            </Head>
            <header id="header" className={headerClass}>
                <div className="container">
                    <nav id="nav">
                        <ul>
                            <li style={liStyle}>
                                <Link href='/'>
                                    <a>
                                        <img src="/static/images/mondayhero_logo.png" height="30" alt="" />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}
export default Header;