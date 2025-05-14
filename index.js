// template_zzrgzns
// service_pjk6a7o
// jTE51flZyJ7Dzrp-Y

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

