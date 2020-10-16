const ul = document.getElementById('testing'); // Get the list where we will place our authors
const url = 'http://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/v1/?match_id=4225454337&key=B85AFD7B6625E56C01A80A734A9497EB';

fetch('http://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/v1/?match_id=4225454337&key=B85AFD7B6625E56C01A80A734A9497EB')
  .then(function(response) {
    return response.json();
  }