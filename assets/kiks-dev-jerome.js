setTimeout(() => {
  const myHeader = document.querySelector(".cc-header--sticky .header");
    const announcementBar = document.querySelector(".cc-announcement announcement-bar.announcement");
  const stickyClass = "is-sticky";
  
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 150) {
        myHeader.classList.add(stickyClass);
        announcementBar.classList.add(stickyClass);
      } else {
        myHeader.classList.remove(stickyClass);
         announcementBar.classList.remove(stickyClass);
      }
    });


}, "1000");


/* Product variant */

// Check if the body has the class "template-product"
if (document.body.classList.contains('template-product')) {
    // Get the container of all variant label containers
    const variantContainer = document.querySelector('.Colour.option-selector__btns');
    
    if (variantContainer) {
        // console.log('Variant container found:', variantContainer);
        
        // Get all the label elements inside the container
        const variantLabels = variantContainer.querySelectorAll('label.opt-label');
        
        // console.log('Variant labels:', variantLabels);
        
        // Add is_active class to the first variant label container
        if (variantLabels.length > 0) {
            // console.log('Adding is_active to the first label:', variantLabels[0]);
            variantLabels[0].classList.add('is_active');
        } else {
            // console.log('No variant labels found inside the container.');
        }
        
        // Loop through each variant label container
        variantLabels.forEach(function(label) {
            // Add click event listener
            label.addEventListener('click', function() {
                console.log('Label clicked:', this);
                
                // Remove is_active class from all variant label containers
                variantLabels.forEach(function(label) {
                    label.classList.remove('is_active');
                });
                
                // Add is_active class to the clicked variant label container
                this.classList.add('is_active');
                // console.log('is_active class added to:', this);
            });
        });
        
    } else {
        // console.error('Variant container not found.');
    }
  setTimeout(() => {
      const newBtnAddCart = document.querySelector(".product-info__add-button button");
        newBtnAddCart.innerHTML = `<span class="cart-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M19.6931 5.10149C19.5151 4.79313 19.2603 4.53616 18.9534 4.35565C18.6465 4.17514 18.2981 4.07724 17.9421 4.07151H4.75833L4.16094 1.74375C4.10059 1.51904 3.96593 1.3214 3.7789 1.183C3.59187 1.0446 3.36349 0.973596 3.13096 0.981561H1.071C0.797829 0.981561 0.535849 1.09008 0.34269 1.28324C0.149531 1.47639 0.0410156 1.73837 0.0410156 2.01154C0.0410156 2.28471 0.149531 2.54669 0.34269 2.73985C0.535849 2.93301 0.797829 3.04152 1.071 3.04152H2.34817L5.19092 13.6091C5.25128 13.8338 5.38594 14.0315 5.57297 14.1699C5.76 14.3083 5.98838 14.3793 6.22091 14.3713H15.4907C15.6809 14.3707 15.8673 14.3175 16.0291 14.2175C16.1909 14.1175 16.3218 13.9747 16.4074 13.8048L19.7858 7.04815C19.9322 6.74124 20.0004 6.40284 19.9842 6.06317C19.968 5.72349 19.868 5.3931 19.6931 5.10149ZM14.8522 12.3114H7.00369L5.32482 6.13147H17.9421L14.8522 12.3114Z" fill="white"/>
      <path d="M5.70513 19.5211C6.55839 19.5211 7.2501 18.8294 7.2501 17.9761C7.2501 17.1229 6.55839 16.4312 5.70513 16.4312C4.85186 16.4312 4.16016 17.1229 4.16016 17.9761C4.16016 18.8294 4.85186 19.5211 5.70513 19.5211Z" fill="white"/>
      <path d="M16.0059 19.5211C16.8592 19.5211 17.5509 18.8294 17.5509 17.9761C17.5509 17.1229 16.8592 16.4312 16.0059 16.4312C15.1526 16.4312 14.4609 17.1229 14.4609 17.9761C14.4609 18.8294 15.1526 19.5211 16.0059 19.5211Z" fill="white"/>
      </svg></span> ADD TO CART`;
  }, 1000);
  
} else {
    // console.log('Body does not have the class "template-product".');
}

// const mediaWithTextSection = document.querySelector(".cc-media-with-text");

// if (mediaWithTextSection) {
//   const stringWithSpaces = document.querySelectorAll(".cc-media-with-text .section__block.reading-width.rte p");

//   stringWithSpaces.forEach(element => {
//     const textWithoutNonBreakingSpaces = element.innerHTML.replace(/&nbsp;/g, ' ');
//     element.innerHTML = textWithoutNonBreakingSpaces;
//   });
// }
const mediaWithTextSection = document.querySelector(".cc-media-with-text");
const faqSection = document.querySelector(".cc-faq");

if (mediaWithTextSection) {
  const stringWithSpaces = document.querySelectorAll(".cc-media-with-text .section__block.reading-width.rte p");

  stringWithSpaces.forEach(element => {
    const textWithoutNonBreakingSpaces = element.innerHTML.replace(/&nbsp;/g, ' ');
    element.innerHTML = textWithoutNonBreakingSpaces;
  });
}

if (faqSection) {
  const faqStringsWithSpaces = document.querySelectorAll(".cc-faq details.disclosure .disclosure__panel .disclosure__content.rte p");

  faqStringsWithSpaces.forEach(element => {
    const textWithoutNonBreakingSpaces = element.innerHTML.replace(/&nbsp;/g, ' ');
    element.innerHTML = textWithoutNonBreakingSpaces;
  });
}

