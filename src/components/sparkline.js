import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
    return _.round(_.sum(data)/data.length);
}

export default ({ data, color = 'blue' }) => {
    return (
        <div>
            <Sparklines data={data} height={80} >
                <SparklinesLine color={color} />
                <SparklinesReferenceLine type='mean' />
            </Sparklines>
            <div>{average(data)}</div>
        </div>
    );
}
