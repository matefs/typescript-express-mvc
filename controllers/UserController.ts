/* 
import { Request, Response } from 'express';
import User from '../models/User';

// Definindo o controlador
export default class UserController {
  getUsers(req: Request, res: Response): void {
    // Simulando uma lista de usuários
    const users = [
      new User('João', 'joao@example.com'),
      new User('Maria', 'maria@example.com'),
    ];

    res.json(users);
  }
}
 */


import { Request, Response } from 'express';
import User from '../models/User';

 

export default class UserController {
  getUsers(req: Request, res: Response): void {
    // Simulando uma lista de usuários
    const users: User[] = [
      { name: 'João', email: 'joao@example.com' },
      { name: 'Maria', email: 'maria@example.com' },
    ];

    res.json(users);
  }
}

