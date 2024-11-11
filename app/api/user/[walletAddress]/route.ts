import { NextResponse } from 'next/server';
import connectDB from '@/back/lib/mongodb';
import { UserController } from '@/back/controllers/user.controller';

export async function GET(
    request: Request,
    { params }: { params: { walletAddress: string } }
) {
    try {
        await connectDB();
        const user = await UserController.getUserProfile(params.walletAddress);
        
        if (!user) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ user });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}