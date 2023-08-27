let NFTs=[]

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, Color, shirtType) {
    const nft = {
      name: name,
      Color: Color,
      shirtType: shirtType,
    };
    NFTs.push(nft);
  }

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
      console.log("Name: " + NFTs[i].name);
      console.log("Eye Color: " + NFTs[i].Color);
      console.log("Shirt Type: " + NFTs[i].shirtType);
      console.log("--------------------------");
    }
  }

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return NFTs.length;
  }
  

// call your functions below this line
mintNFT("NFT 1", "Blue", "T-shirt", );
mintNFT("NFT 2", "Green", "Hoodie", );
mintNFT("NFT 3","Red","Shirt",);
listNFTs();
console.log("Total Supply: " + getTotalSupply());
