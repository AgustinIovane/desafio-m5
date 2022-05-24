type Jugada = "piedra" | "papel" | "tijeras" | "";
type Jugar = {
    computerPlay: Jugada,
    myPlay: Jugada,
}
const state = {
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: ""
        },
        histoy: [],
    },
    listeners: [],
    init() {
        let localData = localStorage.getItem("saved-state");
        if (localData !== null) {
            this.setState(JSON.parse(localData));
        }
        else {
            this.setState({
                currentGame: {
                    computerPlay: "",
                    myPlay: ""
                },
                histoy: []
            })
        }


    },
    getState() {
        return this.data
    },

    setState(newState) {
        this.data = newState
        for (const cb of this.listeners) {
            cb()
        }
        localStorage.setItem("saved-state", JSON.stringify(newState));
    },

    subscribe(callback) {
        this.listeners.push(callback)
    },

    addCurrentPlay(myPlay: Jugada, computerPlay: Jugada) {
        const data = this.getState();
        const newData = { ...data, currentGame: { myPlay: myPlay, computerPlay: computerPlay } }
        this.setState(newData);
        this.whoWins({ myPlay, computerPlay })
    },

    whoWins(jugada: Jugar) {
        const data = this.getState()

        const ganeConTijeras = jugada.myPlay == "tijeras" && jugada.computerPlay == "papel"
        const ganeConPiedra = jugada.myPlay == "piedra" && jugada.computerPlay == "tijeras"
        const ganeConPapel = jugada.myPlay == "papel" && jugada.computerPlay == "piedra"
        const gane = [ganeConPiedra, ganeConTijeras, ganeConPapel].includes(true);

        const perdiConTijeras = jugada.myPlay == "tijeras" && jugada.computerPlay == "piedra"
        const perdiConPiedra = jugada.myPlay == "piedra" && jugada.computerPlay == "papel"
        const perdiConPapel = jugada.myPlay == "papel" && jugada.computerPlay == "tijeras"
        const perdi = [perdiConPiedra, perdiConPapel, perdiConTijeras].includes(true);

        if (gane == true) {
            data.histoy.push(1)
            this.setState(data)
            console.log(this.getState("gane"));

        }
        else if (perdi == true) {
            data.histoy.push(0)
            this.setState(data)
            console.log(this.getState("perdi"));
        }
    },
};

export { state }


