import { BcryptAdapter } from "../../config";
import { UserModel } from "../../data/mongodb";
import { AuthDatasource, CustomError, RegisterUserDto, UserEntity } from "../../domain";
import { UserMapper } from "../mappers/user.mapper";

type HashFunction = ( password: string ) => string;
type CompareFunction = ( password: string, hashed: string ) => boolean;

export class AuthDatasourceImpl implements AuthDatasource {

  constructor(
    private readonly hashPassword: HashFunction = BcryptAdapter.hash, 
    private readonly comparePassword: CompareFunction = BcryptAdapter.compare, 
  ){}

  async register(RegisterUserDto: RegisterUserDto): Promise<UserEntity> {
   
    const { name, email, password } = RegisterUserDto;

    try {

      //1. Email exists?
      const exists = await UserModel.findOne({ email });
      if ( exists ) throw CustomError.badRequest('User already exists');

      //2. hash password 
      const user = await UserModel.create({
        name,
        email,
        password: this.hashPassword( password ),
      });

      await user.save();
      
      //3. mapperrequest to entity    
      return UserMapper.UserEntityFromObject(user);

    } catch (error) {
      
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();

    }

  }
}