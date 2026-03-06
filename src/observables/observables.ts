import { fromEvent } from "rxjs";


const button = document.getElementById('myButton') as HTMLButtonElement;
export const buttonClicked$ = fromEvent(button, 'click');