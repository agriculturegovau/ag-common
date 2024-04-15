import { Callout } from '@ag.ds-next/react/callout';
import { CoreProvider } from '@ag.ds-next/react/core';
import { Text } from '@ag.ds-next/react/text';
import { TextLink, TextLinkExternal } from '@ag.ds-next/react/text-link';

interface NeedHelpCalloutProps {
	hideHelpArticles?: boolean;
	helpHref?: string;
	internal?: boolean;
}

export const NeedHelpCallout = (props: NeedHelpCalloutProps) => {
	const LinkComponent = props?.internal === true ? TextLink : TextLinkExternal;

	return (
		<CoreProvider>
			<Callout
				title={
					props?.hideHelpArticles === true ? 'Need more help?' : 'Need help?'
				}
			>
				{props?.hideHelpArticles === true ? null : (
					<Text>
						Search our{' '}
						<LinkComponent href={props.helpHref ?? '/help'}>Help</LinkComponent>{' '}
						pages
					</Text>
				)}
				<Text>
					Email{' '}
					<TextLink href="mailto:exportservice@aff.gov.au">
						exportservice@aff.gov.au
					</TextLink>
				</Text>
				<Text>
					Call <TextLink href="tel:1800571125">1800&nbsp;571&nbsp;125</TextLink>
					, Monday to Friday, 9 am to 5 pm AEST
				</Text>
			</Callout>
		</CoreProvider>
	);
};
