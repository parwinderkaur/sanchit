import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FrontendsController {

    public async home({ view }: HttpContextContract) {
        return view.render('index')
      }
    
      public async about({ view }: HttpContextContract) {
        return view.render('about')
      }
    
      public async services({ view }: HttpContextContract) {
        return view.render('services')
      }
      public async serviceDetail({ view }: HttpContextContract) {
        return view.render('service-detail')
      }
    
      public async contact({ view }: HttpContextContract) {
        return view.render('contact')
      }
    
      public async blog({ view }: HttpContextContract) {
        return view.render('blogs')
      }
      public async blogDetails({ view }: HttpContextContract) {
        return view.render('blog-detail')
      }
      public async horoscope({ view }: HttpContextContract) {
        return view.render('horoscope')
      }
      public async horoscopeDetail({ view }: HttpContextContract) {
        return view.render('horoscope-detail')
      }
      public async reservation({ view }: HttpContextContract) {
        return view.render('reservation')
      }
}
