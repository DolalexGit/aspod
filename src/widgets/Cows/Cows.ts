import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';

import { ICow } from '../../data/cows';
import FB from '../../data/fire';
import Cow from './Cow';
import { CAPTIONS } from './Cows.const';
import * as css from './Cows.m.css';

export interface CowsProperties {
	cowsArr: ICow[];
}

export default class Cows extends WidgetBase<CowsProperties> {
	fb = FB;

	protected render() {
		const { cowsArr } = this.properties;
		return v('div', {classes: css.root}, [
			v('h2', { classes: [css.header] }, [CAPTIONS.title]),
			v('div', { classes: [css.content] }, cowsArr.map(cow => {
				return w(Cow, { cow: cow }, [] );
			}))
		]);
		
	}
}
