import { Fragment, useEffect, useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Prose } from '@ag.ds-next/react/prose';
import { PageContent } from '@ag.ds-next/react/content';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { AppLayout } from './AppLayout';
import { Business, BusinessDetails } from './AppLayoutDropdown';
import { TextLink } from '@ag.ds-next/react/text-link';

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
		businessDetails: {
			linkedBusinesses: exampleBusinesses,
			selectedBusiness: exampleBusinesses[1],
			setSelectedBusiness: () => {},
		},
	},
	render: function Render({ businessDetails: businessDetails_, ...props }) {
		const [selectedBusiness, setSelectedBusiness] = useState<
			Business | undefined
		>(businessDetails_?.selectedBusiness);

		const businessDetails = {
			...businessDetails_,
			setSelectedBusiness,
			selectedBusiness,
		};

		return (
			<Fragment>
				<SkipLinks
					links={[{ href: '#main-content', label: 'Skip to main content' }]}
				/>
				<AppLayout {...props} businessDetails={businessDetails}>
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

export const BusinessDropdownLengths: Story = {
	args: {
		focusMode: false,
		userName: 'Toto Wolff',
		unreadMessageCount: 6,
		activePath: '/',
	},
	render: function Render(props) {
		const [businessDetails, setBusinessDetails] = useState<
			BusinessDetails<BusinessFromAPI>
		>({
			linkedBusinesses: exampleBusinesses,
			selectedBusiness: exampleBusinesses[1],
			setSelectedBusiness: () => {},
		});

		const setBusinessLength = (n: number) => () =>
			setBusinessDetails((details) => ({
				...details,
				linkedBusinesses: exampleBusinesses.slice(0, n),
			}));

		return (
			<Fragment>
				<SkipLinks
					links={[{ href: '#main-content', label: 'Skip to main content' }]}
				/>
				<AppLayout {...props} businessDetails={businessDetails}>
					<PageContent>
						<Prose>
							<h1>Number of linked businesses</h1>

							<p>
								<TextLink onClick={setBusinessLength(4)}>4 businesses</TextLink>
							</p>
							<p>
								<TextLink onClick={setBusinessLength(3)}>3 businesses</TextLink>
							</p>
							<p>
								<TextLink onClick={setBusinessLength(2)}>2 businesses</TextLink>
							</p>
							<p>
								<TextLink onClick={setBusinessLength(1)}>1 businesses</TextLink>
							</p>
							<p>
								<TextLink onClick={setBusinessLength(0)}>0 businesses</TextLink>
							</p>
						</Prose>
					</PageContent>
				</AppLayout>
			</Fragment>
		);
	},
};
