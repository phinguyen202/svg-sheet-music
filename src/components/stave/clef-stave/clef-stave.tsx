import { WidthDemension } from "@model/common.model";
import React from "react";
import { CoordinateModel } from '@model/common.model';
import { MeasureModel } from "@model/business.model";
import Staff from '@base/staff-ledger/staff'
import TrebleClef from "@base/clef/treble";
import { KeySignature } from "./key-signature";
import { Measure } from "./measure";

// staff config
interface ClefStaff {
    lineNumber: number;
    space: number;
}

const clefStaff: ClefStaff = {
    lineNumber: 5,
    space: 10
}

interface Props extends CoordinateModel, WidthDemension {
    measures: MeasureModel[];
	keySigNumber?: number;
}

const offset: number = 10;
const KeySignatureOffset: number = 5;

export function ClefStave({ x = 0, y = 0, width, measures, keySigNumber }: Props): JSX.Element {
    // offset - TrebleClef - offset - key signature - offset - measures
    const staff = <Staff.JSX lineNumber={clefStaff.lineNumber} space={clefStaff.space} width={width}/>
    let currentX = offset;
    const clef = <TrebleClef.JSX x={currentX}/>
    currentX += TrebleClef.width;
    const keySignature = keySigNumber && KeySignature({x: currentX += KeySignatureOffset, keySigNumber});
    if (keySignature) {
        currentX += keySignature.width;
    }
    // should be balanced based on number of elements
    const measureWidth = (width - currentX) / measures.length;
    const measuresJsx = measures.map((measures, index) => {
        return <Measure timeSignature={measures.timeSignature} notes={measures.notes} barline={measures.barline} width={measureWidth} x={currentX + measureWidth*index} y={10} key={index} />
    });
    return (
        <g transform={`translate(${x}, ${y})`}>
            {staff}
            {clef}
            {keySignature && keySignature.JSXElement}
            {measuresJsx}
        </g>
    )
}