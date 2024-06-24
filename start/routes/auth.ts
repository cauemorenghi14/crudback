import Route from '@ioc:Adonis/Core/Route'

Route.post('login', 'AuthController.login')
Route.get('dashboard', 'AuthController.dashboard')
Route.post('logout', 'AuthController.logout')