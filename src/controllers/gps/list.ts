import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../database";
import { listQuerySchema } from "../../schemas/gps";

export async function listGps(
  request: FastifyRequest,
  response: FastifyReply
) {
  const { page, limit } = listQuerySchema.parse(request.query);
  const offset = (page - 1) * limit;

  const [data, totalResult] = await Promise.all([
    knex("gps")
      .select()
      .orderBy("created_at", "desc")
      .limit(limit)
      .offset(offset),
    knex("gps").count("id as count").first() as Promise<{ count: string | number } | undefined>,
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
