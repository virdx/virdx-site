import type { Preview } from '@storybook/svelte';
import { withThemeByClassName } from '@storybook/addon-themes';

import '../src/app.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},
	tags: ['autodocs']
};
export const decorators = [
	withThemeByClassName({
		themes: {
			light: '',
			dark: 'dark'
		},
		defaultTheme: 'light'
	})
];

export default preview;
