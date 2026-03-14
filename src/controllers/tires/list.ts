import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";
import { listQuerySchema } from "../../schemas/tires";

export async function listTires(
  request: FastifyRequest,
  response: FastifyReply
) {
  const { page, limit } = listQuerySchema.parse(request.query);
  const offset = (page - 1) * limit;

  const [data, totalResult] = await Promise.all([
    knex("tires")
      .select()
      .orderBy("created_at", "desc")
      .limit(limit)
      .offset(offset),
    knex("tires").count("id as count").first() as Promise<{ count: string | number } | undefined>,
  ]);

  const totalCount = Number(totalResult?.count || 0);

  return {
    data,
    pagination: {
      page,
      limit,
      total: totalCount,
      totalPages: Math.ceil(totalCount / limit),
    },
  };
}
