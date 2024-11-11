import { NextResponse } from 'next/server';
import connectDB from '@/back/lib/mongodb';

export async function GET() {
    try {
        await connectDB();
        return NextResponse.json({ 
            status: 'success', 
            message: 'Connected to MongoDB successfully!' 
        });
    } catch (error) {
        console.error('Database connection error:', error);
        return NextResponse.json(
            { error: 'Failed to connect to database' },
            { status: 500 }
        );
    }
}