import { Message } from "./message";
import { get_all_messages } from "../utilities/message-service";

class Messages{
    constructor(){
        this.node = document.createElement('div')
        this.node.className = 'messages-div'
        this.load_Messages()
        setInterval(() => { this.load_Messages() }, 2000);
        
    }

    load_Messages() {
        get_all_messages().then(data => {
            data.data.forEach(element => {
                this.messageInfo = new Message(element)
                this.node.appendChild(this.messageInfo.getNode())
            });
        })
        
    }
    
    getNode(){
        return this.node
    }
}

export{
    Messages
}