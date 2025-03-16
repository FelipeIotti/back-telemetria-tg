import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { env } from "../../env";

export async function auth(request: FastifyRequest, response: FastifyReply) {
  const authSchema = z.object({
    email: z.string(),
    password: z.string(),
  });

  const { email, password } = authSchema.parse(request.body);

  if (email !== env.EMAIL || password !== env.PASSWORD) {
    return response.status(400).send("Invalid email or password");
  }

  const token = await response.jwtSign({}, { sign: { sub: "1" } });

  return token;
}
