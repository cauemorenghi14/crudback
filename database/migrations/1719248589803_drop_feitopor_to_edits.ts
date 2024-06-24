import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'edits'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('feito_por')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('feito_por').unsigned()
    })
  }
}
