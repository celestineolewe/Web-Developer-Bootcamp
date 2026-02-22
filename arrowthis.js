const person = {
    firstName: 'Celestine',
    lastName: 'Auma',

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    shoutName() {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName());
        }, 3000);
    }
};
