import { Injectable } from '@nestjs/common/decorators';
import { BaseRepository } from 'src/database/base.respoitory';
import { DataSource } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './entities/post.entity';
import { UpdatePostInput } from './dto/update-post.input';

@Injectable()
export class PostRepository extends BaseRepository<Post> {
  constructor(private readonly dataSource: DataSource) {
    super(Post, dataSource.createEntityManager());
  }

  public async createPost(createPostInput: CreatePostInput) {
    const userId = createPostInput.userId;

    const postCount = await this.createQueryBuilder("post")
      .where("post.userId = :userId", { userId })
      .getCount();

    const newPost = this.create({
      postName: createPostInput.postName,
      postOrderNumber: postCount + 1,
      userId: userId,
    });

    return await this.save(newPost);
  }

  public async getAllPost() {
    return this.find({ relations: ['user'] });
  }

  public async updatePost(updatePostInputs: UpdatePostInput) {
    const { id, postName } = updatePostInputs;
    await this.update(id, {
      postName
    })

    return this.findOne({ where: { id } });
  }

  public async deletePost(id: string) {

    const post = await this.findOne({where:{id}});
    const postOrderNumber = post.postOrderNumber;
    const UserId = post.userId;

    await this.softDelete(id)
    console.log("Deleted");

    await this.createQueryBuilder('post')
    .update()
    .set({ postOrderNumber: () => "postOrderNumber - 1" })
    .where("post.user_id = :UserId AND postOrderNumber > :postOrderNumber", {UserId, postOrderNumber})
    .execute();
  }
}
