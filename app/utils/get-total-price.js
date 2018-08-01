export default function getTotalPrice(prices) {
  	return prices.reduce((sum, i) => sum + i);
}
