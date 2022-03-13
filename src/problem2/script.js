const addressInput = document.getElementById('input-address');
const amountInput = document.getElementById("input-amount");
const otpInput = document.getElementById('input-otp');

const toggleInput = document.getElementById('flexSwitchCheckChecked');
const darkModeText = document.getElementById('dark-mode-text');
const lightModeText = document.getElementById('light-mode-text');
const form = document.getElementsByTagName('form')[0];


const formlabels = document.getElementsByClassName("form-label");
const formHeader = document.getElementsByTagName("h1")[0];

const formCard = document.getElementsByClassName("card")[0];
const sendTokensButton = document.getElementById('sendTokensButton');
const getOTPButton = document.getElementById('getOTPButton');
const otpInfo = document.getElementById('otpInfo');

const modalText = document.getElementById("modal-text");
const modalContent = document.getElementsByClassName("modal-content")[0];
const modal = document.getElementsByClassName("modal")[0];

const closeButton = document.getElementById("closeButton");
const doneModalButton = document.getElementById('doneModalButton');

const invalidMessageAddress = document.getElementsByClassName("invalid-feedback")[0];
const invalidMessageAmount = document.getElementsByClassName("invalid-feedback")[1];
const invalidMessageOTP = document.getElementsByClassName("invalid-feedback")[2];

const modalBackDrop = document.getElementsByClassName("modal-backdrop")[2];
form.addEventListener('submit', (e) => {
    e.preventDefault();
})


//prevent non-number of otp
otpInput
    .addEventListener("keypress", function (event) {
        if (isNaN(event.key)) {
            event.preventDefault();
        }

    });


// Changing from light to dark mode
toggleInput.addEventListener("click", function () {
    lightModeText.classList.toggle("disappear");
    darkModeText.classList.toggle("disappear");
    for (let formlabel of formlabels) {
        formlabel.classList.toggle("text-white");
    }
    formHeader.classList.toggle("text-white");
    formCard.classList.toggle("card-dark-mode");
    sendTokensButton.classList.toggle("text-white");
    doneModalButton.classList.toggle("text-white");
    sendTokensButton.classList.toggle("btn-dark");
    doneModalButton.classList.toggle("btn-dark");
    sendTokensButton.classList.toggle("btn-outline-secondary");
    doneModalButton.classList.toggle("btn-outline-secondary");
    getOTPButton.classList.toggle("btn-secondary");

    otpInfo.classList.toggle("text-white");
    if (toggleInput.checked) {
        sendTokensButton.classList.remove("btn-primary");

        getOTPButton.classList.remove("otp-button-light");
        doneModalButton.classList.remove("btn-primary");
    }
    else {
        sendTokensButton.classList.add("btn-primary");
        doneModalButton.classList.add("btn-primary");

        getOTPButton.classList.add("otp-button-light")
    }
    modalText.classList.toggle("text-white");
    modalContent.classList.toggle("modal-content-dark");
    closeButton.classList.toggle("btn-close-white");
});





// Disabling it for 2 mins each time is clicked
getOTPButton.addEventListener("click", function () {

    getOTPButton.disabled = true
    setTimeout(function () { getOTPButton.disabled = false; }, 120000);


});

//Toggling popup modal only when form is valid
sendTokensButton.addEventListener("click", function (e) {
    if (form.checkValidity()) {
        const myModal = new bootstrap.Modal(document.getElementById('successModalToggle'), {});
        myModal.show();
    }
})
//validation
form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }

    if (addressInput.value.trim().length !== 42) {
        invalidMessageAddress.innerText = "Invalid Address length!";
    }

    else {
        invalidMessageAddress.innerText = "Invalid ETH address!";
    }

    if (otpInput.value.trim().length !== 6) {
        invalidMessageOTP.innerText = "Invalid OTP!";
    }
    console.log(amountInput.value.trim() );

    if (amountInput.value.trim() === "") {
        invalidMessageAmount.innerText = "Invalid Amount!";
    }
    if (amountInput.value.trim().substr(amountInput.value.trim().indexOf(".")+ 1, amountInput.value.trim().length).length > 9) {
        invalidMessageAmount.innerText = "Up to 9 decimal places only!";
    }
    form.classList.add('was-validated')
}, false)


amountInput.addEventListener('click',event => {
    form.classList.remove('was-validated')
})


addressInput.addEventListener('click',event => {
    form.classList.remove('was-validated')
})

otpInput.addEventListener('click',event => {
    form.classList.remove('was-validated')
})
