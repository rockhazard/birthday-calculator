// Calculate the user's age and weekday of birth from the entered date. 

var Birthday = {};

Birthday.Calc = (function() {
    // GLOBALS
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday"
    ],
        bdateField = document.getElementById("input"),
        // display = document.getElementById("output");
        weekday = document.getElementById("weekday");
        yearsOld = document.getElementById("years");

    // FUNCTIONS
    function getBirthDay(birthdate) {
        var date = new Date(birthdate);
        return days[date.getDay()];
    }

    function getAgeInYears(birthdate) {
        var now = new Date(),
            birth = new Date(birthdate),
            rawAge = now - birth,
            oneYear = 31536000000,
            roundAge = Math.round((rawAge / oneYear) * 10) / 10;
        return roundAge;
    }

    // EVENTS
    bdateField.onkeypress = function(event) {
        if (event.key === "Enter") {
            var birthday = getBirthDay(this.value),
                years = getAgeInYears(this.value);
            // display.innerHTML = years + " years ago on a " + birthday + ".";
            weekday.innerHTML = "Weekday: " + birthday;
            yearsOld.innerHTML = "Age: " + years;
        }

    };

    // export functions
    return {
        getBirthDay: getBirthDay,
        getAgeInYears: getAgeInYears
    };

}());