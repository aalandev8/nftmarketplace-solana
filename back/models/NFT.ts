import mongoose from 'mongoose';

const nftSchema = new mongoose.Schema({
    mintAddress: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: String,
    image: String,
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    price: {
        type: Number,
        default: 0,
    },
    isListed: {
        type: Boolean,
        default: false,
    },
    royalties: {
        type: Number,
        default: 0, // percentage
    },
}, {
    timestamps: true,
});

export const NFT = mongoose.models.NFT || mongoose.model('NFT', nftSchema);