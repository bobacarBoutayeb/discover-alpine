console.log("exercice 5");

// 1. Trouvez sur internet trois images : une de pierre, une de feuille et l'autre de ciseaux ;
// 2. Créez dans votre page HTML une section qui contient ces trois images sur une même ligne ;

//TODO Création ciblée page HTML avec balises imbriquées
// $('.container').append('<div><h1><img src="rock-paper-scissors.svg" width="30%" alt="logo"> Papier, Cailloux, Ciseaux</h1></div>');

// 3. L'utilisateur va cliquer sur une image afin de faire son choix. En utilisant des sélecteurs jQuery,
// faites-en sorte que lorsque l'utilisateur clique sur une image, son choix s'affiche dans la console ;

let $element = $('#tools img');

for (let i = 0; i < $element.length; i++) {
    $($element[i]).on('click',function ()
    {
        let playerChoice = $element.eq(i).attr('id');

// 4. Maintenant créez une div avec l'id userChoice, et remplacez le contenu de cette div par le choix de l'utilisateur ;

        $('#userChoice').text('Choix du joueur : ' + playerChoice);

        let computerChoice = getComputerChoice();
        $('#computerChoice').text('Choix de l\'ordinateur : ' + computerChoice);


        let result = findWinner(playerChoice,computerChoice);
        $('#result').text('Résultat : ' + result);

        switch (result) {
            case 'Tied':
                $('#result').attr('class','text-secondary');
                break;

            case 'Won':
                $('#result').attr('class','text-success');
                break;

            case 'Lost':
                $('#result').attr('class','text-danger');
                break;
        }
    });
}

// 5. Créez une div avec l'id computerChoice et y mettre dedans le choix de l'ordinateur
// que vous avez obtenu suite à l'appel de la fonction getComputerChoice créée dans le cours précédent ;

function getComputerChoice()
{
    // Random number between 0 and 2 (inclusive)
    let computerRandomNumber = Math.floor(Math.random() * 3);

    let picks = ['rock', 'paper', 'scissors'];

    // Suivant le résultat, la fonction doit retourner une valeur
    // parmi {'rock', 'paper', 'scissors'}.
    return picks[computerRandomNumber];
}

// 6. Ajoutez une div pour afficher le résultat, le texte doit être vert si vous avez gagné, gris en cas d'égalité et rouge si vous avez perdu.

function findWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return 'Tied';
    }

    if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'Won';
        }
    }

    if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'Won';
        }
    }

    if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'Won';
        }
    }

    return 'Lost';
}

// Bonus : essayez de recréer (à votre sauce !) l'interface de [cette page web](https://www.handcramp.lol/) avec le nombre de rounds, le calcul du score, etc.
