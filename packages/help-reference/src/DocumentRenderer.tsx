import { ComponentProps } from 'react';
import { KeystaticRenderer } from './renderer';
import { Box } from '@ag.ds-next/react/box';
import { Prose, proseBlockClassname } from '@ag.ds-next/react/prose';
import { Callout } from '@ag.ds-next/react/callout';
import { TextLinkExternal } from '@ag.ds-next/react/text-link';
import { Card, CardInner } from '@ag.ds-next/react/card';

export const DocumentRenderer = ({
	document,
	renderers,
	componentBlocks,
}: ComponentProps<typeof KeystaticRenderer>) => (
	<KeystaticRenderer
		document={document}
		renderers={{
			block: {
				block: ({ children }) => <>{children}</>,
				...renderers?.block,
			},
			inline: {
				link: ({ href, children }) => (
					<TextLinkExternal href={href}>{children}</TextLinkExternal>
				),
				...renderers?.inline,
			},
		}}
		componentBlocks={{
			...componentBlocks,
			callout: (props) => (
				<Box className={proseBlockClassname}>
					<Callout title={props.title} tone={props.tone}>
						<Prose>
							<DocumentRenderer document={props.embeddedDocument} />
						</Prose>
					</Callout>
				</Box>
			),
			panel: (props) => (
				<Card className={proseBlockClassname}>
					<CardInner>
						<Prose>
							<DocumentRenderer document={props.embeddedDocument} />
						</Prose>
					</CardInner>
				</Card>
			),
		}}
	/>
);
