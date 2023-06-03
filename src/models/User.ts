// Sem typescript 
/* 
// Definindo o modelo
export default class User {
  private name: string;
  private email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }
}

 */
// models/User.ts


// Com typescript
interface User {
  name: string;
  email: string;
}

export default User;
