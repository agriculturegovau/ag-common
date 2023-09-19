import { Text } from '@ag.ds-next/react/text';
import { Callout } from '@ag.ds-next/react/callout';
import { CoreProvider } from '@ag.ds-next/react/core';
import { TextLink, TextLinkExternal } from '@ag.ds-next/react/text-link';

interface HelpCalloutProps {
	hideHelpArticles?: boolean;
	helpHref?: string;
}

export const HelpCallout = (props: HelpCalloutProps) => (
	<CoreProvider>
		<Callout title="Need more help?">
			{props.hideHelpArticles === true ? null : (
				<Text>
					Access our{' '}
					<TextLinkExternal href={props.helpHref ?? '/help'}>
						help articles
					</TextLinkExternal>
				</Text>
			)}
			<Text>
				Email{' '}
				<TextLink href="mailto:exportservice@aff.gov.au">
					exportservice@aff.gov.au
				</TextLink>
			</Text>
			<Text>
				Call <TextLink href="tel:1800571125">1800&nbsp;571&nbsp;125</TextLink>,
				Monday to Friday, 9 am to 5 pm AEST
			</Text>
		</Callout>
	</CoreProvider>
);
