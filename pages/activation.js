import Layout from '../components/MHLayout'
import { withRouter } from 'next/router'

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            experienceOptionsState: '',
            roleOptionsState: '',
            privacyCheckbox: true
        }
        this.usernameOnChange = this.usernameOnChange.bind(this);
        this.experienceOptionOnChange = this.experienceOptionOnChange.bind(this);
        this.roleOptionOnChange = this.roleOptionOnChange.bind(this);
        this.privacyInputChange = this.privacyInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    usernameOnChange(event) {
        this.setState({ username: event.target.value });
    }

    experienceOptionOnChange(event) {
        this.setState({ experienceOptionsState: event.target.value });
    }

    roleOptionOnChange(event) {
        this.setState({ roleOptionsState: event.target.value });
    }

    privacyInputChange(event) {
        this.setState({ privacyCheckbox: event.target.checked });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.username + 'Exp: ' + this.state.experienceOptionsState + 'Role: ' + this.state.roleOptionsState);
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <div className="row gtr-uniform gtr-50">
                        <div className="col-12">
                            <input type="text" onChange={this.usernameOnChange} value={this.state.username} placeholder="Username || Email" />
                        </div>
                        <div className="col-12">
                            <select value={this.state.roleOptionsState} onChange={this.roleOptionOnChange}>
                                <option value="">- Which best describes your role? -</option>
                                <option value="1">Android Developer</option>
                                <option value="2">iOS Developer</option>
                                <option value="3">Full-Stack Developer</option>
                                <option value="4">Backend Developer</option>
                                <option value="5"> Web Developer</option>
                                <option value="6"> Designer</option>
                                <option value="7"> IT Manager</option>
                                <option value="8"> Product Manager</option>
                                <option value="9"> Other</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <select value={this.state.experienceOptionsState} onChange={this.experienceOptionOnChange} >
                                <option value="">- How many years of experience do you have? -</option>
                                <option value="1">I’m a student</option>
                                <option value="2">1 year</option>
                                <option value="3">1-2 years</option>
                                <option value="4">2-4 years</option>
                                <option value="5">4-6 years</option>
                                <option value="6">6-10 years</option>
                                <option value="7">10+ years</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="col-12">
                            <input type="password" placeholder="Password Again" />
                        </div>
                        <div className="col-12">
                            <input key='privacyCeck' type="checkbox" checked={this.state.privacyCheckbox} onChange={this.privacyInputChange} />
                            <label>
                                I have read and agree with the terms and Privacy Policy
                            </label>
                        </div>
                        <div className="col-12">
                            <ul className="actions">
                                <li><input type="submit" value="Set Password" /></li>
                            </ul>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

const errorStyle = {
    color: 'red'
}
class ErrorExpire extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1 style={errorStyle}>
                    Expire
                </h1>
            </React.Fragment>
        );
    }
}

class Activation extends React.Component {
    render() {
        return (
            <Layout isSinglePage >
                <header>
                    <h2>Activation</h2>
                    <p>Just an assorted selection of elements.</p>
                </header>
                <div className="row">
                    <div className="col-12">
                        <section className="box">
                            {this.props.router.query.hello == 'erol' ? <RegisterForm /> : <ErrorExpire />}
                        </section>
                    </div>
                </div>
            </Layout >
        )
    }
}

export default withRouter(Activation);