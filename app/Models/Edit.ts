import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Edit extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public feitoPor: number

  @column()
  public descricao: string

  @column.dateTime({ autoCreate: true })
  public feitoEm: DateTime
}
