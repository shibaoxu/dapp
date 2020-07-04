import web3 from "@/utils/web3-utils.js";
import ABI from "./SocialMusic.json";
import config from "@/config.json";

const abi = ABI.abi;
// const contractAddress = config.contractAddress;
const contractAddress = ABI.networks['3'].address
const contractInstance = new web3.eth.Contract(abi, contractAddress);

export async function getAccounts(){
    return (await web3.eth.getAccounts())
}
export async function initialAccount(name, age, state){
    const accounts = await getAccounts()
    await contractInstance.methods.initialAccount(name, age, state).send({
        from: accounts[0]
    });
}

export async function addMusic(song){
    const accounts = await getAccounts()
    await contractInstance.methods.addSong(song).send({
        from: accounts[0]
    });
}

export async function getFollowPeopleUsersData() {
    const accounts = await getAccounts();
    let userAddresses = await contractInstance.methods.getUsersList().call({from: accounts[0]});
    let usersObjects = [];
    if ((userAddresses.length) > 10 ) {
        userAddresses = userAddresses[0, 10];
    }

    for (let i = 0; i < userAddresses.length; i++){
        let {age, name, state} = await contractInstance.methods.users(userAddresses[i]).call({from: accounts[0]});
        let userData = {
            address: userAddresses[i],
            age,
            name,
            state,
            recommendations: [],
            following: []
        };
        let usersMusicRecommendationLength = await contractInstance.methods.getUsersMusicRecommendationLength(userAddresses[i]).call({from: accounts[0]});
        if (usersMusicRecommendationLength > 2) {
            usersMusicRecommendationLength = 2;
        }
        for(let j = 0; j < usersMusicRecommendationLength; j++){
            const recommendation = await contractInstance.methods.getUsersMusicRecommendation(userAddresses[i], j).call({from: accounts[0]});
            userData.recommendations.push(recommendation);
        }

        let following = await contractInstance.methods.getUsersFollowings(userAddresses[0]).call({from: accounts[0]});
        userData.following = following;
        usersObjects.push(userData)
    }
    return usersObjects;    
}

export async function followUser(address){
    await contractInstance.methods.follow(address).send({from: accounts[0]})
}
