Moralis.initialize("https://ohlxu0dku5eo.usemoralis.com:2053/server"); // Application id from moralis.io 
Moralis.serverURL = "https://ohlxu0dku5eo.usemoralis.com:2053/server"; //Server url from moralis.io

init = async () => {
    window.web3 = await Moralis.enableWeb3();
}

login = async () => {
    try {
        await Moralis.Web3.authenticate();
        document.getElementById("btnConnect").innerHTML = "Connected";
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

faq1Open = () => {
    document.getElementById("ad1").style.display = "none";
    document.getElementById("au1").style.display = "flex";
    document.getElementById("ans1").style.display = "flex";
}

faq1Close = () => {
    document.getElementById("ad1").style.display = "flex";
    document.getElementById("au1").style.display = "none";
    document.getElementById("ans1").style.display = "none";
}

faq2Open = () => {
    document.getElementById("ad2").style.display = "none";
    document.getElementById("au2").style.display = "flex";
    document.getElementById("ans2").style.display = "flex";
}

faq2Close = () => {
    document.getElementById("ad2").style.display = "flex";
    document.getElementById("au2").style.display = "none";
    document.getElementById("ans2").style.display = "none";
}

faq3Open = () => {
    document.getElementById("ad3").style.display = "none";
    document.getElementById("au3").style.display = "flex";
    document.getElementById("ans3").style.display = "flex";
}

faq3Close = () => {
    document.getElementById("ad3").style.display = "flex";
    document.getElementById("au3").style.display = "none";
    document.getElementById("ans3").style.display = "none";
}

faq4Open = () => {
    document.getElementById("ad4").style.display = "none";
    document.getElementById("au4").style.display = "flex";
    document.getElementById("ans4").style.display = "flex";
}

faq4Close = () => {
    document.getElementById("ad4").style.display = "flex";
    document.getElementById("au4").style.display = "none";
    document.getElementById("ans4").style.display = "none";
}

faq5Open = () => {
    document.getElementById("ad5").style.display = "none";
    document.getElementById("au5").style.display = "flex";
    document.getElementById("ans5").style.display = "flex";
}

faq5Close = () => {
    document.getElementById("ad5").style.display = "flex";
    document.getElementById("au5").style.display = "none";
    document.getElementById("ans5").style.display = "none";
}

faq6Open = () => {
    document.getElementById("ad6").style.display = "none";
    document.getElementById("au6").style.display = "flex";
    document.getElementById("ans6").style.display = "flex";
}

faq6Close = () => {
    document.getElementById("ad6").style.display = "flex";
    document.getElementById("au6").style.display = "none";
    document.getElementById("ans6").style.display = "none";
}

mobileNavbarOpen = () => {
    document.getElementById("mobile-intro").style.display = "flex";
    document.getElementById("navbar").style.display = "none";
    document.getElementsByClassName("video-container")[0].style.display="none";
    var x = document.getElementsByClassName("wrap");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
}

mobileNavbarClose = () => {
    document.getElementById("mobile-intro").style.display = "none";
    document.getElementById("navbar").style.display = "flex";
    document.getElementsByClassName("video-container")[0].style.display="flex";
    var x = document.getElementsByClassName("wrap");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'flex';
    }
}

mobileNavbarOpen2 = () => {
    document.getElementById("mobile-intro2").style.display = "flex";
    document.getElementById("navbar2").style.display = "none";
    var x = document.getElementsByClassName("hide");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
}

mobileNavbarOpen3 = () => {
    document.getElementById("mobile-intro3").style.display = "flex";
    document.getElementById("navbar3").style.display = "none";
    document.getElementsByClassName("image-container")[0].style.display = "none";
    document.getElementsByClassName("right-section")[0].style.display = "none";
    document.getElementsByClassName("wrapFooter")[0].style.display = "none";
}

mobileNavbarOpen4 = () => {
    document.getElementById("mobile-intro4").style.display = "flex";
    document.getElementById("navbar4").style.display = "none";
    document.getElementsByClassName("banner")[0].style.display = "none";
    document.getElementsByClassName("banner-layer")[0].style.display = "none";
    document.getElementsByClassName("wrapSongList")[0].style.display = "none";
    document.getElementsByClassName("wrapFooter")[0].style.display = "none";
}

const userConnectButton = document.getElementById("btnConnect");
userConnectButton.onclick = login;

const logoutButton = document.getElementById("logout");
logoutButton.onclick = logout;

const buyBtn = document.getElementById("buy-btn");
buyBtn.onclick = buy;

init();