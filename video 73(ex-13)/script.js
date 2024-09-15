function GetCard(title,channelName,views,monthsOld,duration,thumbnail) {

    if(views < 1000000){
         views = views/1000 + "k"
    }
    else if(views>=1000000){
         views = views/1000000 + "M"
    }
    else{
        views = views/100 + "k"
    }


    let card = `<div class="container">

    <div class="card">
        <img  src="${thumbnail}"
            alt="">

        <div class="text">
            ${title}
        </div>

        <ul>
            <li>${channelName}</li>
            <li>${views} views</li>
            <li>${monthsOld} months ago</li>
        </ul>

        <div class="duration">
            <button>${duration}</button>
        </div>

    </div>
</div>`

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("afterend",card)
}

GetCard("NAUGHTY SAGAR SHAH COMPILATION","Samay Raina",1500000,36,"11:17","https://i.ytimg.com/vi/STpL8__Prw8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcWr3gTix8RdKxpi85Vlq-OVAOVQ")


GetCard("WhatsApp ki Taakat! | What the Bunk | BB Ki Vines","BB ki Vines",32000000,48,"5:37","https://i.ytimg.com/vi/RXeLbs_ogDU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpLMnore7ucHBpflojamDLzyzWzA")

GetCard("RUK RUK RUK ft. @MortaLyt and @sc0utOP | TMJ Highlight Season 3 Episode 7","Suhani Shah",1000000,24,"14:07","https://i.ytimg.com/vi/KDWNxsaz0wY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDN0qwPqYK9yLePdkdH4MKTPm-JTQ")


GetCard("irl stream in Spain Madrid 🇪🇸","IShowSpeed",1800000,1,"1:19:44","https://i.ytimg.com/vi/n-KG_C7Sui4/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhoIC0ofzAP&rs=AOn4CLCT73cCJ7rSs0HThFmUDuFmPsguyg")




