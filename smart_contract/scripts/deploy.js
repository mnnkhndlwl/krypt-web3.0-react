
const main = async () => {

  const transactionsFactory = await hre.ethers.getContractFactory("Transactions"); //this is like a class that going to generate instances of that contract
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions address: ", transactionsContract.address);
}

const runMain = async () =>{
  try {
    await main();
    process.exit(0); // it means process is succesful
  } catch (error) {
    console.error(error);
    process.exit(1); // it means there is an error
  }
}

runMain();