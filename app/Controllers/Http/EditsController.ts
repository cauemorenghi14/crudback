import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Edit from 'App/Models/Edit'

export default class EditsController {
  public async index({}: HttpContextContract) {
    const edits = await Edit.all()
    return edits
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['feito_por', 'descricao'])
    const edit = await Edit.create(data)
    return edit
  }

  public async show({ params }: HttpContextContract) {
    const edit = await Edit.findOrFail(params.id)
    return edit
  }

  public async update({ request, params }: HttpContextContract) {
    const data = request.only(['feito_por', 'descricao'])
    const edit = await Edit.findOrFail(params.id)
    edit.merge(data)
    await edit.save()
    return edit
  }

  public async destroy({ params }: HttpContextContract) {
    const edit = await Edit.findOrFail(params.id)
    await edit.delete()
  }
}
