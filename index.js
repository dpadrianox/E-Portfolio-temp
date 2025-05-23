// template_zzrgzns
// service_pjk6a7o
// jTE51flZyJ7Dzrp-Y

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll('.shape');
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
    }
}



function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme";
}
    else {
        document.body.classList.remove("dark-theme");
    }
}
function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " model__overlay--visible"

    emailjs
        .sendForm(
            'service_pjk6a7o',
            'template_zzrgzns',
            event.target,
            'jTE51flZyJ7Dzrp-Y'
    ).then(() => {
        // throw new Error('fake error');
        loading.classList.remove("model__overlay--visible")
        success.classList += " model__overlay--visible"
    }).catch(() => {
        loading.classList.remove("model__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly at dpadrianox@gmail.com."
        )
    })
    // setTimeout(() => {
        
    //     console.log('it worked2')}, 1000)
    }

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}