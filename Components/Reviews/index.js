class ReviewComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        const Rating = this.getAttribute('rating')
        const Verified = this.getAttribute('verified')
        const Title = this.getAttribute('title')
        const Description = this.getAttribute('description')
        const Author = this.getAttribute('author')
        let reviewRating = '';
        if (Rating === "1") {
            reviewRating += `<img class="star" src="../../Assets/Review/FullStar.svg" alt="">
                             <img class="star" src="../../Assets/Review/NoStar.svg" alt="">
                             <img class="star" src="../../Assets/Review/NoStar.svg" alt="">
                             <img class="star" src="../../Assets/Review/NoStar.svg" alt="">
                             <img class="star" src="../../Assets/Review/NoStar.svg" alt="">`;
        }
        else if (Rating === "2") {
            reviewRating += `<img class="star" src="../../Assets/Review/FullStar.svg" alt="">
                             <img class="star" src="../../Assets/Review/FullStar.svg" alt="">
                             <img class="star" src="../../Assets/Review/NoStar.svg" alt="">
                             <img class="star" src="../../Assets/Review/NoStar.svg" alt="">
                             <img class="star" src="../../Assets/Review/NoStar.svg" alt="">`;
        }
        else if (Rating === "3") {
            reviewRating += `<img class="star" src="../../Assets/Review/FullStar.svg" alt="">
                             <img class="star" src="../../Assets/Review/FullStar.svg" alt="">
                             <img class="star" src="../../Assets/Review/FullStar.svg" alt="">
                             <img class="star" src="../../Assets/Review/NoStar.svg" alt="">
                             <img class="star" src="../../Assets/Review/NoStar.svg" alt="">`;
        }
        else if (Rating === "4") {
            reviewRating += `<img class="star" src="../../Assets/Review/FullStar.svg" alt="">
                             <img class="star" src="../../Assets/Review/FullStar.svg" alt="">
                             <img class="star" src="../../Assets/Review/FullStar.svg" alt="">
                             <img class="star" src="../../Assets/Review/FullStar.svg" alt="">
                             <img class="star" src="../../Assets/Review/NoStar.svg" alt="">`;
        }
        else if (Rating === "5") {
            reviewRating += `<img class="star" src="../../Assets/Review/FullStar.svg" alt="">
                             <img class="star" src="../../Assets/Review/FullStar.svg" alt="">
                             <img class="star" src="../../Assets/Review/FullStar.svg" alt="">
                             <img class="star" src="../../Assets/Review/FullStar.svg" alt="">
                             <img class="star" src="../../Assets/Review/FullStar.svg" alt="">`;
                             
        }
        let isVerified = ''
        if (Verified === "True"){
            isVerified += '<div class="reviewVerification"><img src="../../Assets/Review/VerifiedBage.svg" alt=""><h3>Verified</h3></div>'
        }
        this.innerHTML = `
                 <link rel="stylesheet" href="../../Components/Reviews/index.css">
    <div class="reviewItem">
        <div class="reviewDetails">
            <div class="reviewRating">
               ${reviewRating}
            </div>
            ${isVerified}
        </div>
        <div>
            <h2>${Title}</h2>
            <p>${Description}</p>
            <p class="Author">${Author}</p>
        </div>
    </div>
        `
    }
}
customElements.define('review-component', ReviewComponent)