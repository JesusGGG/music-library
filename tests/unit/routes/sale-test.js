import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sale', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:sale');
    assert.ok(route);
  });
});
