function salary(input) {
    let salary = Number(input[1]);


    for (let i = 1; i <= input.length; i++) {
        if (salary <= 0) {
            console.log("You have lost your salary.");
            return;
        }
        switch (input[i+1]) {

            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;
        }

    }

    if (salary > 0) {
        console.log(Math.floor(salary));
    }
}

salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"]);

salary(["3",
    "500",
    "Github.com",
    "Stackoverflow.com",
    "softuni.bg"]);

salary(["3",
    "500",
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"])



