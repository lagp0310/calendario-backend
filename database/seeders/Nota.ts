import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import NotaFactory from '../factories/NotaFactory'

export default class extends BaseSeeder {
  public static environment = ['development', 'test']

  public async run() {
    await NotaFactory.createMany(10)
  }
}
