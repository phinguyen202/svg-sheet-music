import { CoordinateModel } from "@model/common.model";
import React, { FunctionComponent } from "react";

interface Props extends CoordinateModel { }

const width: number = 12.27;
const height: number = 20;

function JSX({ x = 0, y = 0 }: Props): JSX.Element {
    return (
        <path transform={`translate(${x}, ${y})`} d="M 1.1681188e-4,3.396808 C -1.7521782e-4,5.273525 1.5214747,6.769967 3.3980575,6.794707 5.5350724,6.822217 7.7057876,5.951156 9.0751732,4.799128 8.4066004,9.265536 5.6037578,16.886489 4.4488972,19.573249 4.1801715,20.198123 6.7388188,20.095428 6.8559812,19.533299 7.5652045,16.130884 10.00155,6.888606 10.951814,4.821876 11.34915,3.957708 11.945475,2.302747 12.226407,1.793458 12.376803,1.520784 12.139087,1.195487 11.749581,1.638794 11.123061,2.351965 10.479018,2.826952 10.096635,3.041179 9.0177018,3.645569 7.6505355,4.283666 6.6847349,4.23641 6.7562239,3.962159 6.7945381,3.679994 6.7945381,3.396585 6.7945381,1.520784 5.2737059,3.2601111e-4 3.3978823,-9.8889166e-7 1.5216499,-3.2698889e-4 3.5043563e-4,1.52033 0,3.396586 Z" />
    );
}

interface EighthRest {
    width: number,
    height: number,
    JSX: FunctionComponent<Props>
}

export default {
    width,
    height,
    JSX
} as EighthRest;