import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
    nft: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NFT',
        required: true,
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'sold', 'cancelled'],
        default: 'active',
    }
}, {
    timestamps: true,
});

export const Listing = mongoose.models.Listing || mongoose.model('Listing', listingSchema);