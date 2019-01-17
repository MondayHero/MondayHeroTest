import React from 'react'
import { initGA, logPageView } from './utils/analytics'

export default class Layout extends React.Component {

    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }
        logPageView()
    }

    render() {
        return (
            <div className="landing">
                <div id="page-wrapper">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
