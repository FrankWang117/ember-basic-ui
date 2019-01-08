import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('p-dropdown/p-option', 'Integration | Component | p dropdown/p option', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{p-dropdown/p-option}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#p-dropdown/p-option}}
      template block text
    {{/p-dropdown/p-option}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
