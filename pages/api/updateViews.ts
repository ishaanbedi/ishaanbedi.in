import { getXataClient } from "@/src/xata";
import type { NextApiRequest, NextApiResponse } from "next";
const xata = getXataClient();
async function updateViews(id: string, views: string) {
  var viewsTo = Number(views);
  await xata.db.Posts.update(id, {
    views: viewsTo + 1,
  });
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, views } = req.query;
  updateViews(id as string, views as string);
  res.status(200).json({ id, views });
}
