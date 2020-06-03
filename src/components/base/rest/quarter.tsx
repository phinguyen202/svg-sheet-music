import { CoordinateModel } from "@model/common.model";
import React, { FunctionComponent } from "react";

interface Props extends CoordinateModel { }

const width: number = 10.36;
const height: number = 29;

function JSX(props: Props): JSX.Element {
    return (
        <path transform={`translate(${props.x}, ${props.y})`} d="M 2.7199973,0.58145719 C 3.9254577,2.1127292 7.0903185,5.9257722 7.8677417,8.4007484 8.1454642,9.2849162 7.7458507,10.689814 6.6055388,11.960465 c -0.9314157,1.037776 -1.3773704,2.327342 -0.9206452,4.031578 0.5232384,1.952979 3.6489033,5.506035 4.3656964,6.483385 0.752414,1.026218 0.0074,1.44247 -1.042589,0.651734 -1.6357044,-1.23111 -3.8224945,-1.79608 -5.2461505,-0.714129 -1.3999608,1.064177 -1.3854599,2.182306 0.6467056,5.702042 0.4452701,0.771255 0.062837,1.174998 -0.5442015,0.642912 C 2.3924676,27.469052 0.12981226,24.139036 0.01580209,22.833793 -0.29018648,19.328722 3.9254577,18.337726 5.9128614,19.543192 4.4483283,17.814719 2.619227,15.901087 2.0357786,15.340499 1.2726986,14.606883 1.0631196,13.102716 1.775184,12.212643 2.557073,11.235235 3.5002576,9.2564812 3.7951604,8.1401274 4.2512536,6.4133676 3.4693645,4.2304862 2.9154958,2.8946442 2.6164424,2.3767072 2.1580375,1.6831472 1.7100353,0.90725819 c -0.4480022,-0.775952 0.1506826,-1.41752501 1.009962,-0.325801 z" />
    );
}

interface QuarterRest {
    width: number,
    height: number,
    JSX: FunctionComponent<Props>
}

export default {
    width,
    height,
    JSX
} as QuarterRest;