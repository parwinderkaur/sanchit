import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AdminsController {
  public async login({ view }: HttpContextContract) {
    return view.render('admin/login')
  }
  public async dashboard({ view }: HttpContextContract) {
    return view.render('admin/index')
  }
  public async home({ view }: HttpContextContract) {
    return view.render('admin/home')
  }
  public async services({ view }: HttpContextContract) {
    return view.render('admin/services')
  }

  public async blogs({ view }: HttpContextContract) {
    return view.render('admin/blogs')
  }

  public async logout({ response }: HttpContextContract) {
    return response.redirect('/login')
  }

  public async about({ view }: HttpContextContract) {
    return view.render('admin/about')
  }

  public async testimonials({ view }: HttpContextContract) {
    return view.render('admin/testimonials')
  }

  public async faq({ view }: HttpContextContract) {
    return view.render('admin/faq')
  }

  public async setting({ view }: HttpContextContract) {
    return view.render('admin/setting')
  }
}
