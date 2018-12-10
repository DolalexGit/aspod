import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';

import { User } from '../../data/user';
import { CAPTIONS } from './Orgers.const';
import * as css from './Orders.m.css';

export interface OrdersProperties {
	user: User;
}

export default class Orders extends WidgetBase<OrdersProperties> {
	protected render() {
		const { user } = this.properties;
		return v('h1', { classes: [css.header] }, [`${CAPTIONS.title} ${user.name}!`]);
	}
}
