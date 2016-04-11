import {foo} from './a_es6.js';
export function bar () {
    if (Math.random() > 0.5) {
        foo();
    }
}
