class FinancingOfferComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const title = this.getAttribute('title') || 'Special Financing';
        const subtitle = this.getAttribute('subtitle') || 'Offers';
        const description =
            this.getAttribute('description') ||
            'Our stress-free finance department that can find financial solutions to save you money.';
        const svgSource =
            this.getAttribute('svgSource') ||
            'c:/Users/darisd/Desktop/Git_Projects/BoxCarsIckProject/Assets/WhyChooseUsSvgs/FinancingOffers.svg';

        this.innerHTML = `
            <link rel="stylesheet" href="../../Components/WhyChooseUs/index.css">
            <div class="firstContainer">
                <img src="${svgSource}" 
                     alt="svg" class="svgForContainer">
                <h2 class="textInsideContainer">
                    ${title} <br> <span>${subtitle}</span>
                </h2>
                <p class="componentParagraph">
                    ${description}
                </p>
            </div>
        `;
    }
}

customElements.define('financing-offer-component', FinancingOfferComponent);