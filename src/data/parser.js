'use strict';

import cardio1 from './procedures/cardio1.json';
import periop_cardiac from "./procedures/periop_cardiac.json"
import periop_endo from "./procedures/periop_endo.json"


function parse(name) {
    let procedure = [];
    switch(name) {
        case "cardio1":
            procedure = cardio1;
            break;
        case "periop_cardiac":
            procedure = periop_cardiac;
            break;
        case "periop_endo":
            procedure = periop_endo;
            break;
        default:
            break;
    }
    return procedure.questions.reduce( (acc, cur) => {
        acc[cur.id] = cur;
        return acc;
    }, {});
}

export default parse;
