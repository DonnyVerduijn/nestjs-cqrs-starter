import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Account } from '../model/account.model';
import { User } from '../model/user.model';
import { AccountService } from '../service/account.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly accountService: AccountService) {}

  @ResolveField(() => [Account], { complexity: 1 })
  accounts(@Parent() user: User) {
    return this.accountService.findByUserId(user.id);
  }
}
