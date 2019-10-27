import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | konva-diagram', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:konva-diagram');
    assert.ok(route);
  });
});
