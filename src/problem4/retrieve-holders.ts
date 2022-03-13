import { JsonRpcProvider } from '@ethersproject/providers';
import { Contract, ethers } from 'ethers';
const provider: JsonRpcProvider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/");

const contractAddress: string = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c";

const addresses: string[] = ["0x123d475e13aa54a43a7421d94caa4459da021c77", "0x0020c5222a24e4a96b720c06b803fb8d34adc0af", "0xfe808b079187cc460f47374580f5fb47c82b87a5"]


const getBalance = async (address: string) => {
    const ABI: string[] = ['function balanceOf(address account) view returns (uint256)'];
    const readOnlyContract: Contract = new ethers.Contract(contractAddress, ABI, provider);
    const value: number = await readOnlyContract.balanceOf(address);
    return ethers.utils.formatUnits(value, 8);
}

const main = async () => {
    for (const address of addresses) {
        await getBalance(address).then(res => console.log(`${address} ${res}`)).catch(err => console.log(err))
    }

}

main();