import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      const user = await User.findBy('email', email)
      const token = await auth.use('api').attempt(email, password, {
        name: user?.serialize().email,
        expiresIn: '30mins'
      },)
      return {
        token,
        user: user?.serialize(),
      }
    } catch (error) {
      return response.badRequest('Usuário ou senha inválidos')
    }
  }

  public async dashboard({ auth }: HttpContextContract) {
    try {
      await auth.use('api').authenticate()
      const user = auth.user?.username
      const email = auth.user?.email
      return {
        user: user,
        email: email,
        status: true
      }
    } catch (error) {
      return {
        status: false
      }
    }
  }

  public async logout({ auth }: HttpContextContract) {
    try {
      await auth.use('api').revoke()
      return {
        revoked: true
      }
    } catch (error) {
      return 'Erro ao deslogar usuário'
    }
  }
}
