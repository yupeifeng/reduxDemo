import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input } from 'antd';
import { changeDUserCode, changeColumn } from '../../action';

/**
 * demo2Input
 */

const mapStateToProps = (state, ownProps) => {
	return {
		demo2Store: state.demo2Store
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		changeDUserCode: bindActionCreators(changeDUserCode, dispatch),
		changeColumn: bindActionCreators(changeColumn, dispatch)
	};
};

class demo2Input extends React.Component {
	render() {
		let that = this;
		console.log('demo2Input');
		return (
			<Input
				size="large"
				placeholder="请输入D编号D00222然后回车"
				value={that.props.demo2Store.dUserCode}
				onChange={e => that._handleChangeDUserCode(e, 'dUserCode')}
				onPressEnter={() => that._onPressEnter()}
			/>
		);
	}

	_handleChangeDUserCode(e, dUserCode) {
		console.log(`${dUserCode}: ${e.target.value}`);
		let that = this;
		let changeDUserCode = that.props.changeDUserCode;

		changeDUserCode(e.target.value);
	}

	_onPressEnter() {
		let that = this;
		let changeColumn = that.props.changeColumn;
		changeColumn(that.props.demo2Store.dUserCode);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(demo2Input);
