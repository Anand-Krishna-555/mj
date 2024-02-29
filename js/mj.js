function msgTriggered(event) {
    if (!event.data || !event.data.msgType) return;

    switch (event.data.msgType) {
        case "getData":
            let obj = {
                msgType: event.data.msgType,
                msgKey: event.data.msgKey,
                value: localStorage.getItem(event.data.msgKey),
            };

            // event.source.postMessage(obj, "*");
            event.source.dispatchEvent(new CustomEvent(msgType, {value: value}));
            break;
        case "setData":
            
            break;

        default:
            data = {};
    }
}

window.addEventListener("message", msgTriggered);
