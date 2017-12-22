import fetch from 'fetch/fetch';
import ModalTip from 'modalTip';

let checkNeedCode = nickName => {
	let params = {};
	params.nickName = nickName;
	params.t = new Date().getTime();

	return fetch
		.post('/oauth/checkLogin', params)
		.then(res => {
			return res.needCode;
		})
		.catch(e => {
			ModalTip.warningTip(e.message);
		});
};

exports.changeNeedCode = nickName => async dispatch => {
	let needCode = await checkNeedCode(nickName);
	dispatch({ type: 'change_needCode', needCode: needCode });
};
