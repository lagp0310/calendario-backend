import Nota from 'App/Models/Nota'
import Factory from '@ioc:Adonis/Lucid/Factory'
import { DateTime } from 'luxon'

export default Factory.define(Nota, ({ faker }) => {
  return {
    nota: faker.lorem.sentence(),
    fecha: DateTime.now(),
  }
}).build()
