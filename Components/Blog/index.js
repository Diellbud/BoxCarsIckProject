class BlogComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    } 
    render() {
        const blogImg = this.getAttribute('blogImg') 
        const isSound = this.getAttribute('sound') == "True" 
        const isAccessories = this.getAttribute('accessories') == "True" 
        const isExterior = this.getAttribute('exterior') == "True" 
        const Writer = this.getAttribute('writer') 
        const Date = this.getAttribute('date') 
        const BlogTitle = this.getAttribute('blogTitle')
        let blogValue = '';
        if (isSound) {
            blogValue += `<div class="blogType soundBlogType"><p>Sound</p></div>`;
        }
        else if (isAccessories) {
            blogValue += `<div class="blogType accessoriesBlogType"><p>Accessories</p></div>`;
        }
        else if (isExterior) {
            blogValue += `<div class="blogType exteriorBlogType"><p>Exterior</p></div>`;
        }
        this.innerHTML = `
    <link rel="stylesheet" href="../../Components/Blog/index.css">
    <div class="blogContainer">
        <div class="blogImgContainer"> 
            <img class="blogImg" src="${blogImg}" alt="">
            ${blogValue}
        </div>
        <div class="blogDetails">
            <div class="blogInfo">
                <p>${Writer}</p>
                <p>${Date}</p>
            </div>
            <h3>${BlogTitle}</h3>
        </div>
    </div>
        `
    }
}
customElements.define('blog-component', BlogComponent)
