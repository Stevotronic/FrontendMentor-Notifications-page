const notificationCounter = document.getElementById('notificationCounter');
const newMessages = document.querySelectorAll('.newMessage');
const bullets = document.querySelectorAll('.bullet');
const removeClass = ()=>{
    notificationCounter.innerHTML='0';
    newMessages.forEach(element => {
        element.classList.remove("newMessage");
    });
    bullets.forEach(element => {
        element.style.visibility='hidden'
    })
}