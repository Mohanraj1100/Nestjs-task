import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInputs {

    @Field()
    id: string

    @Field()
    fullname: string;

    @Field()
    phonenumber: number;

    @Field({nullable:true})
    updateAt: string;

    @Field({nullable:true})
    deleteAt: string;

}
