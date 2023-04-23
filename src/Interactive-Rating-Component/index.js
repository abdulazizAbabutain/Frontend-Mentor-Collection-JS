
function GetThankYouCard(value){
    return `
    <div class="FeedBack-Card-Parent" id='Ratting-card'>
        <div class="FeedBack-Card-child-image"> 
            <img src="/src/Interactive-Rating-Component/images/illustration-thank-you.svg" alt="illustration-thank-you">
        </div>
        <div class="FeedBack-Card-child-Ratting">
            <div class="Ratting-Result-background">
                You selected ${value} out of 5
            </div>
        </div>
        <div class="FeedBack-Card-child-Header">
        <h2> Thank you! </h2>
        </div>
        <div class="FeedBack-Card-child-paragraph">
        <p>
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!
        </p>     
        </div>
    </div>
    `
}

function ShowThankYouCard(){
    let rattingValue = document.querySelector('.btn-ratting-number-active').getAttribute('id')
    document.body.innerHTML = GetThankYouCard(rattingValue);
}

let previousValoue = 0;
function Ratting(value){
    if(previousValoue != 0)
        document.getElementById(previousValoue).classList = 'btn-ratting-number'        
    document.getElementById(value).classList = 'btn-ratting-number-active';
    if(value != previousValoue)
        previousValoue = value;
}



