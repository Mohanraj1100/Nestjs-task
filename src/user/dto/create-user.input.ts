import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInputs {
  @Field()
  fullname: string;

  @Field()
  phonenumber: number;

  @Field({nullable:true})
  createAt: String;

  @Field({nullable:true})
  updateAt: string;

  @Field({nullable:true})
  deleteAt: string;

}
