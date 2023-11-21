import { ComponentProps, useContext } from 'react';
import { KeystaticRenderer } from './renderer';
import { Box } from '@ag.ds-next/react/box';
import { Prose, proseBlockClassname } from '@ag.ds-next/react/prose';
import { Callout } from '@ag.ds-next/react/callout';
import { TextLinkExternal } from '@ag.ds-next/react/text-link';
import { Card, CardInner } from '@ag.ds-next/react/card';
import { HelpReferenceContext } from './HelpReferenceContext';
import { DefinedMedia, definedMedia } from './DefinedMedia';

export const DocumentRenderer = ({
	document,
	renderers,
	componentBlocks,
}: ComponentProps<typeof KeystaticRenderer>) => {
	const { providerURL } = useContext(HelpReferenceContext);

	return (
		<KeystaticRenderer
			document={document}
			renderers={{
				block: {
					block: ({ children }) => <>{children}</>,
					...renderers?.block,
				},
				inline: {
					link: ({ href, children }) =>
						href.startsWith('http') ? (
							<TextLinkExternal href={href}>{children}</TextLinkExternal>
						) : (
							<TextLinkExternal href={`${providerURL}${href}`}>
								{children}
							</TextLinkExternal>
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
				predefinedMedia: (props) =>
					props?.label in definedMedia ? (
						<Box className={proseBlockClassname}>
							<DefinedMedia label={props.label} />
						</Box>
					) : null,
			}}
		/>
	);
};
