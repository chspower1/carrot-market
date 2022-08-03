import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
import client from "../../libs/client";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await client.player.create({
        data: {
            name: "hosung",
            age: 30,
        },
    });
    res.json(await client.player.findMany());
}
