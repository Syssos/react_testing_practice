import React, { Component } from "react";
import logo from '../dababy.jpg';

class DaBabyBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			enabled: this.props.status
		};

		this.handleStatusChange = this.handleStatusChange.bind(this);
	}

	handleStatusChange() {
		this.setState(prevState => ({
			enabled: !prevState.enabled
		}));
	}

	render() {
		const isEnabled = this.state.enabled;
		let DaImg;
	    if (isEnabled) {
			DaImg = <img src={logo} alt="DaBabyImg" data-testid="da-img"/>;
		} else {
			DaImg = <img src={logo} alt="DaBabyImg" data-testid="da-img" hidden/>;
		}

		return (
			<div className="DaBabyBox" data-testid="da-baby-box">
				{DaImg}
				<button onClick={this.handleStatusChange} data-testid="btn-Toggle">
					Show DaBaby
				</button>
			</div>
		);
	}
}

export default DaBabyBox;