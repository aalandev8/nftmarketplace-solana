import mongoose from 'mongoose';

const nftSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    mintAddress: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: true
    },
    attributes: [{
        trait_type: String,
        value: String
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const NFT = mongoose.models.NFT || mongoose.model('NFT', nftSchema);