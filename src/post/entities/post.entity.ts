import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'post' })
export class Post {
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'post_id' })
  id: string;

  @Field()
  @Column({ name: 'post_name' })
  postName: string;

  @Field()
  @Column({name:'post_order_number',nullable:true})
  postOrderNumber: number;
  
  @Field({nullable:true})
  @CreateDateColumn({ name: 'createdAt', type: 'date',nullable:true })
  createdAt: string;

  @Field({nullable:true})
  @UpdateDateColumn({ name: 'updatedAt', type: 'date' ,nullable:true})
  updatedAt: string;

  @Field({nullable:true})
  @DeleteDateColumn({ name: 'deletedAt', type: 'date',nullable:true })
  deletedAt: string;

  @Field()
  @ManyToOne(() => User, (user) => user.post,{onDelete:'CASCADE',orphanedRowAction:'soft-delete'})
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Field()
  @Column({ name: 'user_id' })
  userId: string;
}