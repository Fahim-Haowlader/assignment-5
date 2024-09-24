
function pageView(button1, button2, div1, div2) {
    // console.log(id1)
    let donationButton = document.getElementById(button1);
    let historyButton = document.getElementById(button2);

    donationButton.addEventListener('click', () => {
        // console.log(document.getElementById(id1))
        donationButton.classList.remove('previous-button');
        donationButton.classList.add('present-button');
        historyButton.classList.remove('present-button');
        historyButton.classList.add('previous-button');
        document.getElementById(div2).style.display = 'none';
        document.getElementById(div1).style.display = 'block';
    })

    historyButton.addEventListener('click', () => {
        // console.log(document.getElementById(id2))
        donationButton.classList.remove('present-button');
        donationButton.classList.add('previous-button');
        historyButton.classList.remove('previous-button');
        historyButton.classList.add('present-button');
        document.getElementById(div1).style.display = 'none';
        document.getElementById(div2).style.display = 'block';
    })

}

function donationCheck(inputid, submitid, confirmationid,campainid,campaintitle,modalid) {
    let submit = document.getElementById(submitid);
    
    submit.addEventListener('click', () => {
        let donationAmount = Number(document.getElementById(inputid).value);
        let myBlance = document.getElementById('balance')
        let myBalaceAmount = Number(myBlance.innerText)
      
        if ( donationAmount == ""){
            alert("Please enter a valid donation amount");
        }
        else if (isNaN(donationAmount)) {
            alert("Please enter a valid number");
        } else if (donationAmount <= 0) {
            alert("Please enter a positive number");
        } else if (donationAmount > myBalaceAmount) {
            alert('you do not have enough balance')
        } else {       
            let confirmation = document.getElementById(confirmationid);
            // console.log(confirmation)
            document.getElementById(modalid).classList.remove("hidden"); 
            
            confirmation.addEventListener("click", function() {
                document.getElementById(modalid).classList.add("hidden");
               document.getElementById(inputid).value = "";
            });
            
                let donationAmount = Number(document.getElementById(inputid).value);
         
                let campaignBalance = document.getElementById(campainid)
                let campaignBalanceAmount = Number(campaignBalance.innerText)
                let newBalance = campaignBalanceAmount + donationAmount
                campaignBalance.innerText = newBalance           
                myBlance.innerText = eval(myBalaceAmount - donationAmount) 
               
            
            let donationtitle = document.getElementById(campaintitle).innerText
            let donationHistory = document.getElementById('donation-history')
            let time = new Date()
            donationHistory.innerHTML += `<div class="border border-gray-200 px-7 md:px-10 py-2 md:py-5 my-10 rounded-xl">
            <h1 class="text-xl md:text-3xl py-2 md:py-5 font-semibold"> ${donationAmount} ${donationtitle} </h1>
            <p class="px-3 md:px-5 py-2 md:py-5 text-lg md:text-xl text-gray-700"> Date : ${time} </p>
            </div>
                `
            
        }
    })
}