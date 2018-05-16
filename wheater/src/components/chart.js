import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data){
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines data={props.data} heigh={120} width={180}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    )
}