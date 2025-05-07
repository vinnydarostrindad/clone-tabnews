import { createRouter } from "next-connect";
import controller from "infra/constroller.js";
import user from "models/user.js";

const router = createRouter();

router.post(postHandler);

export default router.handler(controller.errorHandlers);

async function postHandler(req, res) {
  const userInputValues = req.body;
  const newUser = await user.create(userInputValues);
  return res.status(201).json(newUser);
}
