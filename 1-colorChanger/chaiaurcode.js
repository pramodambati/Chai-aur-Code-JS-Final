const buttons = document.querySelectorAll('.button')
console.log(buttons);

const body = document.querySelector('body')
console.log(body);

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        // console.log(e);
        console.log(e.target);        
        console.log(e.target.id);   
        
        /*switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = 'grey'
                break;
            case 'white':
                body.style.backgroundColor = 'white'
                break;
            case 'blue':
                body.style.backgroundColor = 'blue'
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow'
                break;
        
            default:
                break;
        } */

        body.style.backgroundColor = e.target.id

        // INCORRECT
        // function onClickChange(e.target.id) {
        //     body.style.backgroundColor = e.target.id
        // }
    })
    
})