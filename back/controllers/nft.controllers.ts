import { User, NFT } from "@/back/models";
import fs from "fs";
import path from "path";

export class NFTController {
  static async createNFT(
    walletAddress: string,
    name: string,
    description: string,
    image: File,
    attributes: any[]
  ) {
    try {
      // Buscar usuario o crearlo si no existe
      let user = await User.findOne({ walletAddress });
      if (!user) {
        user = await User.create({
          walletAddress,
          username: `user_${walletAddress.slice(0, 6)}`,
        });
      }

      // Guardar imagen localmente
      const buffer = Buffer.from(await image.arrayBuffer());
      const fileName = `${Date.now()}-${image.name}`;
      const uploadDir = path.join(process.cwd(), "public", "uploads");

      // Crear el directorio si no existe
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      fs.writeFileSync(path.join(uploadDir, fileName), buffer);
      const imageUrl = `/uploads/${fileName}`;

      // Generar un mintAddress único
      const mintAddress = `mint_${Date.now()}_${Math.random()
        .toString(36)
        .substr(2, 9)}`;

      // Crear NFT en la base de datos
      const nft = await NFT.create({
        owner: user._id,
        creator: user._id, // Usando el ID del usuario como creator
        mintAddress,
        name,
        description,
        imageUrl,
        attributes,
      });

      // Poblar tanto owner como creator
      return await nft.populate(["owner", "creator"]);
    } catch (error) {
      console.error("Error in createNFT:", error);
      throw error;
    }
  }

  static async getAllNFTs() {
    try {
      return await NFT.find().populate(["owner", "creator"]);
    } catch (error) {
      console.error("Error in getAllNFTs:", error);
      throw error;
    }
  }
  static async getNFTByMintAddress(mintAddress: string) {
    try {
      return await NFT.findOne({ mintAddress }).populate(["owner", "creator"]);
    } catch (error) {
      console.error("Error in getNFTByMintAddress:", error);
      throw error;
    }
  }
}
