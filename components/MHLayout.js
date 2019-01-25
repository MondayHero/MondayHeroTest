import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import BoxSpecial from '../components/Box-special'
import Cta from '../components/cta'

import classNames from 'classnames';

import { initGA, logPageView } from './utils/analytics'

export default class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isPreloads: true,
            isSinglePage: props.isSinglePage ? true : false,
            isBanner: props.isBanner ? true : false,
            BoxSpecial: props.BoxSpecial ? true : false,
            Cta: props.Cta ? true : false
        }
    }

    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }
        logPageView()
        this.setState({
            isPreloads: false

        })
    }

    render() {
        var mainStyle = {
            marginTop: this.state.isSinglePage ? '4em' : '-18em'
        };

        var landing = classNames({
            'landing': true,
            'is-preloads': this.state.isPreloads
        });
        var isAlt = !this.state.isSinglePage
        var isReveal = this.state.isSinglePage

        
        return (
            <div className={landing}>
                <div id="page-wrapper">
                    <Header isAlt={isAlt} isReveal={isReveal} />
                    {this.state.isBanner ? <Banner /> : ''}
                    <section id="main" className="container" style={mainStyle} >
                        {this.props.children}
                    </section >
                    {this.state.BoxSpecial ? <BoxSpecial /> : ''}
                    {this.state.Cta ? <Cta /> : ''}
                    <Footer name={this.props.name} />
                </div>
            </div>
        )
    }
}
