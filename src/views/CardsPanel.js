/* eslint-disable */

import kind from '@enact/core/kind';
import {Panel} from '@enact/sandstone/Panels';
import BodyText from '@enact/sandstone/BodyText';
import Scroller from '@enact/sandstone/Scroller';
import Repeater from '@enact/ui/Repeater';
import Card from '../components/Card/Card';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import { v4 as uuidv4 } from 'uuid';


let rows = [];

for (let i = 0; i < 10; i++) {
	let cards = [];
	for (let j = 0; j < 10; j++) {
		cards.push({
			image: "https://loremflickr.com/400/225/cat?random=" + j + i,
			key: uuidv4()
		})
	}
	rows.push(cards);
}

const CardsPanel = kind({
	name: 'CardsPanel',

	render: ({...rest}) => (
		<Panel {...rest} >
            <Scroller id='main' direction='vertical' style={{height:'90vh', paddingTop: '16px'}} verticalScrollbar={'hidden'}>
                <BodyText style={{position: 'absolute' }}>Cards 1</BodyText>
                <Scroller id='cards1' direction='horizontal' scrollMode={'translate'} style={{height:'240px', paddingTop: '40px'}} horizontalScrollbar={'hidden'}>
                    <div style={{width: rows[0].length * 500}}>
                        <Repeater childComponent={Card} indexProp='index' itemProps={{listlength: rows[0].length}}>
                            {rows[0]}
                        </Repeater>
                    </div>
                </Scroller>
                <BodyText style={{position: 'absolute' }}>Cards 2</BodyText>
                <Scroller id='cards2' direction='horizontal' scrollMode={'translate'} style={{height:'240px', paddingTop: '40px'}} horizontalScrollbar={'hidden'}>
                    <div style={{width: rows[1].length * 500}}>
                        <Repeater childComponent={Card} indexProp='index' itemProps={{listlength: rows[1].length}}>
                            {rows[1]}
                        </Repeater>
                    </div>
                </Scroller>
                <BodyText style={{position: 'absolute' }}>Cards 3</BodyText>
                <Scroller id='cards3' direction='horizontal' scrollMode={'translate'} style={{height:'240px', paddingTop: '40px'}} horizontalScrollbar={'hidden'}>
                    <div style={{width: rows[2].length * 500}}>
                        <Repeater childComponent={Card} indexProp='index' itemProps={{listlength: rows[2].length}}>
                            {rows[2]}
                        </Repeater>
                    </div>
                </Scroller>
                <BodyText style={{position: 'absolute' }}>Cards 4</BodyText>
                <Scroller id='cards4' direction='horizontal' scrollMode={'translate'} style={{height:'240px', paddingTop: '40px'}} horizontalScrollbar={'hidden'}>
                    <div style={{width: rows[3].length * 500}}>
                        <Repeater childComponent={Card} indexProp='index' itemProps={{listlength: rows[3].length}}>
                            {rows[3]}
                        </Repeater>
                    </div>
                </Scroller>
                <BodyText style={{position: 'absolute' }}>Cards 5</BodyText>
                <Scroller id='cards5' direction='horizontal' scrollMode={'translate'} style={{height:'240px', paddingTop: '40px'}} horizontalScrollbar={'hidden'}>
                    <div style={{width: rows[4].length * 500}}>
                        <Repeater childComponent={Card} indexProp='index' itemProps={{listlength: rows[4].length}}>
                            {rows[4]}
                        </Repeater>
                    </div>
                </Scroller>
                <BodyText style={{position: 'absolute' }}>Cards 6</BodyText>
                <Scroller id='cards6' direction='horizontal' scrollMode={'translate'} style={{height:'240px', paddingTop: '40px'}} horizontalScrollbar={'hidden'}>
                    <div style={{width: rows[5].length * 500}}>
                        <Repeater childComponent={Card} indexProp='index' itemProps={{listlength: rows[5].length}}>
                            {rows[5]}
                        </Repeater>
                    </div>
                </Scroller>
                <BodyText style={{position: 'absolute' }}>Cards 7</BodyText>
                <Scroller id='cards7' direction='horizontal' scrollMode={'translate'} style={{height:'240px', paddingTop: '40px'}} horizontalScrollbar={'hidden'}>
                    <div style={{width: rows[6].length * 500}}>
                        <Repeater childComponent={Card} indexProp='index' itemProps={{listlength: rows[6].length}}>
                            {rows[6]}
                        </Repeater>
                    </div>
                </Scroller>
                <BodyText style={{position: 'absolute' }}>Cards 8</BodyText>
                <Scroller id='cards8' direction='horizontal' scrollMode={'translate'} style={{height:'240px', paddingTop: '40px'}} horizontalScrollbar={'hidden'}>
                    <div style={{width: rows[7].length * 500}}>
                        <Repeater childComponent={Card} indexProp='index' itemProps={{listlength: rows[7].length}}>
                            {rows[7]}
                        </Repeater>
                    </div>
                </Scroller>
                <BodyText style={{position: 'absolute' }}>Cards 9</BodyText>
                <Scroller id='cards9' direction='horizontal' scrollMode={'translate'} style={{height:'240px', paddingTop: '40px'}} horizontalScrollbar={'hidden'}>
                    <div style={{width: rows[8].length * 500}}>
                        <Repeater childComponent={Card} indexProp='index' itemProps={{listlength: rows[8].length}}>
                            {rows[8]}
                        </Repeater>
                    </div>
                </Scroller>
                <BodyText style={{position: 'absolute' }}>Cards 10</BodyText>
                <Scroller id='cards10' direction='horizontal' scrollMode={'translate'} style={{height:'240px', paddingTop: '40px'}} horizontalScrollbar={'hidden'}>
                    <div style={{width: rows[9].length * 500}}>
                        <Repeater childComponent={Card} indexProp='index' itemProps={{listlength: rows[9].length}}>
                            {rows[9]}
                        </Repeater>
                    </div>
                </Scroller>
            </Scroller>
		</Panel>
	)
});

export default ThemeDecorator(CardsPanel);