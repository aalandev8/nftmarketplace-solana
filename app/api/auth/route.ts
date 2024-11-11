import { NextResponse } from 'next/server';
import connectDB from '@/back/lib/mongodb';
import { UserController } from '@/back/controllers/user.controller';

export async function POST(request: Request) {
    try {
        await connectDB();
        const { walletAddress } = await request.json();
        
        if (!walletAddress) {
            return NextResponse.json(
                { error: 'Wallet address is required' },
                { status: 400 }
            );
        }

        const user = await UserController.findOrCreateUser(walletAddress);
        return NextResponse.json({ user });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}