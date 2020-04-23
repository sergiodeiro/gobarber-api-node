declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}

//Quando se precisa adicionar algum tipo a uma biblioteca  já existente usa-se o formato acima.
