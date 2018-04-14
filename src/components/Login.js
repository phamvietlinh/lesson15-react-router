import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    
	constructor(props){
		super(props);
		this.state = {
			txtUsername: '',
			txtPassword: ''
		}
	}

	onChange = (event) => {
		var target = event.target;
		var name = target.name;
		var value = target.type === 'checkbox'? target.checked: target.value;
		this.setState({
			[name]: value 
		})
	}

	onLogin = (event) => {
		event.preventDefault();
		var txtUsername = this.state.txtUsername;
		var txtPassword = this.state.txtPassword;
		if(txtUsername === 'admin' && txtPassword === 'admin'){
			localStorage.setItem('user', JSON.stringify({
				username: txtUsername,
				password: txtPassword
			}))
		}
	}

    render() {
        
    	var txtUsername = this.state.txtUsername;
    	var txtPassword = this.state.txtPassword;
    	var loggedInUser = localStorage.getItem('user');
    	if(loggedInUser !== null){
    		var location = this.props.location;
    		return <Redirect to={{
    			pathname: '/products',
    			state: {
    				from: location
    			}
    		}} />
    	}

        // console.log(this.props.location)
        return (
            <div className="row">
            	<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            		<form onSubmit={this.onLogin}>
            			<legend>Dang nhap</legend>
            		
            			<div className="form-group">
            				<label>Username: </label>
            				<input type="text" 
            						className="form-control" 
            						name="txtUsername" 
            						value={txtUsername} 
            						onChange={this.onChange}/>
            			</div>

            			<div className="form-group">
            				<label>Password: </label>
            				<input type="password" 
            						className="form-control" 
            						name="txtPassword" 
            						value={txtPassword} 
            						onChange={this.onChange} />
            			</div>
            		
            			
            		
            			<button type="submit" className="btn btn-primary">Dang nhap</button>
            		</form>
            	</div>
            </div>
        );
    }
}

export default Login;
