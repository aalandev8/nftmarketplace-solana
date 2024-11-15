import { NextResponse } from "next/server";
import connectDB from "@/back/lib/mongodb";
import { NFTController } from "@/back/controllers/nft.controllers";

export async function GET(
  request: Request,
  context: { params: Promise<{ mintAddress: string }> }
) {
  try {
    await connectDB();

    // Extraemos mintAddress de los parámetros de la URL
    const mintAddress = (await context.params).mintAddress;

    if (!mintAddress) {
      return NextResponse.json(
        { error: "Missing mintAddress parameter" },
        { status: 400 }
      );
    }

    const nft = await NFTController.getNFTByMintAddress(mintAddress);

    if (!nft) {
      return NextResponse.json({ error: "NFT not found" }, { status: 404 });
    }

    return NextResponse.json({ nft });
  } catch (error) {
    console.error("Error fetching NFT:", error);
    return NextResponse.json({ error: "Failed to fetch NFT" }, { status: 500 });
  }
}
