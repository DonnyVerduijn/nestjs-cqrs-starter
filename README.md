# NestJS CQRS Microservices Starter

## Description

A starter project which featuring advanced microservice pattern with GraphQL, based on Domain-Driven Design (DDD) using the command query responsibility segregation (CQRS) design pattern.

## Technologies

- [GraphQL](https://graphql.org/)
- [Apollo Federation](https://www.apollographql.com/docs/apollo-server/federation/introduction/)
- [NestJS](https://docs.nestjs.com/)
- [NestJS GraphQL](https://docs.nestjs.com/graphql/quick-start)
- [NestJS Federation](https://docs.nestjs.com/graphql/federation)
- [NestJS TypeORM](https://docs.nestjs.com/techniques/database)
- [NestJS CQRS](https://docs.nestjs.com/recipes/cqrs)
- [NestJS Event Store](https://github.com/juicycleff/nestjs-event-store)

## Installation

```bash
git clone https://github.com/hardyscc/nestjs-cqrs-starter.git <Your_Project_Name>
cd <Your_Project_Name>

npm install
```

## Usage

```bash
# start mysql, eventstore and add persistent subscriptions
docker-compose up

# Start the user service
nest start service-user -w

# Start the account service
nest start service-account -w

# start the gateway
nest start gateway -w
```

## Testing

Goto GraphQL Playground - http://localhost:3000/graphql

### Create user with a default saving account

```graphql
mutation {
  createUser(input: { name: "John" }) {
    id
    name
  }
}
```
### Query the users

```graphql
query {
  users {
    id
    name
    accounts {
      id
      name
      balance
      user {
        name
        accounts {
          user {
            accounts {
              name
            }
          }
        }
      }
    }
  }
}
```

