import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { asyncComponent } from 'AsyncComponent';
import HeaderMenu from './components/heard';
import SiderMenu from './components/sider';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import './css/main.css';

const demo1 = asyncComponent(() => import(/* webpackChunkName: 'demo1' */ './demo1'));
const demo2 = asyncComponent(() => import(/* webpackChunkName: 'demo2' */ './demo2'));

let middleware = [thunk];
let store = createStore(reducer, applyMiddleware(...middleware));

const router = (
	<Provider store={store}>
		<HashRouter>
			<div>
				<HeaderMenu />
				<div className="ant-layout ant-layout-has-sider layout">
					<SiderMenu />
					<Switch>
						<Route exact path="/" component={demo1} />
						<Route path="/demo">
							<Switch>
								<Route exact path="/demo/demo1" component={demo1} />
								<Route exact path="/demo/demo2" component={demo2} />
							</Switch>
						</Route>
					</Switch>
				</div>
			</div>
		</HashRouter>
	</Provider>
);

ReactDOM.render(router, document.getElementById('content'));
