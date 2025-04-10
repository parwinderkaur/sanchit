/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

// Route.get('/', async ({ view }) => {
//   return view.render('welcome')
// })

// Frontend
Route.get('/', 'FrontendsController.home').as('home')
Route.get('/about', 'FrontendsController.about').as('about');
Route.get('/services', 'FrontendsController.services').as('services');
Route.get('/service-detail', 'FrontendsController.serviceDetail').as('service-detail');
Route.get('/contact', 'FrontendsController.contact').as('contact')
Route.get('/blogs', 'FrontendsController.blog').as('blogs')
Route.get('/blog-detail', 'FrontendsController.blogDetails').as('blog-detail')
Route.get('/horoscope', 'FrontendsController.horoscope').as('horoscope');
Route.get('/horoscope-detail', 'FrontendsController.horoscopeDetail').as('horoscope-detail');
Route.get('/reservation', 'FrontendsController.reservation').as('reservation');

// Admin Group
Route.group(() => {
  Route.get('/', 'AdminsController.dashboard').as('admin-dashboard')
  Route.get('/login', 'AdminsController.login').as('login')
  Route.get('/logout', 'AdminsController.logout').as('admin-logout')
  Route.get('/home', 'AdminsController.home').as('admin-home')
  Route.get('/services', 'AdminsController.services').as('admin-services')
  Route.get('/about', 'AdminsController.about').as('admin-about')
  Route.get('/testimonials', 'AdminsController.testimonials').as('admin-testimonials')
  Route.get('/faq', 'AdminsController.faq').as('admin-faq')
  Route.get('/setting', 'AdminsController.setting').as('admin-setting')
  Route.get('/blogs', 'AdminsController.blogs').as('admin-blogs')
}).prefix('/admin')

