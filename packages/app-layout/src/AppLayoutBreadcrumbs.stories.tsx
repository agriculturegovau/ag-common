import { Fragment, useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Business } from './defs';
import { AppLayoutBreadcrumbs } from './AppLayoutBreadcrumbs';
import { AppLayout } from './AppLayout';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';

type BusinessFromAPI = Business & { someExtraInfo?: string };

const exampleExportBusinesses: BusinessFromAPI[] = [
	{
		partyId: 1,
		partyDisplayName: 'Jefferson PTY LTD',
		formattedPartyExternalId: '89 790 756 100',
		someExtraInfo: 'our component allows this field but does not use it at all',
		roleDisplayName: 'User',
		roleName: 'USER',
	},
	{
		partyId: 2,
		partyDisplayName: 'Metaweb (agent role)',
		formattedPartyExternalId: '89 790 756 100',
		someExtraInfo: 'our component allows this field but does not use it at all',
		roleDisplayName: 'Agent',
		roleName: 'AGENT',
	},
	{
		partyId: 3,
		partyDisplayName: 'Fresh Produce Australia',
		formattedPartyExternalId: '92 635 964 018',
		someExtraInfo: 'our component allows this field but does not use it at all',
		roleDisplayName: 'Principal Authority (Owner)',
		roleName: 'PRINCIPAL_AUTHORITY_OWNER',
	},
	{
		partyId: 4,
		partyDisplayName: 'Fresh Produce Australia',
		formattedPartyExternalId: '92 635 964 018',
		someExtraInfo: 'our component allows this field but does not use it at all',
		roleDisplayName: 'Manager',
		roleName: 'MANAGER',
	},
];

const exampleImportBusinesses: BusinessFromAPI[] = [
	{
		partyId: 5,
		partyDisplayName: 'Business A',
		formattedPartyExternalId: 'ABN: 88 888 888 888',
		roleDisplayName: 'User',
		roleGroupName: 'BIOSECURITY',
	},
	{
		partyId: 6,
		partyDisplayName: 'Business B',
		formattedPartyExternalId: 'ABN: 88 888 888 888',
		roleDisplayName: 'User',
		roleGroupName: 'BIOSECURITY',
	},
];

const exampleBusinesses = [
	...exampleExportBusinesses,
	...exampleImportBusinesses,
];

const meta: Meta<typeof AppLayoutBreadcrumbs> = {
	title: 'AppLayoutBreadcrumbs',
	component: AppLayoutBreadcrumbs,
	parameters: {
		layout: 'fullscreen',
	},
	render: function Render(props) {
		const [selectedBusiness, setSelectedBusiness] = useState<
			BusinessFromAPI | undefined
		>();

		const businessDetails = {
			linkedBusinesses: exampleBusinesses,
			selectedBusiness,
			setSelectedBusiness,
		};

		return (
			<Fragment>
				<SkipLinks
					links={[{ href: '#main-content', label: 'Skip to main content' }]}
				/>

				<AppLayout
					activePath="/intelligence"
					handleSignOut={async () => {}}
					userName="Toto Wolff"
					businessDetails={businessDetails}
				>
					<PageContent>
						<Prose>
							<AppLayoutBreadcrumbs {...props} />
							<h1>Page heading</h1>
						</Prose>
					</PageContent>
				</AppLayout>
			</Fragment>
		);
	},
};

export default meta;

type Story = StoryObj<typeof AppLayoutBreadcrumbs>;

export const Basic: Story = {
	args: {
		links: [
			{ label: 'Data and insights', href: '/intelligence' },
			{ label: 'Report 1', href: '/intelligence/report/report_1' },
		],
	},
};

export const WithoutLinks: Story = {
	args: {},
};
