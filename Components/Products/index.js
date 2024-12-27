class ProductComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        const productImg = this.getAttribute('productImg') 
        const isProductOnSale = this.getAttribute('onSale') == "true"
        const isGreatPrice = this.getAttribute('greatPrice') == "true"
        const isLowMileage = this.getAttribute('lowMileage') == "true"
        const productTitle = this.getAttribute('productTitle')
        const productDesc = this.getAttribute('productDesc')
        const mileage = this.getAttribute('mileage')
        const typeOfFuel = this.getAttribute('typeOfFuel')
        const typeOfTransmission = this.getAttribute('typeOfTransmission')
        const previousPrice = this.getAttribute('previousPrice')
        const price = this.getAttribute('price')
        let impressions = '';
        if (isProductOnSale) {
            impressions += `<div class="productOnSale productImpression">Sale</div>`;
        }
        else if (isGreatPrice) {
            impressions += `<div class="productGreatPrice productImpression">Great Price</div>`;
        }
        else if (isLowMileage) {
            impressions += `<div class="productLowMileage productImpression">Low Mileage</div>`;
        }
        this.innerHTML = `
             <link rel="stylesheet" href="../../Components/Products/index.css">
    <div class="productContainer">
        <div class="productImgContainer">
            <img class="productImg" src="${productImg}" alt="CAR_IMG">
            ${impressions}
            <div class="productBookmarkContainer">
                <img src="../../Assets/ProductAssets/SVGS/BookmarkIcon.svg" alt=" ">
            </div>
        </div>
        <div class="productInfoContainer">
            <div class="productTitleContainer">
                <h4 class="productTitle">${productTitle}</h4>
                <p>${productDesc}</p>
            </div>
            <div class="productDetailsContainer">
                <div class="mileage productDetails">
                    <img src="../../Assets/ProductAssets/SVGS/Mileage.svg" alt="Mileage">
                    <p class="mileageText">${mileage}</p>
                </div>
                <div class="typeOfFuel productDetails">
                    <img src="../../Assets/ProductAssets/SVGS/TypeOfFuel.svg" alt="typeOfFuel">
                    <p>${typeOfFuel}</p>
                </div>
                <div class="typeOfTransmission productDetails">
                    <img src="../../Assets/ProductAssets/SVGS/TypeOfTransmission.svg" alt="typeOfTransmission">
                    <p>${typeOfTransmission}</p>
                </div>
            </div>
            <div class="productPricingContainer">
                <div class="productPricing">               
                    <h5 class="previousProductPricing">${previousPrice}</h5>
                    <h4 class="productPrice">${price}</h4>
                </div>
                <div class="productViewDetails">
                    <p>View Details</p>
                    <img src="../../Assets/ProductAssets/SVGS/ArrowToTheRight.svg" alt="">
                </div>
            </div>
        </div>
    </div>
        `
    }
}
customElements.define('product-component', ProductComponent)