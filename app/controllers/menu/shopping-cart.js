import Controller from '@ember/controller';
import getTotalPrice from 'music-library/utils/get-total-price';
import getAveragePrice from 'music-library/utils/get-average-price';
import { computed } from '@ember/object';
import { inject as service} from '@ember/service';

export default Controller.extend({
		shoppingCart: service(),
		sum: computed(function () {
			let prices = this.get('shoppingCart').get('musicBooks').map((musicBook) => {
				let price = musicBook.get('price');
			return price;
			})
			return getTotalPrice(prices);
		}).volatile()
});
