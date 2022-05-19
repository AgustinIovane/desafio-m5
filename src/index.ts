import { state } from "./state";
import { initRouter } from "./router";
import { initText } from "./components/text";
import { initButton } from "./components/buttom";
import { initPapel } from "./components/move/papel";
import { initPiedra } from "./components/move/piedra";
import { initTijeras } from "./components/move/tijeras";
import { initCounter } from "./components/counter";
import { initStar } from "./components/star";


function initApp(param) {
    state.init()
    initRouter(param)
    initText()
    initButton()
    initPapel()
    initPiedra()
    initTijeras()
    initCounter()
    initStar()
}

(function () {
    const root = document.querySelector(".root");
    initApp(root);
    console.log(state.getState());
})()