import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'antd';

/**
 * demo2Input
 */

const mapStateToProps = (state, ownProps) => {
	return {
		demo2Lable: state.demo2Lable
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
};

class demo2Lable extends React.Component {
	render() {
		console.log('demo2Lable');
		return <div>{this.props.demo2Lable.demo2Lable}</div>;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(demo2Lable));
