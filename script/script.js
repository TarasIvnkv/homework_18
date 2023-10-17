let promiseMoney = new Promise(
    function(resolve, reject){
        setTimeout(() => {
            let getMoney = confirm(`Do you want to get money?`); 
            getMoney ? resolve() : reject();
        }, 1000)
    }
)

promiseMoney    
    .then(
        () => {
            let amount = prompt(`Enter amount`);
            return amount;
            
        },
        () => {
            let langauge = prompt(`Choose language for info: Ukrainian, German, English`);
            return Promise.reject(langauge);
        }
    )
    .then(
        (amount) => {
            let currency = prompt(`Choose currency: USD, EUR, UAH`);
            return {amount, currency};
        },
        (langauge) => {
            let email = prompt(`Enter email`);
            return Promise.reject(langauge, email);
        }
    )
    .then(
        (amount,currency) => {
            console.log(`Take ${amount}${currency} please`);
        },
        (langauge, email) => {
            console.log(`Information about the account was sent to the ${email} in ${langauge}.`);
        }
    )
    .finally(
        () => {
            console.log(`Goodbye and have a good day!`);
        }
    )
