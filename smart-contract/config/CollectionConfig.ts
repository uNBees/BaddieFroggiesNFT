import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'BaddieFroggiesNFT',
  tokenName: 'Baddie Froggies',
  tokenSymbol: 'BADF',
  hiddenMetadataUri: 'ipfs://QmWCKUojZAxvMdvGkdYAURvaDRijtuAhSYNQuHkbGjW3jz/hidden.json',
  maxSupply: 10,
  whitelistSale: {
    price: 0.02,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0.03,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.04,
    maxMintAmountPerTx: 5,
  },
  contractAddress: null,
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
