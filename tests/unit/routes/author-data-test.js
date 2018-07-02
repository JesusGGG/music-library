import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | authorData', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:author-data');
    assert.ok(route);
  });
});
