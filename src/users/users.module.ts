import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [UsersResolver],
  imports: [PrismaModule],
})
export class UsersModule {}
