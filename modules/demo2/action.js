import fetch from 'fetch/fetch';
import ModalTip from 'modalTip';

let getColumnList = userCode => {
	let params = {};
	params.userCode = userCode;

	return fetch
		.get('/newsCenrer/queryColumnList4Site', params)
		.then(res => {
			return res.dataList;
		})
		.catch(e => {
			ModalTip.warningTip(e.message);
		});
};

let getNewsList = (userCode, columnId) => {
	let params = {};
	params.pageSize = 20;
	params.pageNum = 0;
	params.userCode = userCode;
	params.columnId = columnId;

	return fetch
		.get('/newsCenrer/queryNewsList4Site', params)
		.then(res => {
			return res.dataList;
		})
		.catch(e => {
			ModalTip.warningTip(e.message);
		});
};

exports.changeDUserCode = dUserCode => {
	return { type: 'change_dUserCode', dUserCode: dUserCode };
};

exports.changeColumn = userCode => async dispatch => {
	let columnList = await getColumnList(userCode);
	dispatch({
		type: 'change_columnName',
		columnName: columnList[0] && columnList[0].columnName ? columnList[0].columnName : '暂无信息'
	});

	let newsList = await getNewsList(userCode, columnList[0].flowId);
	dispatch({
		type: 'change_newsTitle',
		newsTitle: newsList[0] && newsList[0].newsTitle ? newsList[0].newsTitle : '暂无信息'
	});
};

exports.changeState = (type, name, value) => async dispatch => {
	let store = { type: type };
	store[name] = value;
	dispatch(store);
};
