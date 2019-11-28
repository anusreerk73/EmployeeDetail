import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import styles from './styles.css';
class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      fields: {},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   }
handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
 }
handleSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["username"] = "";
        fields["password"] = "";
        this.setState({fields:fields});
    }
    const { username, password ,fields} = this.state;
    if ((fields["username"] ==='hruday@gmail.com' && fields["password"] === 'hruday123')) {
        this.props.handleSuccessfulAuth()
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Required";
    }
   
    if (typeof fields["username"] !== "undefined") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["username"])) {
        formIsValid = false;
        errors["username"] = "*Invalid username.";
      }
    }
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Required";
      
    }
    if ((fields["username"] !== fields["hruday@gmail.com"])  && (fields["password"] !== fields["hruday123"])) {
      formIsValid = false;
      errors["password"] = "*Invalid login credentials.Please check username or password.";
    }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }


  render() {
      return (
        <div className='login container-fluid' >
          <div id="login" className='login-section'>
            <h2 className='font-clr'>Login Your Account</h2>
            <form method="post"  name="userRegistrationForm"  onSubmit= {this.handleSubmit} >
              <div className='font-clr'>User name</div>
              <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange}  />
              <div className="errorMsg">{this.state.errors.username}</div>
              <div className='pt-3 font-clr'>Password</div>
              <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.password}</div>
            <button className='m-4 font-clr login-Btn' >Login</button>
            </form>
          </div>
        </div>
      );
    }
  }
export default Login;

