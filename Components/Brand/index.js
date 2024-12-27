class BrandComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        const src = this.getAttribute('src')
        const title = this.getAttribute('title')
        this.innerHTML = `
            <link rel="stylesheet" href="../../Components/Brand/index.css">
            <div class="brandContainer">
                <img src="${src}" alt="">
                <h4>${title}</h4>
            </div>
        `
    }
}
customElements.define('brand-component', BrandComponent)