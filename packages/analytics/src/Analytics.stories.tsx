import { ComponentProps, ReactNode } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '@ag.ds-next/react/box';
import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Column, Columns } from '@ag.ds-next/react/columns';
import {
	Card,
	CardFooter,
	CardHeader,
	CardInner,
} from '@ag.ds-next/react/card';
import { Text } from '@ag.ds-next/react/text';
import { Heading } from '@ag.ds-next/react/heading';
import {
	Analytics,
	AnalyticsContext,
	AnalyticsEventData,
	AnalyticsListener,
	useAnalytics,
} from './index';

const meta: Meta<typeof Analytics> = {
	title: 'Analytics',
	component: Analytics,
	parameters: { layout: 'fullscreen' },
	args: {
		scriptComponents: {
			Script: ({ id }) => <div>{id}</div>,
		},
	},
};

export default meta;

type Story = StoryObj<typeof Analytics>;

export const Default: Story = {
	args: {
		scriptComponents: {
			Script: (props) => (
				<Box border rounded padding={1}>
					<pre>
						<code>#{props.id}</code>
					</pre>
				</Box>
			),
		},
	},
	render: (args) => (
		<PageContent>
			<Stack gap={1}>
				<Analytics {...args}>
					<Prose>
						<h1>Your app code here</h1>
						<p>
							This blocks above demonstrate that a script tag was registered,
							you will not see anything in your actual page.
						</p>
						<p>Try turning providers on and off with the controls below 👇</p>
					</Prose>
				</Analytics>
			</Stack>
		</PageContent>
	),
};

const EventButton = ({
	name,
	data = {},
	children,
	variant = 'secondary',
	...more
}: {
	name: string;
	data?: AnalyticsEventData;
	children?: ReactNode;
} & ComponentProps<typeof Button>) => {
	const { trackEvent } = useAnalytics();

	return (
		<Button
			{...more}
			variant={variant}
			onClick={() => {
				trackEvent(name, data);
			}}
		>
			{children ?? name}
		</Button>
	);
};

export const CustomEventHandler: Story = {
	args: {
		onEvent: (name, data) => {
			alert(`trackEvent(${name}, ${JSON.stringify(data)})`);
		},
	},
	render: (args) => (
		<Analytics {...args}>
			<PageContent>
				<Prose>
					<h1>Custom event handlers</h1>
					<p>Some nice text about starting a form application.</p>
					<p>
						<ButtonGroup>
							<EventButton
								name="application-progress"
								data={{ status: 'started' }}
							>
								Begin
							</EventButton>
							<EventButton
								name="application-progress"
								variant="secondary"
								data={{ status: 'stopped' }}
							>
								Cancel
							</EventButton>
						</ButtonGroup>
					</p>
				</Prose>
			</PageContent>
		</Analytics>
	),
};

const VisibleContext = (args: ComponentProps<typeof AnalyticsContext>) => (
	<Stack gap={1} css={{ border: '2px dashed #fec0ff', padding: '2px' }}>
		<Box css={{ background: '#fec0ff', padding: '2px 2px' }}>
			<code>{JSON.stringify(args.data)}</code>
		</Box>
		<AnalyticsContext {...args} />
	</Stack>
);

const VisibleListener = ({
	label,
	children,
}: {
	label: string;
	children: ReactNode;
}) => (
	<Stack gap={1} css={{ border: '2px dashed #fec0ff', padding: '2px' }}>
		<Box css={{ background: '#fec0ff', padding: '2px 2px' }}>
			<code>{label}</code>
		</Box>
		<AnalyticsListener
			onEvent={(name, data) => {
				alert(`${label}:trackEvent(${name}, ${JSON.stringify(data)})`);
			}}
		>
			{children}
		</AnalyticsListener>
	</Stack>
);

export const NestedDataContext: Story = {
	args: {
		onEvent: (name, data) => {
			alert(`trackEvent(${name}, ${JSON.stringify(data)})`);
		},
	},
	render: (args) => (
		<Analytics {...args}>
			<PageContent>
				<VisibleContext
					data={{
						page: 'registration-info',
					}}
				>
					<Prose>
						<h1>Nested data context</h1>
						<p>
							Our page can build up data that will be submitted with an event
						</p>
						<p>
							<EventButton name="info-page-click">Page context</EventButton>
						</p>

						<p>Some more interesting info about the Export Service.</p>
					</Prose>

					<VisibleContext data={{ section: 'cards' }}>
						<EventButton name="info-page-click">Section context</EventButton>

						<Columns>
							<Column columnSpan={6}>
								<VisibleContext data={{ card: 'card-1' }}>
									<Card>
										<CardHeader>
											<Heading type="h4">Feature card title</Heading>
										</CardHeader>
										<CardInner>
											<Text as="p">Additional conent relating to the card</Text>
										</CardInner>

										<CardFooter>
											<EventButton name="info-page-click">
												Find out more
											</EventButton>
										</CardFooter>
									</Card>
								</VisibleContext>
							</Column>

							<Column columnSpan={6}>
								<VisibleContext data={{ card: 'card-2' }}>
									<Card>
										<CardHeader>
											<Heading type="h4">Feature card title</Heading>
										</CardHeader>
										<CardInner>
											<Text as="p">Additional conent relating to the card</Text>
										</CardInner>

										<CardFooter>
											<EventButton
												name="info-page-click"
												data={{ userName: 'Sam' }}
											>
												Start application with user-data
											</EventButton>
										</CardFooter>
									</Card>
								</VisibleContext>
							</Column>
						</Columns>
					</VisibleContext>
				</VisibleContext>
			</PageContent>
		</Analytics>
	),
};

export const NestedEventListeners: Story = {
	args: {
		onEvent: (name, data) => {
			alert(`trackEvent(${name}, ${JSON.stringify(data)})`);
		},
	},
	render: (args) => (
		<Analytics {...args}>
			<PageContent>
				<VisibleListener label="page-listener">
					<Prose>
						<h1>Nested event listeners</h1>
						<p>
							The <code>AnalyticsListener</code> component allows you to attach
							additional event listeners to sections of your page. The events
							will bubble and also trigger the outer listeners.
						</p>
						<p>
							Use this if you want to report something specific for parts of
							your application
						</p>
						<p>
							<EventButton name="info-page-click">Page click</EventButton>
						</p>

						<p>Some more interesting info about the Export Service.</p>
					</Prose>

					<VisibleListener label="card-listener">
						<EventButton name="info-section-click">Section click</EventButton>

						<Columns>
							<Column columnSpan={6}>
								<VisibleListener label="card-1">
									<Card>
										<CardHeader>
											<Heading type="h4">Feature card title</Heading>
										</CardHeader>
										<CardInner>
											<Text as="p">
												Additional content relating to the card
											</Text>
										</CardInner>

										<CardFooter>
											<EventButton name="info-card1-click">
												Find out more
											</EventButton>
										</CardFooter>
									</Card>
								</VisibleListener>
							</Column>

							<Column columnSpan={6}>
								<VisibleListener label="card-2">
									<Card>
										<CardHeader>
											<Heading type="h4">Feature card title</Heading>
										</CardHeader>
										<CardInner>
											<Text as="p">
												Additional content relating to the card
											</Text>
										</CardInner>

										<CardFooter>
											<EventButton
												name="info-card2-click"
												data={{ userName: 'Sam' }}
											>
												Start application with user-data
											</EventButton>
										</CardFooter>
									</Card>
								</VisibleListener>
							</Column>
						</Columns>
					</VisibleListener>
				</VisibleListener>
			</PageContent>
		</Analytics>
	),
};
