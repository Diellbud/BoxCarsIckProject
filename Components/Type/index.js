class TypeComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        const name = this.getAttribute('name')
        const source = this.getAttribute('source')
        this.innerHTML = `
            <link rel="stylesheet" href="../../Components/Type/index.css">
            <div class="typeItem">
                 <img class="typeImg" src="${source}" alt="SUV_IMG">
                 <h4>${name}</h4>
            </div>
        `
    }
}
customElements.define('type-component', TypeComponent)