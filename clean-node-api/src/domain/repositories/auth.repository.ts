import { UserEntity } from "../entities/user.entity";
import { RegisterUserDto } from '../dtos/auth/register-user.dto';


export abstract class AuthRepository {
    
  // todo:

  // abstract login( LoginUserDto: LoginUserDto ):Promise<UserEntity>

  abstract register( RegisterUserDto: RegisterUserDto ):Promise<UserEntity>

}