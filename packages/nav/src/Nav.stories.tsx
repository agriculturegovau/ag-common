import { ComponentMeta, ComponentStory } from '@storybook/react';
import { fakeMessages, fakeRoleSwitcher, fakeUser, Layout } from './Nav';
import { SetSubnav } from './NavCtx';
import { SampleContent } from './Parts';

export default {
	title: 'Layout',
	component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Expanded = Template.bind({});
Expanded.args = {};

export const CustomChildren = () => {
	return (
		<Layout
			mode="export-layout"
			space="authenticated"
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
		</Layout>
	);
};

export const Unauth = () => {
	return (
		<Layout mode="export-layout" space="public">
			<SampleContent />
		</Layout>
	);
};

export const Classic = () => {
	return (
		<Layout mode="classic" authenticated activePath="/compliance">
			<SampleContent />
		</Layout>
	);
};
