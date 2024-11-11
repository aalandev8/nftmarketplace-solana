import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    walletAddress: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        unique: true,
        sparse: true,
    },
    profileImage: {
        type: String,
    },
    nftsCreated: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NFT'
    }],
    nftsOwned: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NFT'
    }],
}, {
    timestamps: true,
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);