var ImgArray = [
    './img/A.jpg',
    './img/B.jpg',
    './img/C.jpg',
    './img/D.jpg',
    './img/E.jpg',
    './img/F.jpg',
    './img/G.jpg',
    './img/H.jpg',
    './img/pepe.jpg',
];


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function imgClick(id) {
    let img;
    
    if (id == "leftImg") {
        img = "./img/" + document.getElementById("rightImg").getAttribute("src").split("/").pop();
    } else if (id == "rightImg") {
        img = "./img/" + document.getElementById("leftImg").getAttribute("src").split("/").pop();
    }

    ImgArray = ImgArray.filter(item => item !== img);

    if (ImgArray.length >= 2) {
        shuffleArray(ImgArray);
        setImage(ImgArray[0], ImgArray[1]);
    } else if (ImgArray.length < 2) {
        
        alert("끝");
        
        document.body.innerHTML = "";
        var text = document.createElement("h1");
        text.textContent = "당신의 이상형은!!";

        var lastImg = document.createElement("img");
        lastImg.src = ImgArray[0];

        document.body.append(text, lastImg);
    }
}

function setImage(leftSrc, rightSrc){
    let leftImg = document.getElementById("leftImg"); // 27번 요소를 id값으로 가져오겠다
    let rightImg = document.getElementById("rightImg"); // 31번 요소를 가져오겠다
    leftImg.src = leftSrc;
    rightImg.src = rightSrc; 
}


