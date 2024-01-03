import "dotenv/config";
import UserController from "./UserController";
const userController = new UserController();


describe('Testes de criação de usuário', () => {
  it('Deve criar um novo usuário', async () => {
    const newUser = {
      name: 'Exemplo',
      email: 'exemplo@email.com',
      cpf: '12345678900',
      password: 'senha123',
    };

    const PORT = process.env.PORT;
    const response = await request(userController)
      .post(`http://localhost:${PORT}/users`)
      .send(newUser);

    expect(response.status).toBe(201); 
    expect(response.body).toHaveProperty('name', 'Exemplo'); 
    expect(response.body).toHaveProperty('email', 'exemplo@email.com');
    expect(response.body).toHaveProperty('cpf', '12345678910');
  
  });
});