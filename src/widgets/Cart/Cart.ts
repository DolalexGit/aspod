import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';

import { User } from '../../data/user';
import { CAPTIONS } from './Cart.const';
import * as css from './Cart.m.css';

export interface CartProperties {
	user: User;
}

export default class Cart extends WidgetBase<CartProperties> {
	protected render() {
		const { user } = this.properties;
		return v('h1', { classes: [css.header] }, [`${CAPTIONS.title} ${user.name}!`]);
	}
}
