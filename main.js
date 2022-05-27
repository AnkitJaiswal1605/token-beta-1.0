Moralis.initialize("NORrQ2YEzHy74mvcqV7KVRJs4LsWF1hzhm175Ejk"); // Application id from moralis.io 
Moralis.serverURL = "https://7oyfxwjhb9sq.usemoralis.com:2053/server"; //Server url from moralis.io

init = async () => {
    window.web3 = await Moralis.enableWeb3();
}

login = async () => {
    try {
        await Moralis.Web3.authenticate();
    } catch (error) {
        alert(error);
    }
}

logout = async () => {
    await Moralis.User.logOut();
}

buy = async () => {
    
    if (await Moralis.User.current()){
       window.open('https://testnets.opensea.io/');
    } else {
        alert("Please connect wallet");
    }
        
}

const userConnectButton = document.getElementById("btnConnect");
userConnectButton.onclick = login;

const logoutButton = document.getElementById("logout");
logoutButton.onclick = logout;

const buyBtn = document.getElementById("buy-btn");
buyBtn.onclick = buy;

init();