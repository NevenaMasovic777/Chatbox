
class Header{
    constructor(){
        this.node = document.createElement('header-div')

        this.nodeh1 = document.createElement('h1')
        this.nodeh1.className = 'h1'
        this.nodeh1.innerHTML = 'Coetus chat'
        this.node.appendChild(this.nodeh1)
    }
    getNode(){
        return this.node
    }
}

export{
    Header
}