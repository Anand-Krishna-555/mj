function msgTriggered(event) {
    if (!event.data || !event.data.msgType) return;

    switch (event.data.msgType) {
        case "getData":
            let obj = {
                msgType: event.data.msgType,
                msgKey: event.data.msgKey,
                value: localStorage.getItem(event.data.msgKey),
            };

            event.source.postMessage(obj, "*");
            break;
        case "setData":
            break;

        default:
            data = {};
    }
    console.log("Got", msgData);
}

window.addEventListener("message", msgTriggered);
