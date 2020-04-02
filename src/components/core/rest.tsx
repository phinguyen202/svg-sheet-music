import React from "react";
import { XCoordinate, YCoordinate } from "../../model/app.model";
import { RestProps } from "../../model/business.model";

// rest JSX Elements
interface RestProperties extends XCoordinate, YCoordinate {
}

function WholeRest(props: RestProperties) {
    return (
        <path transform={`translate(${props.x}, ${props.y})`} d="M 0,0 V 4 H 12 L 12,0 z" fill="black" />
    );
}

function HalfRest(props: RestProperties) {
    return (
        <WholeRest x={props.x} y={props.y} />
    );
}

function QuarterRest(props: RestProperties) {
    return (
        <path transform={`translate(${props.x}, ${props.y})`} d="M 2.7199973,0.58145719 C 3.9254577,2.1127292 7.0903185,5.9257722 7.8677417,8.4007484 8.1454642,9.2849162 7.7458507,10.689814 6.6055388,11.960465 c -0.9314157,1.037776 -1.3773704,2.327342 -0.9206452,4.031578 0.5232384,1.952979 3.6489033,5.506035 4.3656964,6.483385 0.752414,1.026218 0.0074,1.44247 -1.042589,0.651734 -1.6357044,-1.23111 -3.8224945,-1.79608 -5.2461505,-0.714129 -1.3999608,1.064177 -1.3854599,2.182306 0.6467056,5.702042 0.4452701,0.771255 0.062837,1.174998 -0.5442015,0.642912 C 2.3924676,27.469052 0.12981226,24.139036 0.01580209,22.833793 -0.29018648,19.328722 3.9254577,18.337726 5.9128614,19.543192 4.4483283,17.814719 2.619227,15.901087 2.0357786,15.340499 1.2726986,14.606883 1.0631196,13.102716 1.775184,12.212643 2.557073,11.235235 3.5002576,9.2564812 3.7951604,8.1401274 4.2512536,6.4133676 3.4693645,4.2304862 2.9154958,2.8946442 2.6164424,2.3767072 2.1580375,1.6831472 1.7100353,0.90725819 c -0.4480022,-0.775952 0.1506826,-1.41752501 1.009962,-0.325801 z" />
    );
}

function EighthRest(props: RestProperties) {
    return (
        <path transform={`translate(${props.x}, ${props.y})`} d="M 1.1681188e-4,3.396808 C -1.7521782e-4,5.273525 1.5214747,6.769967 3.3980575,6.794707 5.5350724,6.822217 7.7057876,5.951156 9.0751732,4.799128 8.4066004,9.265536 5.6037578,16.886489 4.4488972,19.573249 4.1801715,20.198123 6.7388188,20.095428 6.8559812,19.533299 7.5652045,16.130884 10.00155,6.888606 10.951814,4.821876 11.34915,3.957708 11.945475,2.302747 12.226407,1.793458 12.376803,1.520784 12.139087,1.195487 11.749581,1.638794 11.123061,2.351965 10.479018,2.826952 10.096635,3.041179 9.0177018,3.645569 7.6505355,4.283666 6.6847349,4.23641 6.7562239,3.962159 6.7945381,3.679994 6.7945381,3.396585 6.7945381,1.520784 5.2737059,3.2601111e-4 3.3978823,-9.8889166e-7 1.5216499,-3.2698889e-4 3.5043563e-4,1.52033 0,3.396586 Z" />
    );
}

function SixteenthRest(props: RestProperties) {
    return (
        <path transform={`translate(${props.x}, ${props.y})`} d="M 6.0771088,-4.8815739e-7 C 4.2732033,-3.1648816e-4 2.8104886,1.4617305 2.8101956,3.2656765 c -2.929e-4,1.804386 1.4626562,3.243152 3.2669132,3.266943 2.0545847,0.02642 4.1417422,-0.811043 5.4584082,-1.918671 -0.249625,1.667259 -1.367517,5.9928135 -2.3430507,8.9282965 -0.9341151,0.484246 -1.9825854,0.917143 -2.7653792,0.878818 0.068719,-0.263738 0.1055676,-0.534904 0.1055676,-0.807458 0,-1.80356 -1.4622461,-3.265366 -3.2657415,-3.265806 C 1.4629491,10.347547 3.5154546e-4,11.809536 4.3979257e-8,13.613605 -2.9287389e-4,15.41812 1.4626562,16.856821 3.2669132,16.880612 5.2522521,16.907032 7.3451504,16.122113 8.6724199,15.07018 7.2461441,19.220276 3.7597768,28.094669 3.1550186,29.501717 2.896665,30.10251 5.2046236,30.17117 5.3771523,29.646835 L 14.565108,1.7244655 c 0.09356,-0.284399 -0.08401,-0.574991 -0.458475,-0.148702 -0.602298,0.68568 -1.221527,1.142362 -1.589197,1.34833 -1.03734,0.581096 -2.351779,1.194595 -3.2804461,1.149164 0.068777,-0.263673 0.1055676,-0.534968 0.1055676,-0.807452 0,-1.803513 -1.4621876,-3.26536598816 -3.265683,-3.26568298816 z" />
    );
}

// mapping and rest interface
interface RestConfig extends YCoordinate{
}
const restConfigMap: Map<string, RestConfig> = new Map<string, RestConfig>([
    ['whole', {
        y: 10
    }],
    ['half', {
        y: 16
    }],
    ['quarter', {
        y: 4
    }],
    ['eighth', {
        y: 10
    }],
    ['sixteenth', {
        y: 0
    }]
]);

export function Rest(props: RestProps & XCoordinate) {
    const { duration } = props;
    const baseRest = restConfigMap.get(duration);
    let jsxRest;
    switch (duration) {
        case 'whole':
            jsxRest = <WholeRest x={props.x} y={baseRest.y} />
            break;
        case 'half':
            jsxRest = <HalfRest x={props.x} y={baseRest.y}/>
            break;
        case 'quarter':
            jsxRest = <QuarterRest x={props.x} y={baseRest.y}/>
            break;
        case 'eighth':
            jsxRest = <EighthRest x={props.x} y={baseRest.y}/>
            break;
        case 'sixteenth':
            jsxRest = <SixteenthRest x={props.x} y={baseRest.y}/>
            break;
        default:
            break;
    }
    return (
        <>
            {jsxRest}
        </>
    )
}