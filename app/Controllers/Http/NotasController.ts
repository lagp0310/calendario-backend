import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Nota from '../../Models/Nota'
import CrearNotaValidator from '../../Validators/CrearNotaValidator'
import EditarNotaValidator from '../../Validators/EditarNotaValidator'

export default class NotasController {
  public async index({ response }: HttpContextContract) {
    return response.json((await Nota.all()).sort((a, b) => a.id - b.id))
  }

  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(CrearNotaValidator)

    return response.json(await Nota.create(payload))
  }

  public async show({ request, response }: HttpContextContract) {
    return response.json(await Nota.findOrFail(request.param('id')))
  }

  public async update({ request, response }: HttpContextContract) {
    await Nota.findOrFail(request.param('id'))

    const payload = await request.validate(EditarNotaValidator)

    return response.json(await Nota.updateOrCreate({ id: request.param('id') }, payload))
  }

  public async destroy({ request, response }: HttpContextContract) {
    return response.json((await Nota.findOrFail(request.param('id'))).delete())
  }
}
