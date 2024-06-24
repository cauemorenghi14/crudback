import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'edits'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('created_at')
      table.dropColumn('updated_at')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.timestamp('created_at', { useTz: true })
      table.timestamp('created_at', { useTz: true })

    })
  }
}
