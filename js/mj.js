
function msgTriggered(event) {
    if(!event.data) return;
    let msgData = event.data;
    console.log('Got', msgData);
}

window.addEventListener("message", msgTriggered);