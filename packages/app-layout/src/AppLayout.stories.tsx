import { Fragment, useEffect, useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Prose } from '@ag.ds-next/react/prose';
import { PageContent } from '@ag.ds-next/react/content';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { Radio } from '@ag.ds-next/react/radio';
import { Stack } from '@ag.ds-next/react/stack';
import { AppLayout } from './AppLayout';
import { Business, BusinessDetails } from './AppLayoutDropdown';

type BusinessFromAPI = Business & { someExtraInfo: string };

const exampleBusinesses: BusinessFromAPI[] = [
	{
		partyId: 1,
		partyDisplayName: 'Jefferson PTY LTD',
		roleDisplayName: 'Role 1',
		formattedPartyExternalId: 'ABN: 89 790 756 100',
		someExtraInfo: 'our component allows this field but does not use it at all',
	},
	{
		partyId: 2,
		partyDisplayName: 'Metaweb',
		roleDisplayName: 'Role 2',
		formattedPartyExternalId: 'ABN: 89 790 756 100',
		someExtraInfo: 'our component allows this field but does not use it at all',
	},
	{
		partyId: 3,
		partyDisplayName: 'Fresh Produce Australia',
		roleDisplayName: 'Role 3',
		formattedPartyExternalId: 'ABN: 92 635 964 018',
		someExtraInfo: 'our component allows this field but does not use it at all',
	},
	{
		partyId: 4,
		partyDisplayName: 'Fresh Produce Australia',
		roleDisplayName: 'Role 3',
		formattedPartyExternalId: 'ABN: 92 635 964 018',
		someExtraInfo: 'our component allows this field but does not use it at all',
	},
];

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
		unreadMessageCount: 6,
		activePath: '/',
	},
};

export const FocusMode: Story = {
	args: {
		focusMode: true,
		userName: 'Toto Wolff',
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

export const BusinessDropdown: Story = {
	args: {
		focusMode: false,
		userName: 'Toto Wolff',
		unreadMessageCount: 6,
		activePath: '/',
	},
	render: function Render(props) {
		const [businessDetails, setBusinessDetails] = useState<
			Omit<BusinessDetails<BusinessFromAPI>, 'setSelectedBusiness'>
		>({
			linkedBusinesses: exampleBusinesses,
			selectedBusiness: exampleBusinesses[1],
		});

		const setSelectedBusiness = (selectedBusiness: BusinessFromAPI) =>
			setBusinessDetails((details) => ({ ...details, selectedBusiness }));

		const onChange = (n: number) => () => {
			const linkedBusinesses = exampleBusinesses.slice(0, n);
			const selectedBusiness = linkedBusinesses.find(
				(business) =>
					business?.partyId === businessDetails?.selectedBusiness?.partyId
			);

			setBusinessDetails({ selectedBusiness, linkedBusinesses });
		};

		return (
			<Fragment>
				<SkipLinks
					links={[{ href: '#main-content', label: 'Skip to main content' }]}
				/>
				<AppLayout
					{...props}
					businessDetails={{ ...businessDetails, setSelectedBusiness }}
				>
					<PageContent>
						<Stack gap={3}>
							<Prose>
								<h1>Number of linked businesses</h1>
							</Prose>
							<ControlGroup
								label="Number of linked businesses"
								block
								hideOptionalLabel
							>
								{Array.from(new Array(exampleBusinesses.length + 1).keys()).map(
									(idx) => (
										<Radio
											key={idx}
											checked={
												businessDetails?.linkedBusinesses?.length === idx
											}
											onChange={onChange(idx)}
										>
											{idx} {idx === 0 ? 'business' : 'businesses'}
										</Radio>
									)
								)}
							</ControlGroup>
						</Stack>
					</PageContent>
				</AppLayout>
			</Fragment>
		);
	},
};
