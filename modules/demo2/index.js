import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout, Breadcrumb, Input, Select } from 'antd';
import { changeDUserCode, changeColumn, changeState } from './action';

const { Option } = Select;
const { Content } = Layout;

/**
 * demo2
 */

const mapStateToProps = (state, ownProps) => {
	return {
		demo2Store: state.demo2Store
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		changeDUserCode: bindActionCreators(changeDUserCode, dispatch),
		changeColumn: bindActionCreators(changeColumn, dispatch),
		changeState: bindActionCreators(changeState, dispatch)
	};
};

class demo2 extends React.Component {
	render() {
		let that = this;

		return (
			<Layout style={{ padding: '0 24px 24px' }}>
				<Breadcrumb style={{ margin: '12px 0' }}>
					<Breadcrumb.Item>demo</Breadcrumb.Item>
					<Breadcrumb.Item>demo2</Breadcrumb.Item>
				</Breadcrumb>
				<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
					<div>
						<div>
							<Input
								size="large"
								placeholder="请输入D编号D00222然后回车"
								value={that.props.demo2Store.dUserCode}
								onChange={e => that._handleChangeDUserCode(e, 'dUserCode')}
								onPressEnter={() => that._onPressEnter()}
							/>
						</div>
						<div>栏目名称：{that.props.demo2Store.columnName}</div>
						<div>新闻标题：{that.props.demo2Store.newsTitle}</div>
						<div>
							<Select
								value={that.props.demo2Store.selectText}
								style={{ width: 120 }}
								onChange={value => that._handleChangeSelect(value)}>
								<Option value="选择器1">选择器1</Option>
								<Option value="选择器2">选择器2</Option>
								<Option value="选择器3">选择器3</Option>
								<Option value="选择器4">选择器4</Option>
							</Select>
							<span>选择为：{that.props.demo2Store.selectText}</span>
						</div>
					</div>
				</Content>
			</Layout>
		);
	}

	_handleChangeSelect(value) {
		console.log(`selectText: ${value}`);
		let that = this;
		let changeState = that.props.changeState;

		changeState('change_selectText', 'selectText', value);
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

export default connect(mapStateToProps, mapDispatchToProps)(demo2);
