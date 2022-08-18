/* eslint-disable */

import kind from '@enact/core/kind';
import {Panel} from '@enact/sandstone/Panels';
import Scroller from '@enact/sandstone/Scroller';
import Repeater from '@enact/ui/Repeater';
import Card from '../components/Card/Card';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import { v4 as uuidv4 } from 'uuid';


let rows = [];

for (let i = 0; i < 2; i++) {
	let cards = [];
	for (let j = 0; j < 6; j++) {
		cards.push({
			image: "https://loremflickr.com/400/225/cat?random=" + j + i,
			key: uuidv4(),
            keycopy:uuidv4()
		})
	}
	rows.push(cards);
}


const CardsPanel = kind({
	name: 'CardsPanel',

	render: ({...rest}) => (
		<Panel {...rest} >
             <Scroller id='main' direction='vertical' style={{height:'90vh', paddingTop: '16px'}} verticalScrollbar={'hidden'}>
                <Scroller id='cards1' direction='horizontal' scrollMode={'translate'} style={{height:'276px'}} horizontalScrollbar={'hidden'}>
                    <div style={{width: rows[0].length * 600}}>
                        <Repeater childComponent={Card} indexProp='index'>
                            {rows[0]}
                        </Repeater>
                    </div>
                </Scroller>
                <Scroller id='cards2' direction='horizontal' scrollMode={'translate'} style={{height:'276px'}} horizontalScrollbar={'hidden'}>
                    <div style={{width: rows[0].length * 600}}>
                        <Repeater childComponent={Card} indexProp='index'>
                            {rows[1]}
                        </Repeater>
                    </div>
                </Scroller>                    
            </Scroller>
		</Panel>
	)
});

export default ThemeDecorator(CardsPanel);
