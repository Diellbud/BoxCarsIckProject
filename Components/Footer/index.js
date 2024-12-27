class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        this.innerHTML = `
<link rel="stylesheet" href="../../Components/Footer/index.css">
<footer>
    <div class="footerContainer">
        <div class="footerCompany">
            <h3>Company</h3>
            <ul class="companyList">
                <li>About Us</li>
                <li>Blog</li>
                <li>Services</li>
                <li>FAQs</li>
                <li>Terms</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div class="footerQuickLinks">
            <h3>Quick Links</h3>
            <ul class="quickLinksList">
                <li>Get in Touch</li>
                <li>Help Center</li>
                <li>Live Chat</li>
                <li>How it Works</li>
            </ul>
        </div>
        <div class="footerOurBrands">
            <h3>Our Brands</h3>
            <ul class="ourBrandsList">
                <li>Toyota</li>
                <li>Porshe</li>
                <li>Audi</li>
                <li>BMW</li>
                <li>Ford</li>
                <li>Nissan</li>
                <li>Peugeot</li>
                <li>Volkswagen</li>
            </ul>
        </div>
        <div class="footerVehiceles">
            <h3>Vehicles Type</h3>
            <ul class="vehicelesList">
                <li>Sedan</li>
                <li>Hatchback</li>
                <li>SUV</li>
                <li>Hybrid</li>
                <li>Eletric</li>
                <li>Coupe</li>
                <li>Truck</li>
                <li>Convertible</li>
            </ul>
        </div>
        <div class="footerContact">
            <h3>Contact</h3>
            <ul class="contactList">
                <li>+76 956 039 999</li>
                <li>ali@boxcars.com</li>
            </ul>
        </div>
        <div class="specialSocialMediaFakeContainer">
            <div class="footerSale">
                <h3>Sale Hours</h3>
                <p>Monday – Friday:<br> 09:00AM – 09:00 PM <br>
                    Saturday: <br> 09:00AM – 07:00PM <br>
                    Sunday: Closed</p>
            </div>
            <div class="socialMediaContainer">
                <h3>Connect With Us</h3>
                <div class="socialMedia">
                    <img src="../../Assets/General/SocialMedia/Facebook.svg" alt="">
                    <img src="../../Assets/General/SocialMedia/Instagram.svg" alt="">
                    <img src="../../Assets/General/SocialMedia/LinkedIn.svg" alt="">
                    <img src="../../Assets/General/SocialMedia/Twitter.svg" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="bottomFooter">
        <p>© 2024 exemple.com. All rights reserved.</p>
        <div class="bottomFooterContainer"><p>Terms & Conditions</p><p>Privacy Notice</p></div>
    </div>
</footer>
        `
    }
}
customElements.define('footer-component', FooterComponent)
