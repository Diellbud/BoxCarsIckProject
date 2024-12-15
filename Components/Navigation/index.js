class NavigationComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        this.innerHTML = `
            <link rel="stylesheet" href="../../Components/Navigation/index.css">
            <header>
        <nav class="navBar">
            <div class="navBarLeft">
                <img src="../../Assets/Logo.svg" alt="">
                <ul class="navBarList">
                    <li class="dropDownListItem">Home</li>
                    <li class="dropDownListItem">Listings</li>
                    <li class="dropDownListItem">Blog</li>
                    <li class="dropDownListItem">Pages</li>
                    <span class="navBarListAlignment">
                    <li class="nothingListItem">About</li>
                    <li class="nothingListItem">Contact</li>
                    </span>
                    <div class="contactNumber">
                        <img src="../../Assets/Phone.svg" alt="">
                        <p>+75 123 456 789</p>
                    </div>
                </ul>
            </div>
            <div class="navBarRight">
                <div class="signIn">
                    <img src="../../Assets/UserIcon.svg" alt="">
                    <p>Sign In</p>
                </div>
                <button class="submitListingButton">
                    Submit Listing
                </button>
            </div>
        </nav>
    </header>
        `
    }
}
customElements.define('nav-bar-component', NavigationComponent)