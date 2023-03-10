import { Challenge, User } from "../../models/index.js";
import { challengeCollection } from "../../resources/index.js";
import { UnauthorizedError, createDataResponse } from "../../utils/index.js";

const indexChallenge = async (req, res, next) => {
  try {
    const authUserId = req.payload?.user?.id;

    if (!authUserId)
      throw new UnauthorizedError({
        message: "Credential doesn't match to our records.",
        code: "E5_1",
      });

    const authUser = await User.findByPk(authUserId);

    if (!authUser)
      throw new UnauthorizedError({
        message: "Credential doesn't match to our records.",
        code: "E5_1",
      });

    const targetChallenge = await Challenge.findAll();

    const targetChallengeCollection = challengeCollection(targetChallenge);

    const data = {
      challenges: targetChallengeCollection,
    };

    const dataResponse = createDataResponse({
      data,
      request: req,
    });

    return res.json(dataResponse);
  } catch (error) {
    next(error);
  }
};

export { indexChallenge };
