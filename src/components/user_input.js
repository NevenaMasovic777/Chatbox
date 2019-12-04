
class InputUser{
    constructor(){
        this.node = document.createElement('input-div')
        this.node.className = 'input-div'

        this.inputusername = document.createElement('input');
        this.inputusername.type = 'text';
        this.inputusername.placeholder = 'enter username';
        this.inputusername.className = 'input-div'
        

        this.btn = document.createElement('button')
        this.btn.innerHTML = 'Submit'

        this.node.appendChild(this.inputusername)
        this.node.appendChild(this.btn)

    }
    setbtnAddOnClick(onClick) {
        this.btn.addEventListener('click', onClick)
    }
    getNode(){
        return this.node
    }
    
}

export{
    InputUser
}