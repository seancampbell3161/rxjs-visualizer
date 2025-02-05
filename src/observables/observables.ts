import { fromEvent } from "rxjs";


const button = document.getElementById('myButton') as HTMLButtonElement;
const buttonClicked$ = fromEvent(button, 'click');