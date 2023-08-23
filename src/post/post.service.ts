/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { PostRepository } from './post.repository';
import { UpdatePostInput } from './dto/update-post.input';

@Injectable()
export class PostService {
  constructor(private readonly postRepo: PostRepository) {}

  public async create(createPostInput: CreatePostInput) {
    return this.postRepo.createPost(createPostInput);
  }

  public async getAllPost()
  {
      return this.postRepo.getAllPost();
  }

  public async updatePost(updatePostInputs:UpdatePostInput){
    return this.postRepo.updatePost(updatePostInputs)
  }

  public async deletePost(id:string){
    return this.postRepo.deletePost(id)
  }

  public async getPostById(id) {
    // select * from users left join post on user.user_id = post.user_id where users.user_id = ''
    return this.postRepo
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.user', 'u')
      .where('post.id =:id', { id })
      .getOne();
  }

}
