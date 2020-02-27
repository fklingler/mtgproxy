import { css } from 'lit-element';

export const resultsCardStyles = css`
p {
    margin-top: 0mm;
    margin-bottom: 1mm;
}

* {
    box-sizing: border-box;
}
        
.card_frame {
    /* size of magic card is 63mm x 88mm
       proxy size is 60mm x 85mm
       0.5mm border included in this size
     */
    width: 60mm;
    height: 85mm;
    padding: 2mm;
    border: 0.5mm solid black;
    float: left;
    page-break-inside: avoid;
    overflow: hidden;
    
    font-family: 'Open Sans', sans-serif;
    font-size: 3.75mm;
    line-height: 100%;
    text-rendering: geometricPrecision;
}

@media print {
    .dont_print {
        display: none;
    }
}

.card_inner {
    flex: 1 1 auto;
    display: flex;
    flex-flow: column;
    height: 100%;
}

.split_left {
}

.flip_top {
}

.flip_bottom {
    -ms-transform: rotate(180deg); /* IE 9 */
    -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */
    transform: rotate(180deg);
}

.flip_divider {
    width: 100%;
}

.name {
    display: inline-block;
    vertical-align: text-top;
    font-weight: bold;
    width: 65%;
    float: left;
}

.manacost {
    display: inline-block;
    vertical-align: text-top;
    width: 35%;
    text-align: right;
    float: right;
}

.name_mana_line {
    margin-bottom: 1.5mm;
}

.typeline {
}

.oracle_div {
    font-size: 2.75mm;
    flex: 1 1 auto;
}

.power_toughness {
    text-align: right;
}

.loyalty {
    text-align: right;
}
`;
