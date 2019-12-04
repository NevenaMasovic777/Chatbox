import { Content } from "./content"
import { Header } from "./header"

class Dashboard{
    constructor(){
        this.node = document.createElement('dashboard-div')
        this.node.className = 'dashboard-div'

        this.header = new Header()
        this.node.appendChild(this.header.getNode())

        this.content = new Content()
        this.node.appendChild(this.content.getNode())
    }
    getNode(){
        return this.node
    }
}

export{
    Dashboard
}