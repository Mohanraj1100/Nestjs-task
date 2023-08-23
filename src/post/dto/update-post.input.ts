import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdatePostInput {

  @Field()
  id:string;

  @Field()
  postName: string;

  @Field({nullable:true})
  updatedAt: string;

  @Field({nullable:true})
  deleteAt: string;
}
