import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('p-button-group/button', 'Integration | Component | p button group/button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{p-button-group/button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#p-button-group/button}}
      template block text
    {{/p-button-group/button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
