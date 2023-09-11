import { Fragment, useEffect, useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Prose } from '@ag.ds-next/react/prose';
import { PageContent } from '@ag.ds-next/react/content';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { AppLayout } from './AppLayout';

const meta: Meta<typeof AppLayout> = {
	title: 'AppLayout',
	component: AppLayout,
	parameters: {
		layout: 'fullscreen',
	},
	render: function Render(props) {
		return (
			<Fragment>
				<SkipLinks
					links={[{ href: '#main-content', label: 'Skip to main content' }]}
				/>
				<AppLayout {...props}>
					<PageContent>
						<Prose>
							<h1>Page heading</h1>
						</Prose>
					</PageContent>
				</AppLayout>
			</Fragment>
		);
	},
};

export default meta;

type Story = StoryObj<typeof AppLayout>;

export const Basic: Story = {
	args: {
		focusMode: false,
		userName: 'Toto Wolff',
		userOrganisation: 'Orange Meat Works',
		unreadMessageCount: 6,
		activePath: '/',
	},
};

export const FocusMode: Story = {
	args: {
		focusMode: true,
		userName: 'Toto Wolff',
		userOrganisation: 'Orange Meat Works',
		unreadMessageCount: 6,
		activePath: '/',
	},
};

export const ClientSideFetch: Story = {
	args: {
		activePath: '/',
		focusMode: false,
	},
	render: function Render(props) {
		const [userDetails, setUserDetails] = useState(false);

		// Mock fetching the user
		useEffect(() => {
			setTimeout(() => {
				setUserDetails(true);
			}, 1000);
		}, []);

		return (
			<Fragment>
				<SkipLinks
					links={[{ href: '#main-content', label: 'Skip to main content' }]}
				/>
				<AppLayout
					{...props}
					{...(userDetails
						? {
								userName: 'Toto Wolff',
								userOrganisation: 'Orange Meat Works',
								unreadMessageCount: 6,
						  }
						: {})}
				>
					<PageContent>
						<Prose>
							<h1>Page heading</h1>
						</Prose>
					</PageContent>
				</AppLayout>
			</Fragment>
		);
	},
};
