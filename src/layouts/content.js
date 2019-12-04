import { Messages } from "../components/messages"
import { InputUser } from "../components/user_input";
import { InputMessage } from "../components/message_input";
import { get_user_messages, add_user_message} from "../utilities/message-service";




class Content {
    constructor() {
        this.node = document.createElement('content-div')
        this.node.className = 'content-div'

        let user = new InputUser()
        let messages = new Messages()
        let add_message = new InputMessage()

        this.node.appendChild(user.getNode())
        this.node.appendChild(messages.getNode())
        this.node.appendChild(add_message.getNode())

        user.setbtnAddOnClick(function () {
            console.log(user.inputusername.value)
            let username = user.inputusername.value
            if(username.trim() == ''){
                return alert('You must enter username')
            }

            get_user_messages(username).then(data =>
                console.log(data))
            }
        )

        add_message.setBtnAddMessage(function (){
            let username = user.inputusername.value
            let message = add_message.input_message.value

            add_user_message(username,message).then(response => {
                console.log(response)
                messages.load_Messages()
            })

        })
    }
    getNode() {
        return this.node
    }
}

export {
    Content
}