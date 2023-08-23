import { ObjectType, Field } from '@nestjs/graphql';
import { type } from 'os';
import { Post } from 'src/post/entities/post.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  id: string;

  @Field()
  @Column({ name: 'user_name', type:'varchar'})
  fullname: string;

  @Field()
  @Column({ name: 'phonenumber' ,type:'numeric'})
  phonenumber: number;

  @Field({nullable:true})
  @CreateDateColumn({ name: 'CreatedAt',type:'date',nullable:true })
  createAt: String;

  @Field({nullable:true})
  @UpdateDateColumn({ name: 'UpdatedAt',type:'date', nullable:true})
  updateAt: string;

  @Field({nullable:true})
  @DeleteDateColumn({ name: 'deletedAt',type:'date', nullable:true})
  deleteAt: string;


  @Field(() => [Post], { nullable: true })
  @OneToMany(() => Post, (post) => post.user, { cascade:true})
  post: Post[];
}
