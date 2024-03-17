window.addEventListener("DOMContentLoaded", () => {  
    const emailBtn = document.getElementById('email-btn');

    if (emailBtn) {
        emailBtn.addEventListener('click', (event) => {
            copyURL();
            // alert('email successfully copied');
        })
    }

    function copyURL() {
        let emailID = 'gavintaylor.ai@gmail.com'
        
        navigator.clipboard.writeText(emailID).then(function() {
            console.log('Async: Copying to clipboard was successful!');
        }, function(err) {
            console.error('Async: Could not copy text: ', err);
        });
    }

})