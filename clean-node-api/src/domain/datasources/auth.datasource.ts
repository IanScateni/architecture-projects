import { UserEntity } from "../entities/user.entity";
import { LoginUserDto, RegisterUserDto } from "..";

export abstract class AuthDatasource {
    
  abstract login( LoginUserDto: LoginUserDto ):Promise<UserEntity>

  abstract register( RegisterUserDto: RegisterUserDto ):Promise<UserEntity>

}