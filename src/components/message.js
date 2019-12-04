class Message{
    constructor(data){
        this.data =data

        this.node = document.createElement('message-div')
        this.node.className = 'message-div'

        this.username = data.username
        this.message = data.message
        this.timestamp = data.timestamp

        this.txt_username = document.createElement('p')
        this.txt_username.textContent = `username: ${this.username}`
        this.txt_username.style.fontSize = '14pt'

        this.txt_message = document.createElement('p')
        this.txt_message.textContent = this.message

        this.txt_timeStamp = document.createElement('p')
        this.txt_timeStamp.textContent = new Date(this.timestamp).toLocaleTimeString({hour12: true})
        this.txt_timeStamp.style.fontSize = '10pt'

        this.node.appendChild(this.txt_username)
        this.node.appendChild(this.txt_message)
        this.node.appendChild(this.txt_timeStamp)
    }
    getNode(){
        return this.node
    }
        
}

export {
    Message
}