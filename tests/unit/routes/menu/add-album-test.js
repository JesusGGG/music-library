import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | menu/add-album', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:menu/add-album');
    assert.ok(route);
  });
});
