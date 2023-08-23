import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  postName: string;

  @Field({nullable:true})
  postOrderNumber: number;

  @Field({nullable:true})
  createdAt: string;

  @Field({nullable:true})
  updatedAt: string;

  @Field({nullable:true})
  deleteAt: string;

  @Field()
  userId: string;
}
