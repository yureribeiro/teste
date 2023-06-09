// enums são conjuntos de constantes que você pode atribuir valores para que sejam referenciadas facilmente

enum Planets {
  MERCURIO = 1, //inicio em 1, ts por padrão irá encrementar as seguintes:
  VENUS, //2
  TERRA, //3
  MARTE //4
}

Planets.MARTE // result: 4

// ---------

enum Roles {
  ADMIN = 'admin',
  USER = 'user'
}

Roles.ADMIN // result: admin