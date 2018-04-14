import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';

class Contact extends Component {
    
	constructor(props){
		super(props);
		this.state = {
			isChecked: false
		}
	}

	onClick = (isChecked) => {
		this.setState({
			isChecked: isChecked
		})
	}

    render() {
        
        var isChecked = this.state.isChecked;
        
        return (
            <div>
                Day la trang lien he <br /> 
                <button type="button" className="btn btn-info" onClick={() => this.onClick(false)}>Cho phep</button><br />
                <button type="button" className="btn btn-danger" onClick={() => this.onClick(true)}>Khong Cho phep</button>
                <Prompt when={isChecked} message={location => (`Ban chac chan muon di den ${location.pathname}`)}/>
            </div>
        )

    }

}

export default Contact;
