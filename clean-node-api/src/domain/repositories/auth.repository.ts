import { UserEntity } from "../entities/user.entity";
import { LoginUserDto, RegisterUserDto } from '..';

export abstract class AuthRepository {
    
  abstract login( LoginUserDto: LoginUserDto ):Promise<UserEntity>;

  abstract register( RegisterUserDto: RegisterUserDto ):Promise<UserEntity>;

}