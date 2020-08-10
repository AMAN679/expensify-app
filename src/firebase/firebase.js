import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBEt_GkS_I-dV4SBbJZuCa6C29jNrhObBM",
    authDomain: "expensify-app-af622.firebaseapp.com",
    databaseURL: "https://expensify-app-af622.firebaseio.com",
    projectId: "expensify-app-af622",
    storageBucket: "expensify-app-af622.appspot.com",
    messagingSenderId: "724340801113",
    appId: "1:724340801113:web:9fac1f0a8b397c2919bb48",
    measurementId: "G-5WDW7FG5F3"
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

/*database.ref().set({
    name: 'Aman kumar',
    age: 23,
    isSngle: false,
    location: {
        city: "JSR",
        country: 'India'
    }
});
*/

//database.ref().remove();

/*database.ref('expenses').push({
    amount: 500,
    createdAt: 4520,
    name: "aman"
}
)

database.ref('expenses').push({
    amount: 2500,
    createdAt: 1520,
    name: "amit"
}
)*/

/*
database.ref('expenses').once('value').then((snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({

            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);

});*/

/*database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({

            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);

})

*/
