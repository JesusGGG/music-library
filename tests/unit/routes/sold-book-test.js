import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sold-book', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:sold-book');
    assert.ok(route);
  });
});
