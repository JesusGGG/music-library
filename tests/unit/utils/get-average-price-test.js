import getAveragePrice from 'music-library/utils/get-average-price';
import { module, test } from 'qunit';

module('Unit | Utility | get-average-price', function(hooks) {

  // Replace this with your real tests.
  test('it works', function(assert) {
    let result = getAveragePrice();
    assert.ok(result);
  });
});
