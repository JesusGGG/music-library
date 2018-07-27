import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | menu/author', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:menu/author');
    assert.ok(controller);
  });
});
