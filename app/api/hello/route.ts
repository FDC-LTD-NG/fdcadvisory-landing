import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns a hello world message
 *     responses:
 *       200:
 *         description: Hello World!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello, world!
 */
export async function GET() {
  return NextResponse.json({ message: "Hello, world!" });
}
