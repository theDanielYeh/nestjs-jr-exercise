import { ApiProperty, PickType } from '@nestjs/swagger';
import { User } from '../schemas/user.schema';

export class CreateUserDto extends PickType(User, [
  'firstName',
  'lastName',
  'password',
  'username',
]) {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  username: string;

  constructor(args?: Partial<CreateUserDto>) {
    super();
    Object.assign(this, args);
  }
}
