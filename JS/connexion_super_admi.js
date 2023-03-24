let btn = document.querySelector('#btn') ;

const form = document.querySelector('form')
form.addEventListener('submit', function(alt) {
    alt.preventDefault()

    US = JSON.parse(localStorage.getItem('utilisateur'))
    US.forEach(element => {
        if( 
            ((document.querySelector('#pass').value === element.email) && (document.querySelector('#cpass').value === element.motdepass)) 
            || 
            ((document.querySelector('#pass').value === element.email) && (document.querySelector('#cpass').value === element.motdepass))
        ){
            window.location.href = ""
        } else {
            window.location.href = ""
        }
    });
})

btn.addEventListener('submit',function (alt){
    alt.preventDefault()
})