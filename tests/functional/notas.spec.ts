import { test } from '@japa/runner'
import Database from '@ioc:Adonis/Lucid/Database'

test.group('API Notas', (group) => {
  group.each.setup(async () => {
    await Database.beginGlobalTransaction()
    return () => Database.rollbackGlobalTransaction()
  })

  test('Listar Todas las Notas', async ({ client }) => {
    const response = await client.get('/notas')
    response.assertStatus(200)
  })

  test('Listar una Nota', async ({ client }) => {
    const response = await client.get('/notas/1')
    response.assertStatus(200)
  })

  test('Crear Nota', async ({ client }) => {
    const response = await client.post('/notas').json({ nota: 'Creada', fecha: '2023-06-01' })
    response.assertStatus(200)
    response.assertBodyContains({ nota: 'Creada', fecha: '2023-06-01' })
  })

  test('Editar Nota Existente', async ({ client }) => {
    const nota = await client.get('/notas/1')
    nota.assertStatus(200)

    const response = await client.patch('/notas/1').json({ nota: 'Editada', fecha: '2023-06-02' })
    response.assertStatus(200)
    response.assertBodyContains({ nota: 'Editada', fecha: '2023-06-02' })
  })

  test('Editar Nota Inexistente', async ({ client }) => {
    const nota = await client.get('/notas/100')
    nota.assertStatus(404)

    const response = await client.patch('/notas/100').json({ nota: 'Editada', fecha: '2023-06-02' })
    response.assertStatus(404)
  })

  test('Eliminar Nota Existente', async ({ client }) => {
    const response = await client.delete('/notas/1')
    response.assertStatus(200)
  })

  test('Eliminar Nota Inexistente', async ({ client }) => {
    const response = await client.delete('/notas/100')
    response.assertStatus(404)
  })
})
