import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/database/base.respoitory';
import { DataSource } from 'typeorm';
import { CreateUserInputs } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { UpdateUserInputs } from './dto/update-user.input';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  public async createUser(createUserInputs: CreateUserInputs) {
    return this.save({
      fullname: createUserInputs.fullname,
      phonenumber: createUserInputs.phonenumber,
    });
  }

  public async getAllUser(){
    return this.find({relations:['post']});
  }

  public async updateUser(updateUserInputs: UpdateUserInputs) {
    const { id, fullname, phonenumber } = updateUserInputs;
    await this.update(id, {
      fullname, phonenumber
    })

    return this.findOne({ where: { id } });
  }

  public async deleteUser(id:string){

    const checkUser = await this.findOne({where:{id}})

    if(checkUser)
    {
    await this.softDelete(id)
    console.log("Deleted"); 
    }
    else
    {
      throw new Error("User Already Deleted");
    }
  }
}
