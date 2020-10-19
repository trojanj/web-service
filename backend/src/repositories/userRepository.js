import { User } from '../models/User';
import BaseRepository from './baseRepository';

class UserRepository extends BaseRepository {
  constructor() {
    super(User)
  }

  getUsers() {
    return this.collection.find();
  }

  getUserByEmail(email) {
    return this.collection.where({ email }).findOne();
  }

  async createUser(email, password) {
    const user = new this.collection({ email, password});
    await user.save();
    return user;
  }
}

export default new UserRepository();