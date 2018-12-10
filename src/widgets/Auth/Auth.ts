import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';

import { CAPTIONS } from './Auth.const';
import * as css from './Auth.m.css';

export default class Auth extends WidgetBase {
	protected render() {
		return v('h1', { classes: [css.header] }, [CAPTIONS.title]);
	}
}
