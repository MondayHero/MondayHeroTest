import { Component } from "react";
import Pop from './utils/Pop'
import config from '../config.json'

const pStyle = {
    color: 'white'
}

class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isModalOpen: false
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    openModal() {
        this.setState({ isModalOpen: true })
    }

    closeModal() {
        this.setState({ isModalOpen: false })
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.email !== '') {
            this.addEmail(this.state.email).then((res) => {
                this.setState({
                    email: '',
                    isModalOpen: true
                })

            })

        }
    }

    handleChange(event) {
        this.setState({ email: event.target.value });
    }

    async addEmail(emailParam) {
        const res = await fetch(`${config.apiUrl}/beta/website`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'email': emailParam
            })
        });
        return res;
    }

    render() {
        return (
            <section id="banner">
                <section id="banner_inside">
                    <p style={pStyle} >Become part of the early adopter's family.<br />Sign up now.</p>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <div className="row gtr-50 gtr-uniform">
                                <div className="col-8 col-12-mobilep">
                                    <input type="email" value={this.state.email} onChange={this.handleChange} placeholder="Email Address" />
                                </div>
                                <div className="col-4 col-12-mobilep">
                                    <input type="submit" value="Sign Up" className="fit" />
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
                <Pop isModalOpen={this.state.isModalOpen} closeModal={this.closeModal} />
            </section>
        )
    }
}

export default Banner

