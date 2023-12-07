$(function() {
    $("#back").click(function() {
        window.location.href = "https://danylonevidomyi.github.io/individual/";
    })
    // ім'я користувача
    let username = prompt("Введіть, будь ласка, ваше ім'я");
    if (username == "") {
        $("#username").text("User");
    }
    else {
        $("#username").text(username);
    }
    
    // вимкнені кнопки
    $("#again").prop('disabled', true);
    $("#new-game").prop('disabled', true);

    // масив для їжі
    let apple = "apple";
    let cherry = "cherry";
    let lemon = "lemon";
    let peach = "peach";

    let food = [apple, cherry, lemon, peach];
    

    // лічильник спроб
    let attempts = 0;
    $("#attempt").text("Спроба: " + attempts + "/3");

    // кнопка дії
    $("#play").click(function() {
        attempts++;
        $("#attempt").text("Спроба: " + attempts + "/3");
        RandomImage();
        results();
        pasteImg();
    })


    // випадкова їжа
    function RandomImage() {
        // перше зображення
        let firstRandomFood = Math.floor(Math.random() * food.length);
        let firstSelectedFood = food[firstRandomFood];
        $("#first-image").html(firstSelectedFood);

        // друге зображення
        let secondRandomFood = Math.floor(Math.random() * food.length);
        let secondSelectedFood = food[secondRandomFood];
        $("#secon-image").html(secondSelectedFood);

        // третє зображення
        let thirdRandomFood = Math.floor(Math.random() * food.length);
        let thirdSelectedFood = food[thirdRandomFood];
        $("#third-image").html(thirdSelectedFood);
    }

    function results() {
        if ($("#first-image").html() == $("#secon-image").html() && $("#secon-image").html() == $("#third-image").html()) {
            $("#result").html("Вітаю, ви перемогли! &#128515");
            $("#play").prop('disabled', true)
            $("#again").prop('disabled', false);
            $("#new-game").prop('disabled', false);
        }
        else if (attempts == 3) {
            $("#result").html("На жаль, удача не на вашому боці &#128532");
            $("#play").prop('disabled', true)
            $("#again").prop('disabled', false);
            $("#new-game").prop('disabled', false);
        }
    }

    function pasteImg() {
        switch ($("#first-image").html()) {
            case "apple":
               $("#first-image").html('<img src="img/apple.avif" alt="apple">')
            break;

            case "peach":
               $("#first-image").html('<img src="img/peach.avif" alt="peach">')
            break;

            case "cherry":
               $("#first-image").html('<img src="img/cherry.jpg" alt="cherry">')
            break;

            case "lemon":
               $("#first-image").html('<img src="img/lemon.jpg" alt="lemon">')
            break;
        }

        switch ($("#secon-image").html()) {
             case "apple":
               $("#secon-image").html('<img src="img/apple.avif" alt="apple">')
            break;

            case "peach":
               $("#secon-image").html('<img src="img/peach.avif" alt="peach">')
            break;

            case "cherry":
               $("#secon-image").html('<img src="img/cherry.jpg" alt="cherry">')
            break;

            case "lemon":
               $("#secon-image").html('<img src="img/lemon.jpg" alt="lemon">')
            break;           
        }

        switch ($("#third-image").html()) {
             case "apple":
               $("#third-image").html('<img src="img/apple.avif" alt="apple">')
            break;

            case "peach":
               $("#third-image").html('<img src="img/peach.avif" alt="peach">')
            break;

            case "cherry":
               $("#third-image").html('<img src="img/cherry.jpg" alt="cherry">')
            break;

            case "lemon":
               $("#third-image").html('<img src="img/lemon.jpg" alt="lemon">')
            break;           
        }
    }

    // спробувати ще раз
    $("#again").click(function() {
        // Скидання до початкового вигляду
        attempts = 0;
        $("#attempt").text("Спроба: " + attempts + "/3");
        $("#result").html("");
        $("#play").prop('disabled', false);

        // Очищення зображень
        $("#first-image, #secon-image, #third-image").empty();

        // вимикання кнопок
        $("#again").prop('disabled', true);
        $("#new-game").prop('disabled', true);
    })


    // розпочати нову гру
    $("#new-game").click(function() {
        location.reload();
    })
})