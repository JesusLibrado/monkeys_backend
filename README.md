# Monkeys backend

## Description

 - [Nest](https://github.com/nestjs/nest)
 - [Prisma](https://www.prisma.io/docs/orm/)
 - [GraphQL](https://docs.nestjs.com/graphql/quick-start#schema-first)

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# local
$ yarn run start:local
```

#### Using shell script
```bash
# local
$ ./start_local.sh
```
<!-- 
## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
``` -->

## Using GraphQL API

http://localhost:3000/graphql

```graphql
mutation CreateEmpleado($createEmpleadoInput: CreateEmpleadoInput!) {
  createEmpleado(createEmpleadoInput: $createEmpleadoInput) {
    id
    nombre
    apellido
    email
    numeroTelefono
    horaEntrada
    horaSalida
    rol
    estacion {
      id
    }
  }
}
```

```json
{
  "createEmpleadoInput": {
    "nombre": "juan",
    "apellido": "perez",
    "email": "empleado1@email.com",
    "password": "password",
    "rol": "BARBERO"
  }
}
```

## Mysql Queries

```sql
SELECT * FROM usuarios
SELECT * FROM empleados;
```