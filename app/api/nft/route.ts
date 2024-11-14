import { NextResponse } from 'next/server';
import connectDB from '@/back/lib/mongodb';
import { NFTController } from '@/back/controllers/nft.controllers';

export async function POST(request: Request) {
    try {
        await connectDB();
        
        const formData = await request.formData();
        const walletAddress = formData.get('walletAddress') as string;
        const name = formData.get('name') as string;
        const description = formData.get('description') as string;
        const image = formData.get('image') as File;
        const attributes = JSON.parse(formData.get('attributes') as string || '[]');

        if (!walletAddress || !name || !image) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const nft = await NFTController.createNFT(
            walletAddress,
            name,
            description,
            image,
            attributes
        );

        return NextResponse.json({ nft });
    } catch (error) {
        console.error('Error creating NFT:', error);
        return NextResponse.json(
            { error: 'Failed to create NFT' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await connectDB();
        const nfts = await NFTController.getAllNFTs();
        return NextResponse.json({ nfts });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch NFTs' },
            { status: 500 }
        );
    }
}
