import { ComponentMeta, ComponentStory } from '@storybook/react';
import { fakeMessages, fakeRoleSwitcher, fakeUser, Nav } from './Nav';
import { SetSubnav } from './NavCtx';
import { SampleContent } from './Parts';

export default {
	title: 'Nav',
	component: Nav,
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export const Expanded = Template.bind({});
Expanded.args = {};

export const CustomChildren = () => {
	return (
		<Nav
			messages={fakeMessages}
			activeUser={fakeUser}
			roleSwitcher={fakeRoleSwitcher}
		>
			<SampleContent />
			<SetSubnav
				c="progressindicator"
				identifier="progress"
				items={[{ label: 'First step', status: 'blocked' }]}
			/>
		</Nav>
	);
};
