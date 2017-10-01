    function bmi() {
        var name = document.getElementById("name").value;
        var height = +document.getElementById("height").value / 100;
        var weight = +document.getElementById("weight").value;
        var bmi = (weight) / (height * height);
        var result;

        bmi = bmi.toFixed(2); // arata cu 2 zecimale

        if (bmi <= 18.5) {
            result = " SUBNUTRIT ";
        } else if (bmi >= 18.5 && bmi <= 25) {
            result = " NORMAL ";
        } else if (bmi >= 25 && bmi <= 30) {
            result = " SUPRAPONDERAL ";
        } else {
            result = " CAT O JITA ";
        }
        console.log(result);
        document.getElementById("user_name").innerHTML = name;
        document.getElementById("bmi_value").innerHTML = result;
        document.getElementById("answer").style.visibility = "visible";
    }

    function mr_proper() {
        document.getElementById("name").value = "";
        document.getElementById("height").value = "";
        document.getElementById("weight").value = "";
        document.getElementById("answer").style.visibility = "hidden";
    }
