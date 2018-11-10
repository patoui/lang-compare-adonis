'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ComparisonsSchema extends Schema {
  up () {
    this.create('comparisons', (table) => {
      table.increments()
      table.string('lang')
      table.string('method')
      table.text('url')
      table.timestamps()
    })
  }

  down () {
    this.drop('comparisons')
  }
}

module.exports = ComparisonsSchema
