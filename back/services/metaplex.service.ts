import { 
    Metaplex, 
    walletAdapterIdentity,
    toMetaplexFileFromBrowser,
    irysStorage,
    toBigNumber
} from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";

export class MetaplexService {
    private metaplex: Metaplex;
    private connection: Connection;

    constructor() {
        this.connection = new Connection(clusterApiUrl('devnet'));
        this.metaplex = Metaplex.make(this.connection)
            .use(irysStorage());
    }

    async uploadMetadata(
        name: string,
        description: string,
        file: any,
        attributes?: Array<{ trait_type: string; value: string }>
    ) {
        try {
            const metaplexFile = await toMetaplexFileFromBrowser(file);
            const uploadedMetadata = await this.metaplex
                .storage()
                .upload(metaplexFile);

            const { uri } = await this.metaplex
                .nfts()
                .uploadMetadata({
                    name,
                    description,
                    image: uploadedMetadata,
                    attributes,
                });

            return uri;
        } catch (error) {
            console.error('Error uploading metadata:', error);
            throw error;
        }
    }

    async createNFT(
        name: string,
        description: string,
        image: string,
        walletAddress: string,
    ) {
        try {
            const { nft } = await this.metaplex
                .nfts()
                .create({
                    uri: image,
                    name,
                    sellerFeeBasisPoints: 500, // 5% royalty
                    maxSupply: toBigNumber(1) 
                });

            return {
                mintAddress: nft.address.toString(),
                name: nft.name,
                description,
                image: nft.uri,
                owner: walletAddress,
            };
        } catch (error) {
            console.error('Error creating NFT:', error);
            throw error;
        }
    }
}