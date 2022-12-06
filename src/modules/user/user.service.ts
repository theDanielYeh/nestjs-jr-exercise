import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MONGO_DB_NAME } from './constants';
import { User, UserDoc } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name, MONGO_DB_NAME) private userModel: Model<UserDoc>) {}
}
