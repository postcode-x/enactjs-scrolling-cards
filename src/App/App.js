import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import CardsPanel from '../views/CardsPanel';

const App = kind({
	name: 'App',

	render: ({...rest}) => (
		<div {...rest}>
			<CardsPanel />
		</div>
	)
});

export default ThemeDecorator(App);
