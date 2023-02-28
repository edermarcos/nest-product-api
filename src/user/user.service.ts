import { Injectable } from '@nestjs/common';
import { LoginDto, SignUpDto } from './dto';

@Injectable()
export class UserService {
  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  // findAll() {
  //   return `This action returns all user`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }

  logIn(loginDTO: LoginDto) {
    return {
      ...loginDTO,
      message: 'User logged in successfully',
      token: '1234567890',
    };
  }

  signUp(signupDTO: SignUpDto) {
    return {
      ...signupDTO,
      message: 'User created successfully',
    };
  }
}
