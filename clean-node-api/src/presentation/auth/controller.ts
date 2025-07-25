import { Request, Response } from "express";
import { AuthRepository, RegisterUserDto } from "../../domain";
import { CustomError } from '../../domain/errors/custom.error';

export class AuthController {

  constructor(
    private readonly authRepository: AuthRepository,
  ) {}

  private handleError = ( error: unknown, res: Response ) => {
    if ( error instanceof CustomError ) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(error); //winston
    return res.status(500).json( { error: 'Internal Serve Error' });
  }
  
  registerUser = (req: Request, res: Response ) => {
    const [error, registerUserDTO] = RegisterUserDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    this.authRepository.register(registerUserDTO!)
      .then( user=> res.json(user) )
      .catch( error => this.handleError( error, res ) );
  }

  loginUser = (req: Request, res: Response ) => {
    res.json('loginUser controller');
  }

}