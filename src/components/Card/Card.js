/* eslint-disable */

import Spottable from '@enact/spotlight/Spottable';
import css from './Card.module.less';
import Alert from '@enact/sandstone/Alert';
import { AlertImage } from '@enact/sandstone/Alert';
import {useCallback, useState} from 'react';

const SpottableDiv = Spottable('div');

const Card = (props) => {

	const [openAlert, setOpenAlert] = useState(false);

	const handleAlert = useCallback((event) => {
		setOpenAlert(true);
    });
	
	return (
		<>
			<SpottableDiv {...props} onClick={() => handleAlert()} className={css.card}>
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
