import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { DepositoModule } from './deposito/deposito.module';
import { IbanModule } from './iban/iban.module';
import { TransacaoModule } from './transacao/transacao.module';
import { PlanoModule } from './plano/plano.module';


@Module({
  imports: [PrismaModule, UserModule, DepositoModule, IbanModule, TransacaoModule, PlanoModule],
  controllers: [AppController],
  providers: [PrismaService, UserService],
  exports: [],
})
export class AppModule {}
