
function msgTriggered(event) {
    if(!event.data || !event.data.msgType) return;
    let msgType = event.data.msgType;


    switch (msgType) {
        case "getData":
            let obj = {
                msgType: msgType,
                msgKey: msgKey,
                value: localStorage.getItem(event.data.msgKey)
            }

            event.source.postMessage(obj, "*");
            break;
        case "setData":
            break;

        default:
            data = {};
    }
    console.log('Got', msgData);
}

window.addEventListener("message", msgTriggered);