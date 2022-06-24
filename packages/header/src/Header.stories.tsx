import { ComponentMeta } from '@storybook/react';
import { Header } from './Header';

export default {
	title: 'Header',
	component: Header,
} as ComponentMeta<typeof Header>;

export const Basic = Header;
