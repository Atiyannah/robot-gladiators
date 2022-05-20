// top of file
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// log multiple values at once
console.log(playerName, playerHealth, playerAttack, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {

    // ask player if they would like to skip or fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

     // if players choose to skip, confirm and stop the loop
     if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        // if yes, leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
        // if no, ask question again by running fight function
        else {
            fight();
        }
    }

    if (promptFight === "fight" || promptFight === "FIGHT") {
    // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        // award player money for winning
        playerMoney = playerMoney + 20;
        // leave while() loop since enemy is dead
        break;
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        // leave while() loop if player is dead
        break;
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    }

    // if player inputs invalid option
    else {
        window.alert("You need to choose a valid option. Try again!");
    }
    }
};

// for loop
for(var i = 0; i < enemyNames.length; i++) {
    // alert players that they are starting the round
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        // call fight function with enemy robot
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(enemyNames[i]);
    }
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}