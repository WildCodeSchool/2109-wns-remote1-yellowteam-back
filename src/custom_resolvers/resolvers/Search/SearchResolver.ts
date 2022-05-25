import { SearchInput } from '../../../../src/custom_resolvers/Inputs/searchInput';
import { GQLContext } from 'src/interfaces';
import { Resolver, Ctx, Arg, Query } from 'type-graphql';
import { SearchResult } from '../../models/searchResult';

@Resolver()
export class SearchResolver {
  @Query(() => [SearchResult], { nullable: true })
  async search(
    @Ctx() ctx: GQLContext,
    @Arg('data') data: SearchInput
  ): Promise<SearchResult[]> {
    const searchProjectsResults = await ctx.prisma.project.findMany({
      where: {
        OR: {
          title: {
            contains: data.searchValue,
          },
        },
      },
    });

    const searchTaskResult = await ctx.prisma.task.findMany({
      where: {
        OR: {
          title: {
            contains: data.searchValue,
          },
        },
      },
    });

    const results: () => SearchResult[] = () => {
      const projects = searchProjectsResults.map((project) => ({
        id: project.id,
        description: project.description,
        type: 'PROJECT',
        title: project.title,
      }));

      const tasks = searchTaskResult.map((task) => ({
        id: task.id,
        description: task.description,
        type: 'TASK',
        title: task.title,
      }));

      return [...projects, ...tasks];
    };

    return results();
  }
}
