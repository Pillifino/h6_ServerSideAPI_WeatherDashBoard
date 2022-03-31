// Global Variables
var weatherResultEl = document.querySelector('.city-result')
var resultContentEl = document.querySelector('')

// Search Functions
    // Search Bar
    var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search-input').value;
  var formatInputVal = document.querySelector('#format-input').value;

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);

    // Search Button
    var searchFormEl = document.querySelector('.input-group');

    function handleSearchFormSubmit(event) {
      event.preventDefault();
    
      var searchInputVal = document.querySelector('form-control').value;
    
      if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
      }
    
      var queryString = './search-results.html?q=' + searchInputVal;
      location.assign(queryString);
    }
    
    searchFormEl.addEventListener('submit', handleSearchFormSubmit);
    
// Weather API
    function searchApi(query, format) {
        var weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}';
        if (format) {
          weatherUrl = 'https://www.loc.gov/' + format + '/?fo=json'; //Adds parameters
        }
      
        locQueryUrl = locQueryUrl + '&q=' + query;
      
        fetch(weatherUrl)
          .then(function (response) {
            if (!response.ok) {
              throw response.json();
            }
      
            return response.json();
          })
          .then(function (locRes) {
            // write query to page so user knows what they are viewing
            resultTextEl.textContent = locRes.search.query;
      
            console.log(locRes);
      
            if (!locRes.results.length) {
              console.log('No results found!');
              resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
            } else {
              resultContentEl.textContent = '';
              for (var i = 0; i < locRes.results.length; i++) {
                printResults(locRes.results[i]);
              }
            }
          })
          .catch(function (error) {
            console.error(error);
          });
      }