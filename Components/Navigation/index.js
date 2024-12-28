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
                <img src="../../Assets/General/Logo.svg" alt="">
                <ul class="navBarList" id="navBarList">
                <a href="../../Pages/Home/index.html"><li class="dropDownListItem">Home</li></a>
                <a href="../../Pages/Listings/index.html"><li class="dropDownListItem">Listings</li></a>
                    <li class="dropDownListItem">Blog</li>
                    <li class="dropDownListItem">Pages</li>
                    <span class="navBarListAlignment">
                <a href="../../Pages/About_Us/index.html"><li class="nothingListItem">About</li></a>
                    <li class="nothingListItem">Contact</li>
                    </span>
                    <div class="contactNumber">
                        <img src="../../Assets/NavigationAssets/Phone.svg" alt="">
                        <p>+75 123 456 789</p>
                    </div>
                </ul>
            </div>
            <div class="navBarRight">
              <a href="../SignInPages/LogIn/index.html">  <div class="signIn">
                    <img src="../../Assets/NavigationAssets/UserIcon.svg" alt="">
                    <p>Sign In</p>
                </div></a>
                <button class="submitListingButton">
                    Submit Listing
                </button>
            </div>
            <div class="burgerDiv" onclick="handleBurgerMenu()">
                <img class="burgerIcon" id="burgerMenu" src="../../Assets/NavigationAssets/BurgerIcon.svg" alt="Menu Icon">
            </div>
        </nav>
    </header>
        `
    }
}
customElements.define('nav-bar-component', NavigationComponent)


const listContainerElement = document.getElementById("navBarList")
let isOpened = false
const handleBurgerMenu = () => {
    isOpened = !isOpened 
    if (isOpened){
        listContainerElement.style.display = 'flex'
        listContainerElement.className = 'navBarListMobile'
    }else if (!isOpened){
        listContainerElement.style.display = 'none'
    }
}