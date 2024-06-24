import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.resource('users', 'UsersController')
        .apiOnly()
        .middleware({
            update: ['auth'],
            destroy: ['auth'],
            index: ['auth']
        })
})

Route.group(() => {
    Route.resource('edits', 'EditsController')
        .apiOnly()
}).middleware('auth')