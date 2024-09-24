 let blogButton = document.getElementById('blog-button');
 

blogButton.addEventListener("click",()=>{
    window.location.href = "./faq.html"
    console.log('hi')

})

pageView("donation-button","histroy-button","campains","donation-history")

donationCheck("campain1-donation-amount","campain1-donation-button","donation_confirmation_ button_campain1","campin1-raise-donation","campain1-name","modal1")

 donationCheck("campain2-donation-amount","campain2-donation-button","donation_confirmation_ button_campain2","campin2-raise-donation","campain2-name","modal2")
 donationCheck("campain3-donation-amount","campain3-donation-button","donation_confirmation_ button_campain3","campin3-raise-donation","campain3-name","modal3")
  donationCheck("campain4-donation-amount","campain4-donation-button","donation_confirmation_ button_campain4","campin4-raise-donation","campain4-name","modal4")


// document.getElementById("campain1-donation-button").addEventListener("click", function() {
//   document.getElementById("modal").classList.remove("hidden");
// });

// document.getElementById("donation_confirmation_ button_campain1").addEventListener("click", function() {
//   document.getElementById("modal").classList.add("hidden");
// });
 