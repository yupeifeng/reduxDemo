import { combineReducers } from 'redux';

const demo1Store = (state = { welcomeText: '', needCode: '' }, action = {}) => {
	switch (action.type) {
		case 'change_welcomeText':
			return { ...state, welcomeText: action.welcomeText };
		case 'change_needCode':
			return { ...state, needCode: action.needCode };
		default:
			return state;
	}
};

const demo2Store = (
	state = { columnName: '', newsTitle: '', selectText: '选择器1', dUserCode: '', demo2Lable: 'demo2Lable' },
	action = {}
) => {
	switch (action.type) {
		case 'change_columnName':
			return { ...state, columnName: action.columnName };
		case 'change_newsTitle':
			return { ...state, newsTitle: action.newsTitle };
		case 'change_selectText':
			return { ...state, selectText: action.selectText };
		case 'change_dUserCode':
			return { ...state, dUserCode: action.dUserCode };
		default:
			return state;
	}
};

const demo2Label = (state = { demo2Label: 'demo2Label' }, action = {}) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default combineReducers({
	demo1Store: demo1Store,
	demo2Store: demo2Store,
	demo2Label: demo2Label
});
