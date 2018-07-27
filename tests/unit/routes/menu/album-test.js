import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | menu/album', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:menu/album');
    assert.ok(route);
  });
});
