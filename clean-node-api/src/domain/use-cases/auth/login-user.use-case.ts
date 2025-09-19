import { JwtAdapter } from '../../../config';
import { LoginUserDto } from '../../dtos/auth/login-user.dto';
import { CustomError } from '../../errors/custom.error';
import { AuthRepository } from '../../repositories/auth.repository';

interface UserToken {
  token: string,
  user: {
    id: string,
    name: string,
    email: string,
  }
}

type SignToken = (payload: Object, duration?: string) => Promise<string | null>;

interface LoginUserDtoUserUseCase {

  execute( loginUserDto: LoginUserDto ): Promise<UserToken>

}

export class LoginUser implements LoginUserDtoUserUseCase {

  constructor(
    private readonly authRepository: AuthRepository,
    private readonly signToken: SignToken = JwtAdapter.generateToken,
  ){}

  async execute( loginUserDto: LoginUserDto): Promise<UserToken> {
    
    //Create user
    const user = await this.authRepository.login(loginUserDto); 

    //Token
    const token = await this.signToken({ id: user.id}, '2h');

    if ( !token ) throw CustomError.internalServer('Error generating token');

    return {
      token: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      }
    }

  }

}