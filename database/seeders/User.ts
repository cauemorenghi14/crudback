import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    const uniqueKey = 'email'

    await User.updateOrCreateMany(uniqueKey, [
      {
        username: 'cauemorenghi',
        email: 'cauemorenghi@gmail.com',
        password: '1234',
        perfil: 1,
        status: true
      },
      {
        username: 'luanmorenghi',
        email: 'luanmorenghi@gmail.com',
        password: '1234',
        perfil: 0,
        status: true
      },
      {
        username: 'davimorenghi',
        email: 'davimorenghi@gmail.com',
        password: '1234',
        perfil: 0,
        status: true
      },
      {
        username: 'gabimorenghi',
        email: 'gabimorenghi@gmail.com',
        password: '1234',
        perfil: 0,
        status: true
      },
      {
        username: 'fabiomorenghi',
        email: 'fabiomorenghi@gmail.com',
        password: '1234',
        perfil: 0,
        status: true
      },
      {
        username: 'sandramorenghi',
        email: 'sandramorenghi@gmail.com',
        password: '1234',
        perfil: 0,
        status: true
      },
      {
        username: 'nelsonmorenghi',
        email: 'nelsonmorenghi@gmail.com',
        password: '1234',
        perfil: 0,
        status: true
      },
      {
        username: 'lauramorenghi',
        email: 'lauramorenghi@gmail.com',
        password: '1234',
        perfil: 0,
        status: false
      },
      {
        username: 'fernandomorenghi',
        email: 'fernandomorenghi@gmail.com',
        password: '1234',
        perfil: 0,
        status: false
      }
    ])
  }
}