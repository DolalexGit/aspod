import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import Outlet from '@dojo/framework/routing/Outlet';

import Menu from './widgets/Menu';
import Cows from './widgets/Cows';
import Auth from './widgets/Auth';
import Cart from './widgets/Cart';
import Orders from './widgets/Orders';

import { USER } from './data/user';
import { ICow } from './data/cows';
import FB from './data/fire';
import * as css from './App.m.css';

export default class App extends WidgetBase {
	fb = FB;
	cowsArr: ICow[] = [];
	constructor() {
		super();
		this.getCowsArray()
		.then(() => this.invalidate());
}
	
	protected render() {
		return v('div', { classes: [css.root] }, [
			w(Menu, {}),
			v('div', [
				w(Outlet, { key: 'auth', id: 'auth', renderer: () => w(Auth, {}) }),
				w(Outlet, { key: 'cows', id: 'cows', renderer: () => w(Cows, { cowsArr: this.cowsArr }) }),
				w(Outlet, { key: 'cart', id: 'cart', renderer: () => w(Cart, { user: USER }) }),
				w(Outlet, { key: 'orders', id: 'orders', renderer: () => w(Orders, { user: USER }) }),
			])
		]);
	}

	private getCowsArray() {
		return this.fb.getAllCows()
		.then(cows => this.cowsArr = Object.values(cows));
	}
}
