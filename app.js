const playerInformation = (name, selection) => {
    return {
        name: name,
        selection: selection,
        announcement() {
            return `My name is ${name} and I choose ${selection}`;
        }
    }
}

const playerOne = playerInformation('Rob', 'Rock');

console.log(playerOne.announcement());