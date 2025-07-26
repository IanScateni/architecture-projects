import { Request, Response } from "express";
import { AuthRepository, RegisterUserDto } from "../../domain";
import { CustomError } from '../../domain/errors/custom.error';
import { JwtAdapter } from '../../config/jwt';
import { UserModel } from "../../data/mongodb";

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
      .then( async(user) => {
        res.json({
          user,
          token: await JwtAdapter.generateToken({ id: user.id })
        });
      })
      .catch( error => this.handleError( error, res ) );
  }

  loginUser = (req: Request, res: Response ) => {
    res.json('loginUser controller');
  }

  getUsers = (req: Request, res: Response ) => {
    
    UserModel.find()
      .then( users => {
        res.json({
          users,
          token: req.body.payload
        }) 
      })
      .catch(()=> res.status(500).json({ error: 'Internal server error' }) )

  }


}