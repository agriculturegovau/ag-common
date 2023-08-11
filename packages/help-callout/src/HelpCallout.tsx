import { Box } from '@ag.ds-next/react/box';
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
				<Box>
					Access our{' '}
					<TextLinkExternal href={props.helpHref ?? '/help'}>
						help articles
					</TextLinkExternal>
				</Box>
			)}

			<Box>
				Email{' '}
				<TextLink href="mailto:exportservice@aff.gov.au">
					exportservice@aff.gov.au
				</TextLink>
			</Box>

			<Box>
				Call <TextLink href="tel:1800571125">1800&nbsp;571&nbsp;125</TextLink>,
				Monday to Friday, 9 am to 5 pm AEST
			</Box>
		</Callout>
	</CoreProvider>
);
