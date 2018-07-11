export default function getAveragePrice() {
	var prices = [];
	function addPrices() {
    prices.push(price);
	}
	return prices.reduce((sum, i) => sum + i) / prices.length;
}
