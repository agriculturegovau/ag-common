import { Fragment, PropsWithChildren, useEffect, useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Prose } from '@ag.ds-next/react/prose';
import { PageContent } from '@ag.ds-next/react/content';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { Radio } from '@ag.ds-next/react/radio';
import { Stack } from '@ag.ds-next/react/stack';
import { Modal } from '@ag.ds-next/react/modal';
import { AppLayout, useOpenSignOutModal } from './AppLayout';
import { Business, BusinessDetails } from './AppLayoutDropdown';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Text } from '@ag.ds-next/react/text';
import { AppErrorComponents } from './AppLayoutContent';
import { AuthDetails, getReadableProof } from './proofing';

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

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const handleSignOut = async () => {
	await delay(2000);
	alert('You have been signed out.');
};

export const Basic: Story = {
	args: {
		focusMode: false,
		userName: 'Toto Wolff',
		unreadMessageCount: 6,
		activePath: '/',
		handleSignOut,
	},
};

export const FocusMode: Story = {
	args: {
		focusMode: true,
		userName: 'Toto Wolff',
		unreadMessageCount: 6,
		activePath: '/',
		handleSignOut,
	},
};

export const ClientSideFetch: Story = {
	args: {
		activePath: '/',
		focusMode: false,
		handleSignOut,
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
		handleSignOut,
	},
	render: function Render(props) {
		const [businessDetails, setBusinessDetails] = useState<
			Omit<BusinessDetails<BusinessFromAPI>, 'setSelectedBusiness'>
		>({
			linkedBusinesses: exampleBusinesses,
			selectedBusiness: exampleBusinesses[1],
		});

		const [authDetails, setAuthDetails] = useState<AuthDetails>({
			provider: 'myID',
		});

		const setSelectedBusiness = (selectedBusiness: BusinessFromAPI) =>
			setBusinessDetails((details) => ({ ...details, selectedBusiness }));

		const onChange = (n: number) => () => {
			const linkedBusinesses = exampleBusinesses.slice(0, n);
			const selectedBusiness = linkedBusinesses[0];
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
					authDetails={authDetails}
				>
					<PageContent>
						<Stack gap={3}>
							<Prose>
								<h1>Business dropdown configuration</h1>
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

							<ControlGroup label="Auth provider" block hideOptionalLabel>
								{['myID', 'B2CLocalUser'].map((provider) => (
									<Radio
										key={provider}
										checked={authDetails?.provider === provider}
										onChange={() =>
											setAuthDetails((previous) => ({
												...previous,
												provider,
											}))
										}
									>
										{provider}
									</Radio>
								))}
							</ControlGroup>
						</Stack>
					</PageContent>
				</AppLayout>
			</Fragment>
		);
	},
};

export const BusinessDropdownModalInterrupt: Story = {
	args: {
		focusMode: false,
		userName: 'Toto Wolff',
		unreadMessageCount: 6,
		activePath: '/',
		handleSignOut,
	},
	render: function Render(props) {
		const linkedBusinesses = exampleBusinesses;
		const [selectedBusiness, setSelectedBusiness] = useState(
			linkedBusinesses[1]
		);
		const [targetBusiness, setTargetBusiness] = useState<
			BusinessFromAPI | undefined
		>();
		const clearTargetBusiness = () => setTargetBusiness(undefined);

		const businessDetails = {
			linkedBusinesses,
			selectedBusiness,
			setSelectedBusiness: setTargetBusiness,
		};

		return (
			<Fragment>
				<SkipLinks
					links={[{ href: '#main-content', label: 'Skip to main content' }]}
				/>
				<AppLayout {...props} businessDetails={businessDetails}>
					<Modal
						isOpen={targetBusiness !== undefined}
						onDismiss={clearTargetBusiness}
						title="Are you sure you want to leave this page?"
						actions={
							<ButtonGroup>
								<Button
									onClick={() => {
										if (targetBusiness !== undefined) {
											setSelectedBusiness(targetBusiness);
										}

										setTargetBusiness(undefined);
									}}
								>
									Leave this page
								</Button>
								<Button variant="secondary" onClick={clearTargetBusiness}>
									Stay on this page
								</Button>
							</ButtonGroup>
						}
					>
						<Text as="p">
							You will lose all changes made since your last save.
						</Text>
					</Modal>

					<PageContent>
						<Stack gap={3}>
							<Prose>
								<h1>Active business: {selectedBusiness?.partyDisplayName}</h1>
							</Prose>
						</Stack>
					</PageContent>
				</AppLayout>
			</Fragment>
		);
	},
};

export const QuotasEnabled: Story = {
	args: {
		focusMode: false,
		userName: 'Toto Wolff',
		unreadMessageCount: 6,
		activePath: '/',
		features: { quotas: true },
	},
};

export const SignOutModalTrigger: Story = {
	args: {
		focusMode: false,
		userName: 'Toto Wolff',
		unreadMessageCount: 6,
		activePath: '/',
		handleSignOut,
	},

	render: function Render(props) {
		const businessDetails = {
			linkedBusinesses: exampleBusinesses,
			selectedBusiness: exampleBusinesses[0],
			setSelectedBusiness: () => {},
		};

		const SignOut = () => {
			const onclick = useOpenSignOutModal();
			return <Button onClick={onclick}>Sign out</Button>;
		};

		return (
			<Fragment>
				<SkipLinks
					links={[{ href: '#main-content', label: 'Skip to main content' }]}
				/>
				<AppLayout {...props} businessDetails={businessDetails}>
					<PageContent>
						<Stack gap={3}>
							<Prose>
								<h1>Sign out button</h1>

								<p>
									You can trigger the sign out modal using the{' '}
									<code>useOpenSignOutModal</code> hook.
								</p>
							</Prose>

							<ButtonGroup>
								<SignOut />
							</ButtonGroup>
						</Stack>
					</PageContent>
				</AppLayout>
			</Fragment>
		);
	},
};

