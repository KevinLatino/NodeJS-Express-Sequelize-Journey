import { Rewards } from "../Models/Reward.Model.js";

class RewardServices {

    async createReward(body) {
        const createBody = await Rewards.create(body);
        return createBody;
    }
}

export default RewardServices;