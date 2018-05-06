var close_button = document.getElementById('message-close-button');
var message_div = document.getElementById('success-messages');

close_button.addEventListener('click',function(){
   message_div.style.display = 'none' 
});