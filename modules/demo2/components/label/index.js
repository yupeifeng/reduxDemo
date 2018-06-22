import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'antd';

/**
 * demo2Input
 */

const mapStateToProps = (state, ownProps) => {
	return {
		demo2Label: state.demo2Label
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
};

class demo2Label extends React.Component {
	render() {
		console.log('demo2Label');
		return <div>{this.props.demo2Label.demo2Label}</div>;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(demo2Label));
