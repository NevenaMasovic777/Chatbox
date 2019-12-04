class InputMessage{
    constructor(){
        this.node = document.createElement('input-div')

        this.input_message = document.createElement('input');
        this.input_message.type = 'text';
        this.input_message.className = 'input-div'

        this.input_message.id = 'username-input';
        this.input_message.placeholder = 'enter message';

        this.btn = document.createElement('button')
        this.btn.innerHTML = 'Add message'

        this.node.appendChild(this.input_message)
        this.node.appendChild(this.btn)

    }
    setBtnAddMessage(onClick){
        this.btn.addEventListener('click', onClick)
    }
    getNode(){
        return this.node
    }
}

export{
    InputMessage
}