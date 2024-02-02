function userCreator(name, score) {
    const newUser = {}; //empty object {}
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function() {
        newUser.score++;
    }
    return newUser;
}

const user1 = userCreator('Phil', 4);
const user2 = userCreator('Julia', 5);
user1.increment();