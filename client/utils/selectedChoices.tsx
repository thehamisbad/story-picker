import * as React from 'react';

const random = 'Random!';

export function buildSelectedChoices(selected: string[], upTo: number) {
    if (selected == undefined 
        || selected.length < 1) {
    return random;
}
return upTo > 1 ?
    (<ol>
        { selected.map((item, index) =>
            (<li key={[item, index].join('-')}>{item}</li>)) }
    </ol>) :
    selected;
}