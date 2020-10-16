gambit_score = 0;
ehome_score = 0;

$.ajax({
  url: "https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/v1/?match_id=4331733821&key=B85AFD7B6625E56C01A80A734A9497EB",
  success: function(data){
  	if (data.result.radiant_team_id == 6209143) {
  		if (data.result.radiant_win == true) {
  			gambit_score = gambit_score + 1;
  		} 
  	} else {
  		if (data.result.radiant_win == false) {
  			gambit_score = gambit_score + 1;
  		}
  	};

  	if (data.result.radiant_team_id == 4) {
  		if (data.result.radiant_win == true) {
  			ehome_score = ehome_score + 1;
  		}
  	} else {
  		if (data.result.radiant_win == false) {
  			ehome_score = ehome_score + 1;
  		}
  	}
  }
});

$.ajax({
  url: "https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/v1/?match_id=4331907925&key=B85AFD7B6625E56C01A80A734A9497EB",
  success: function(data){
  	if (data.result.radiant_team_id == 6209143) {
  		if (data.result.radiant_win == true) {
  			gambit_score = gambit_score + 1;
  		}
  	} else {
  		if (data.result.radiant_win == false) {
  			gambit_score = gambit_score + 1;
  		}
  	};

  	if (data.result.radiant_team_id == 4) {
  		if (data.result.radiant_win == true) {
  			ehome_score = ehome_score + 1;
  		}
  	} else {
  		if (data.result.radiant_win == false) {
  			ehome_score = ehome_score + 1;
  		}
  	}
  }
});

$.ajax({
  url: "https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/v1/?match_id=4332078880&key=B85AFD7B6625E56C01A80A734A9497EB",
  success: function(data){
  	if (data.result.radiant_team_id == 6209143) {
  		if (data.result.radiant_win == true) {
  			gambit_score = gambit_score + 1;
  		}
  	} else {
  		if (data.result.radiant_win == false) {
  			gambit_score = gambit_score + 1;
  		}
  	};

  	if (data.result.radiant_team_id == 4) {
  		if (data.result.radiant_win == true) {
  			ehome_score = ehome_score + 1;
  		}
  	} else {
  		if (data.result.radiant_win == false) {
  			ehome_score = ehome_score + 1;
  		}
  	}
  }
});

$.ajax({
  url: "https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/v1/?match_id=4332200344&key=B85AFD7B6625E56C01A80A734A9497EB",
  success: function(data){
  	if (data.result.radiant_team_id == 6209143) {
  		if (data.result.radiant_win == true) {
  			gambit_score = gambit_score + 1;
  		}
  	} else {
  		if (data.result.radiant_win == false) {
  			gambit_score = gambit_score + 1;
  		}
  	}

  	if (data.result.radiant_team_id == 4) {
  		if (data.result.radiant_win == true) {
  			ehome_score = ehome_score + 1;
  		}
  	} else {
  		if (data.result.radiant_win == false) {
  			ehome_score = ehome_score + 1;
  		}
  	}
  }
});

$( document ).ajaxStop(function() {
	$("#standings").append("Gambit: " + gambit_score + "<br>");
  	$("#standings").append("Ehome: " + ehome_score + "<br>");
});
