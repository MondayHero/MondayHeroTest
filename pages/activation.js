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
            useremail: props.data,
            username: '',
            experienceOptionsState: '',
            roleOptionsState: '',
            privacyCheckbox: true,
            password: '',
            passwordAgain: '',
            isError: false,
            isSuccess: false
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
        this.setState({ username: event.target.value });
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
        event.preventDefault();
        this.userRegister(this.state.useremail, this.state.username, this.state.password, this.state.roleOptionsState, this.state.experienceOptionsState)
            .then(() => {
                console.log('done');
                this.setState({
                    isSuccess: true
                })
            })
            .catch((err) => {
                this.setState({
                    isErrorMessage: err.error.message,
                    isError: true
                })
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
                <h2><strong>Account Activation</strong></h2>
                <h4>for <strong>{this.state.useremail}</strong></h4>
                <br />

                {
                    this.state.isSuccess ?
                        'success'
                        :
                        <form onSubmit={this.handleSubmit}>
                            <div className="row gtr-uniform gtr-50">
                                <div className="col-12">
                                    <input type="text" onChange={this.usernameOnChange} value={this.state.username} placeholder="Username" />
                                </div>
                                <div className="col-12">
                                    <select value={this.state.roleOptionsState} onChange={this.roleOptionOnChange}>
                                        <option value="">- Which best describes your role? -</option>
                                        {
                                            this.props.rolesAndExp.roles.map(role => {
                                                return (
                                                    <option key={role.id} value={role.jobId}>{role.description}</option>)

                                            })

                                        }
                                       
                                    </select>
                                </div>
                                <div className="col-12">
                                    <select value={this.state.experienceOptionsState} onChange={this.experienceOptionOnChange} >
                                        <option value="">- How many years of experience do you have? -</option>
                                        {
                                            this.props.rolesAndExp.experience.map(experience => {
                                                return (
                                                    <option key={experience.id} value={experience.experienceId}>{experience.description}</option>)

                                            })

                                        }
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
                                {
                                    this.state.isError ? <div style={errorStyle}>{this.state.isErrorMessage}</div> : ''
                                }
                                <div className="col-12">
                                    <ul className="actions">
                                        <li><input type="submit" value="Set Password" /></li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                }
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
                rolesAndExp: response.data.rolesAndExp,
                isExpire: response.data.user.isRegister,
                userMail: response.data.user.email
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
                <div className="row">
                    <div className="col-12">
                        <section className="box">
                            {(!this.state.isExpire) ? <RegisterForm data={this.state.userMail} rolesAndExp={this.state.rolesAndExp} /> : <ErrorExpire />}
                        </section>
                    </div>
                </div>
            </Layout >
        )
    }
}

export default Activation;