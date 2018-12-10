import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { w } from '@dojo/framework/widget-core/d';
import Link from '@dojo/framework/routing/ActiveLink';
import Toolbar from '@dojo/widgets/toolbar';

import { CAPTIONS } from './Menu.const';
import * as css from './Menu.m.css';

export default class Menu extends WidgetBase {
	title = CAPTIONS.title;
	protected render() {
		return w(Toolbar, { heading: this.title, collapseWidth: 700 }, [
			w(
				Link,
				{
					to: 'auth',
					classes: [css.link],
					activeClasses: [css.selected]
				},
				['Auth']
			),
			w(
				Link,
				{
					to: 'cows',
					classes: [css.link],
					activeClasses: [css.selected]
				},
				['Cows']
			),
			w(
				Link,
				{
					to: 'cart',
					classes: [css.link],
					activeClasses: [css.selected]
				},
				['Cart']
			),
			w(
				Link,
				{
					to: 'orders',
					classes: [css.link],
					activeClasses: [css.selected]
				},
				['Orders']
			)
		]);
	}
}
