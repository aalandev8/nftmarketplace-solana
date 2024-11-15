import { User } from "../models/User";

export const UserController = {
    findOrCreateUser: async (walletAddress: string) => {
        try {
            let user = await User.findOne({ walletAddress });
            
            if (!user) {
                user = await User.create({
                    walletAddress,
                    username: `User_${walletAddress.slice(0, 6)}`
                });
            }
            
            return user;
        } catch (error) {
            throw error;
        }
    },

    getUserProfile: async (walletAddress: string) => {
        try {
            const user = await User.findOne({ walletAddress })
                .populate('nftsCreated')
                .populate('nftsOwned');
            return user;
        } catch (error) {
            throw error;
        }
    },

    updateUser: async (walletAddress: string, updateData: Partial<typeof User>) => {
        try {
            const user = await User.findOneAndUpdate(
                { walletAddress },
                updateData,
                { new: true }
            );
            return user;
        } catch (error) {
            throw error;
        }
    }
};