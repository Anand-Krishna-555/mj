
function msgTriggered(event) {
    if(!event.data || !event.data.msgType) return;
    let msgType = event.data.msgType;


    switch (msgType) {
        case "getData":
            event.source.postMessage(localStorage.getItem(event.data.msgKey), "*");
            break;
        case "setData":
            break;

        default:
            data = {};
    }
    console.log('Got', msgData);
}

window.addEventListener("message", msgTriggered);