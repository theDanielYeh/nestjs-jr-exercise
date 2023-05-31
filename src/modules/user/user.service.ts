import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MONGO_DB_NAME } from './constants';
import { User, UserDoc } from './schemas/user.schema';

@Injectable()
export class UserService {
  private logger = new Logger(UserService.name);

  constructor(@InjectModel(User.name, MONGO_DB_NAME) private userModel: Model<UserDoc>) {}

  async createUser(user: Partial<User>): Promise<User> {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  async deleteUser(_id: string): Promise<User> {
    return await this.userModel.findOneAndDelete({ _id });
  }

  async findByObjectId(_id: string): Promise<User> {
    try {
      const user = await this.userModel.findById(_id);
      return user;
    } catch (e) {
      this.logger.error(e.message);
      return null;
    }
  }

  async findByUserName(username: string): Promise<User> {
    try {
      const user = await this.userModel.findOne({ username });
      return user;
    } catch (e) {
      this.logger.error(e.message);
      return null;
    }
  }

  async patchUser(_id: string, user: Partial<User>): Promise<User> {
    try {
      const updatedUser = await this.userModel.findByIdAndUpdate(_id, user, { new: true });
      if (!updatedUser) {
        this.logger.error(`User with id '${_id}' not found.`);
        return null;
      }
      return updatedUser;
    } catch (e) {
      this.logger.error(e.message);
      return null;
    }
  }

  async searchUser(query: Partial<User>): Promise<User> {
    try {
      // might have to use find() since we allow multiple params that may not be unique?
      const user = await this.userModel.findOne(query);
      if (!user) {
        this.logger.error(`User with query '${JSON.stringify(query)}' not found.`);
        return null;
      }
      return user;
    } catch (e) {
      this.logger.error(e.message);
      return null;
    }
  }
}
