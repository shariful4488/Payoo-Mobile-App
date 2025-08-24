const validPin = 1234;
const transactionData = []

// function to get input value
function getInputValueNumber(id) {
    const inputField = document.getElementById(id);
    return parseInt(inputField.value);
}

function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    return inputFieldValue
}

// function to get text value
function getInnerText(id){
    const element = document.getElementById(id);
    const elementValue = parseInt(element.innerText);
    const elementValueNumber = parseInt(elementValue);
    return elementValueNumber;
}
// function to set text value
function setInnerText(value){
    const availableBalance = document.getElementById("available-balance")
    availableBalance.innerText = value;
    
}

// function to toggle
function handleToggle(id){
    const forms = document.getElementsByClassName("form")

    for(const form of forms){
        form.style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}

// function to toggle button
function handleToggleBtn(id){
    const formBtns = document.getElementsByClassName("form-btn")
    for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]");
        btn.classList.add("border-gray-300");
    }
    document.getElementById(id).classList.remove("border-gray-300");
    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]");
}
// add money feature
document.getElementById("add-money-btn").addEventListener("click", function(e){
    e.preventDefault();

    const bank = getInputValue("bank");
    const accountNumber = document.getElementById("bank-account-number").value;
    const amount = getInputValueNumber("amount-add");   // ✅ correct id
    if(amount<=0){
        alert("Invalid amount");
        return;
    }


    const pin = parseInt(document.getElementById("add-pin").value);
    const availableBalance = getInnerText("available-balance");



    if(accountNumber.length < 11){
        alert("Please enter a valid account number");
        return;
    }
    if(pin !== validPin){
        alert("Please enter a valid pin");
        return;
    }
    if(isNaN(amount) || amount <= 0){
        alert("Please enter a valid amount");
        return;
    }

    const totalNewAvailableBalance = availableBalance + amount;

    setInnerText(totalNewAvailableBalance);

    // store transaction data
    const data = {
        name: "Add Money",
        date: new Date().toLocaleDateString()  
      }
    transactionData.push(data);
});

// cash out feature
document.getElementById("withdraw-btn").addEventListener("click", function(e){
    e.preventDefault();

    const amount = getInputValueNumber("withdraw-amount");
    const availableBalance = getInnerText("available-balance");

    if(amount <=0 || amount>availableBalance){
        alert("Invalid amount");
        return;
    }

    if(isNaN(amount) || amount <= 0){
        alert("Please enter a valid amount");
        return;
    }
    if(amount > availableBalance){
        alert("Insufficient balance");
        return;
    }

    const totalNewAvailableBalance = availableBalance - amount;
    setInnerText(totalNewAvailableBalance);

    // store transaction data
    const data = {
        name: "Cash Out",
        date: new Date().toLocaleDateString()  
      }
    transactionData.push(data);
    console.log(transactionData);
});

document.getElementById("transaction-btn").addEventListener("click", function(){
    const transactionContainer = document.getElementById("transaction-container")
    transactionContainer.innerText = ""
    for(const data of transactionData){
        const div = document.createElement("div");
        div.innerHTML = `
         <div class=" bg-white rounded-xl p-3 flex justify-between items-center">
            <div class="flex items-center">
                 <div class=" p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./assets/wallet1.png" class="mx-auto" alt="">
                 </div>
                 <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                 </div> 

            </div>

            <i class="fa-solid fa-ellipsis-vertical"></i>
           </div>
        `

        transactionContainer.appendChild(div);
    }
})

// toggling feature
// Add Money
document.getElementById("add-button").addEventListener("click", function(){
    handleToggle("add-money-parent");

   handleToggleBtn("add-button");
});
// Cash Out
document.getElementById("cashout-button").addEventListener("click", function(){
    handleToggle("cash-out-parent");

   
    handleToggleBtn("cashout-button");

});
// Transfer Money
document.getElementById("transfer-btn").addEventListener("click", function(){
    handleToggle("transfer-money-parent");

   
    handleToggleBtn("transfer-btn");
    
});
// Get Bonus
document.getElementById("bonus-btn").addEventListener("click", function(){
    handleToggle("get-bonus-parent");

    
    handleToggleBtn("bonus-btn");
});
// Pay Bill
document.getElementById("pay-bill-btn").addEventListener("click", function(){
    
    handleToggle("pay-bill-parent");
    handleToggleBtn("pay-bill-btn");

    
    
});
// Transactions
document.getElementById("transaction-btn").addEventListener("click", function(){
    
    handleToggle("transactions-parent");
    handleToggleBtn("transaction-btn");
});
