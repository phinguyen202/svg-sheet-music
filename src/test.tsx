import ReactDOM from 'react-dom';
import SVGMusicNotation from './index';
import React from 'react';
import { SvgSheet } from 'expose/sheet';
import { SvgStave } from './expose/stave';

// sample
// const testSource = `
// TrebleClef 4/4 C4-4n D4-4n E4-4n F4-4n | G4-4n A4-4n B4-4n C5-4n | D5-4n E5-4n F5-4n G5-4n | A5-4n B5-4n C6-4n |

// TrebleClef 4/4 C4-1n-. D4-1n-.. E4-1n-... F4-1n || G4-2n-b A4-2n-bb B4-2n-n C5-2n-#. |B D5-4n-## E5-4n-bb. F5-4n-bb... G5-4n-n... A5-4n-##... |B
// I don't know you, | but I want you | all the more for that
// `;

// ReactDOM.render(
//     <SVGMusicNotation height={'100%'} width={'800'} source={testSource}/>,
//     document.getElementById('test')
// );

// const userSource = `
// TrebleClef(-7) 4/4 C5-4n D5-4n E5-4n D5-4n || C5-4n D5-4n F5-4n E5-4n |B C5-4n D5-4n E5-4n D5-4n C5-4n |B
// I don't know you, | but I want you | all the more for that
// TrebleClef(-1) R-8n R-16n A4-8n G4-8n A4-8n G4-8n A4-8n G4-8n | C5-4n D5-4n E5-4n D5-8n C5-8n | C5-4n D5-4n F5-4n E5-4n |
// \\E \\E \\E \\E \\E \\E | Words fall through me and | al -ways fool me,
// `;

// ReactDOM.render(
//     <SVGMusicNotation height={'100%'} width={'800'} source={userSource} />,
//     document.getElementById('root')
// );

// const userSource1 = `
// TrebleClef(7) 4/4 C5-4n D5-4n E5-4n D5-4n || C5-4n D5-4n F5-4n E5-4n |B C5-4n D5-4n E5-4n D5-4n C5-4n |B
// TrebleClef(1) R-4n R-1n R-2n A4-8n G4-8n A4-8n G4-8n A4-8n G4-8n | 4/4 C5-4n D5-4n E5-4n D5-8n C5-8n | C5-4n D5-4n F5-4n E5-4n |
// `;

// const config = {
//     lyric: false
// }
// ReactDOM.render(
//     <SVGMusicNotation height={'100%'} width={'800'} source={userSource1} config={config}/>,
//     document.getElementById('nolyric')
// );

const sheet = new SvgSheet();

const stave = new SvgStave();

sheet.addStave(stave);

sheet.render(document.getElementById('nolyric'));