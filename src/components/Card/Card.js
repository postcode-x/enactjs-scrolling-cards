/* eslint-disable */

import Spottable from '@enact/spotlight/Spottable';
import css from './Card.module.less';
import Alert from '@enact/sandstone/Alert';
import { AlertImage } from '@enact/sandstone/Alert';
import {useCallback, useState} from 'react';

const SpottableDiv = Spottable('div');

const Card = (props) => {

	const [openAlert, setOpenAlert] = useState(false);

	const handleAlert = useCallback((ev) => {
		setOpenAlert(true);
    });

	const handleSpotlightRight = useCallback((ev) => {
		ev.preventDefault()
		ev.stopPropagation();
	});

	const handleSpotlightLeft = useCallback((ev) => {
		ev.preventDefault();
		ev.stopPropagation();
	});
	
	return (console.log(props),
		<>
			<SpottableDiv {...props}   
				onClick={() => handleAlert()} 
				className={css.card}
				onSpotlightLeft = {(ev) => {props.index === 0 ? handleSpotlightLeft(ev) : null}}
				onSpotlightRight = {(ev) => {props.listlength - (props.index + 1) === 0 ? handleSpotlightRight(ev) : null}}>
				<img src={props.image} className={css.cardImage} />
			</SpottableDiv>
			{<Alert
				onClose={() => setOpenAlert(false)}
				open={openAlert}
				title="Click me..."
			>
					<AlertImage src={props.image} type="thumbnail" onClick={() => setOpenAlert(false)} style={{paddingTop: '16px'}}/>	
			</Alert>}
		</>
	)
};

export default Card;
