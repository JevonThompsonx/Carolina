const currentOfferClick = document.querySelectorAll('.currentOfferClick');
const currentOfferSection = document.querySelector('#currentOfferCalendar');

const addScrollToCurrentEvent = (element) => {
element.addEventListener('click', function() {
  currentOfferSection.scrollIntoView( {behavior: 'smooth', block: 'center'});
  currentOfferSection.focus({preventScroll: true});
}
)
}
for (currentOffer of currentOfferClick) {
addScrollToCurrentEvent(currentOffer);
}