export const ExportDocumentationEnabled: Story = {
	args: {
		focusMode: false,
		userName: 'Toto Wolff',
		unreadMessageCount: 6,
		activePath: '/',
		features: { exportDocumentation: true },
	},
};

export const Claims: Story = {
	args: {
		focusMode: false,
		unreadMessageCount: 6,
		activePath: '/',
		handleSignOut,
		claims: {
			given_name: 'given_name',
			family_name: 'family_name',
		},
	},
};

export const ClaimsMissingName: Story = {
	args: {
		focusMode: false,
		unreadMessageCount: 6,
		activePath: '/',
		handleSignOut,
		claims: {
			family_name: 'family_name',
		},
	},
};

export const ClaimsMissingNameAnalytics: Story = {
	args: {
		focusMode: false,
		unreadMessageCount: 6,
		activePath: '/',
		handleSignOut,
		claims: {
			family_name: 'family_name',
		},
		errorComponents: {
			MissingName: (props: PropsWithChildren) => {
				useEffect(() => {
					console.log('report this situation to an analytics provider here');
				}, []);

				return <AppErrorComponents.MissingName {...props} />;
			},
		},
	},
};

export const ClaimsMissingNameComponent: Story = {
	args: {
		focusMode: false,
		unreadMessageCount: 6,
		activePath: '/',
		handleSignOut,
		claims: {
			family_name: 'family_name',
		},
		errorComponents: {
			MissingName: (props: PropsWithChildren) => (
				<PageContent>
					<Prose>
						<p>Our app works just fine even without a generic name.</p>
						<hr />

						{props.children}
					</Prose>
				</PageContent>
			),
		},
	},
};

export const ClaimsMissingGivenNameComponent: Story = {
	args: {
		focusMode: false,
		unreadMessageCount: 6,
		activePath: '/',
		handleSignOut,
		claims: {
			family_name: 'family_name',
		},
		errorComponents: {
			MissingGivenName: (props: PropsWithChildren) => {
				const onClick = useOpenSignOutModal();

				return (
					<PageContent>
						<Prose>
							<p>Our app works just fine even without a given name.</p>
							<hr />

							{props.children}
							<Button onClick={onClick}>Sign out</Button>
						</Prose>
					</PageContent>
				);
			},
		},
	},
};

export const RequiredProofingPaywall: Story = {
	args: {
		focusMode: false,
		unreadMessageCount: 6,
		activePath: '/',
		handleSignOut,
		claims: {
			given_name: 'given_name',
			family_name: 'family_name',

			AARM_acr: 'urn:id.gov.au:tdif:acr:ip1:cl1',
		},
		requiredProofingLevel: 'IP2',
	},
};

export const RequiredProofingPaywallAuthDetails: Story = {
	args: {
		focusMode: false,
		unreadMessageCount: 6,
		activePath: '/',
		handleSignOut,
		authDetails: {
			proofingLevel: 'IP1',
		},
		requiredProofingLevel: 'IP2',
	},
};

export const RequiredProofingPaywallActiveApp: Story = {
	args: {
		focusMode: false,
		unreadMessageCount: 6,
		activePath: '/establishments/123',
		handleSignOut,
		authDetails: {
			proofingLevel: 'IP1',
		},
		requiredProofingLevel: 'IP2',
	},
};

export const RequiredProofingPaywallCustom: Story = {
	args: {
		focusMode: false,
		unreadMessageCount: 6,
		activePath: '/establishments/123',
		handleSignOut,
		authDetails: {
			proofingLevel: 'IP1',
		},
		requiredProofingLevel: 'custom',
	},
};

export const RequiredProofingPaywallCustomComponent: Story = {
	args: {
		focusMode: false,
		unreadMessageCount: 6,
		activePath: '/',
		handleSignOut,
		authDetails: {
			proofingLevel: 'IP1',
		},
		requiredProofingLevel: 'IP3',
		errorComponents: {
			ProofMissing: (props) => {
				return (
					<PageContent>
						<Prose>
							<p>
								Your proofing level is insufficient at{' '}
								{getReadableProof(props.providedProofingLevel)}. Please fix it.
							</p>

							<p>
								you should provide at least &apos;
								{getReadableProof(props.requiredProofingLevel)}&apos;
							</p>
						</Prose>
					</PageContent>
				);
			},
		},
	},
};

export const RequiredProofingMet: Story = {
	args: {
		focusMode: false,
		unreadMessageCount: 6,
		activePath: '/',
		handleSignOut,
		authDetails: {
			proofingLevel: 'IP2',
		},
		requiredProofingLevel: 'IP2',
	},
};

export const RequiredProofingMetMany: Story = {
	args: {
		focusMode: false,
		unreadMessageCount: 6,
		activePath: '/',
		handleSignOut,
		authDetails: {
			proofingLevel: ['IP1', 'IP2', 'IP3'],
		},
		requiredProofingLevel: 'IP3',
	},
};

export const RequiredProofingMetAlias: Story = {
	args: {
		focusMode: false,
		unreadMessageCount: 6,
		activePath: '/',
		handleSignOut,
		claims: {
			given_name: 'given_name',
			family_name: 'family_name',
			AARM_acr: 'urn:id.gov.au:tdif:acr:ip3:cl2',
		},
		requiredProofingLevel: 'IP1', // IP1 is met by the ip3 claim above ^
	},
};
