import Layout from '../components/MHLayout'
// import { withRouter } from 'next/router'
import config from '../config.json'
import { throws } from 'assert';

const ErrorApi = function (params) {
    return {
        error: params
    }
}

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: props.data,
            experienceOptionsState: '',
            roleOptionsState: '',
            privacyCheckbox: true,
            password: '',
            passwordAgain: ''
        }
        this.usernameOnChange = this.usernameOnChange.bind(this);
        this.passwordOnChange = this.passwordOnChange.bind(this);
        this.passwordAgainOnChange = this.passwordAgainOnChange.bind(this);
        this.experienceOptionOnChange = this.experienceOptionOnChange.bind(this);
        this.roleOptionOnChange = this.roleOptionOnChange.bind(this);
        this.privacyInputChange = this.privacyInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    usernameOnChange(event) {
        // this.setState({ username: event.target.value });
    }

    passwordOnChange(event) {
        this.setState({ password: event.target.value });
    }

    passwordAgainOnChange(event) {
        this.setState({ passwordAgain: event.target.value });
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
        var userName = this.state.username.split('@')[0];
        this.userRegister(this.state.username, userName, this.state.password, this.state.roleOptionsState, this.state.experienceOptionsState)
            .then(() => {
                console.log('done');
            })
            .catch((err) => {
                console.log('err', err.error.message);
            })
    }

    async userRegister(emailParam, usernameParam, passParam, role, experience) {
        const res = await fetch(`${config.apiUrl}/user/register`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'xheroUserName': usernameParam,
                'xheroname': emailParam,
                'xheropass': passParam,
                'experience': experience,
                'role': role
            })
        });

        if (res.ok) {
            const json = await res.json();
            return json;
        } else {
            const json = await res.json();
            throw new ErrorApi(json.errorModel)
        }

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
                            <input onChange={this.passwordOnChange} value={this.state.password} type="password" placeholder="Password" />
                        </div>
                        <div className="col-12">
                            <input type="password" value={this.state.passwordAgain} onChange={this.passwordAgainOnChange} placeholder="Password Again" />
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

    constructor(props) {
        super(props);
        console.log(props.url.query.token);
        
        this.state = {
            isExpire: true,
            userMail: ''
        }
        this.fetchUser(props.url.query.token || '').then(response => {
            this.setState({
                isExpire: response.user.isRegister,
                userMail: response.user.email
            })
        }).catch((err) => {
            console.log(err);
            this.setState({
                isExpire: true,
                userMail: ''
            })
        })
    }

    async fetchUser(token) {
        const res = await fetch(`${config.apiUrl}/beta/getUser?token=${token}`);
        const json = await res.json();
        return json;
    }

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
                            {(!this.state.isExpire) ? <RegisterForm data={this.state.userMail} /> : <ErrorExpire />}
                        </section>
                    </div>
                </div>
            </Layout >
        )
    }
}

export default Activation;