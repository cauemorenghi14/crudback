import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
    const users = await User.all()
    return users
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['username', 'email', 'password', 'perfil', 'status'])
    const user = await User.create(data)
    return user
  }

  public async show({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    return user
  }

  public async update({ request, params }: HttpContextContract) {
    const data = request.only(['username', 'email', 'perfil', 'status'])
    const user = await User.findOrFail(params.id)
    user.merge(data)
    await user.save()
    return user
  }

  public async destroy({ params }: HttpContextContract) {
    try {
      const user = await User.findOrFail(params.id)
      await user.delete()
      return 'Usuário excluído com sucesso'
    } catch (error) {
      return 'Erro ao excluir cliente'
    }
  }

}
