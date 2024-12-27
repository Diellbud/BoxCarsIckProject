class FinancingOfferComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <link rel="stylesheet" href="../../Components/WhyChooseUs/index.css">
            <div class="firstContainer">
                <img src="c:/Users/darisd/Desktop/Git_Projects/BoxCarsIckProject/Assets/WhyChooseUsSvgs/FinancingOffers.svg" 
                     alt="svg" class="svgForContainer">
                <h2 class="textInsideContainer">
                    Special Financing <br> <span>Offers</span>
                </h2>
                <p class="componentParagraph">
                    Our stress-free finance
                    department that can find financial solutions to save you money.
                </p>
            </div>
        `;
    }
}

customElements.define('financing-offer-component', FinancingOfferComponent);