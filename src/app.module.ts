import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlOptions } from './graphql.options';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
  ],
  // providers: [PrismaService],
})
export class AppModule {}
