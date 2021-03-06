import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;

			case false:
				return(
					<li><a href="/auth/google">Login with Google</a></li>
				);

			default:
				return(
					<li><a href="/api/logout">Logout</a></li>
				);
		}
	}
	render() {	
		return(
			<div>
				<nav>
					<div className="nav-wrapper">
						<a href="/" className="left brand-logo">Emaily</a>
						<ul className="right hide-on-med-and-down">
							{this.renderContent()}
						</ul>
					</div>
				</nav>
			</div>
		);
	}
};

function mapStateToProps({ auth }) {
	return {auth};
}

export default connect(mapStateToProps)(Header);