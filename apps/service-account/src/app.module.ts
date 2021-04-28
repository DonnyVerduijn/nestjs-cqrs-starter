import { EventStoreModule } from '@juicycleff/nestjs-event-store';
import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './account/account.module';
import { Account } from './account/model/account.model';

const databaseUrl =
  process.env.DATABASE_URL ||
  'postgresql://usr:User12345@localhost:5432/service_account';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
    }),
    EventStoreModule.register({
      type: 'event-store',
      tcpEndpoint: {
        host: 'localhost',
        port: 1113,
      },
      options: {
        defaultUserCredentials: {
          username: 'admin',
          password: 'changeit',
        },
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: databaseUrl,
      database: databaseUrl.split('/').pop(),
      entities: [Account],
      synchronize: true,
      logging: true,
    }),
    AccountModule,
  ],
})
export class AppModule {}
