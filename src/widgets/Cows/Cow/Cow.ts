import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';

import { ICow } from '../../../data/cows';
import { IMAGE_PATH, IMAGE_TYPE, CAPTIONS } from './Cow.const';
import * as css from './Cow.m.css';

export interface CowProperties {
	cow: ICow;
}

export default class Cow extends WidgetBase<CowProperties> {
	protected render() {
		const { cow } = this.properties;
		return v('div', {classes: css.root}, [
			v('h3', { classes: [css.header] }, [`${cow.name}`]),
			v('div', { classes: [css.content] }, [
				v('img', {classes: css.image, src: `${IMAGE_PATH}${cow.image}${IMAGE_TYPE}`}),
				v('div', {classes: css.description}, [
					v('ul', {classes: css.description_ul}, [
						v('li', {classes: css.description_li}, [`${CAPTIONS.age}: ${cow.age}`]),
						v('li', {classes: css.description_li}, [`${CAPTIONS.weight}: ${cow.weight}`]),
						v('li', {classes: css.description_li}, [`${CAPTIONS.yeld}: ${cow.yeld}`]),
						v('li', {classes: css.description_li}, [`${CAPTIONS.price}: ${cow.price}`]),
					])
				])
			])
		]);
		
	}
}
