import { Callout } from '@ag.ds-next/react/callout';
import { CoreProvider } from '@ag.ds-next/react/core';
import { Text } from '@ag.ds-next/react/text';
import { TextLink, TextLinkExternal } from '@ag.ds-next/react/text-link';
import { useMemo } from 'react';

type When = number; // number | Intl.FormattableTemporalObject -- add when support more widely available
type GetTZNameParams = Parameters<Intl.DateTimeFormat['formatToParts']>;

interface HelpCalloutProps {
	hideHelpArticles?: boolean;
	helpHref?: string;
	internal?: boolean;
	when?: When;
}

const getSydneyTZName = (...when: GetTZNameParams) => {
	try {
		const parts = new Intl.DateTimeFormat('en-AU', {
			timeZone: 'Australia/Sydney',
			timeZoneName: 'short',
		}).formatToParts(...when);

		return parts.find((part) => part.type === 'timeZoneName')?.value;
	} catch {
		return undefined;
	}
};

export const HelpCallout = (props: HelpCalloutProps) => {
	const LinkComponent = props?.internal === true ? TextLink : TextLinkExternal;
	const tzname = useMemo(() => getSydneyTZName(props.when), [props.when]);

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
					<TextLink href="mailto:tradeclearsupport@aff.gov.au">
						tradeclearsupport@aff.gov.au
					</TextLink>
				</Text>
				<Text>
					Call <TextLink href="tel:1800571125">1800&nbsp;571&nbsp;125</TextLink>
					, Monday to Friday, 9 am to 5 pm {tzname ?? 'AEST/AEDT'}
				</Text>
			</Callout>
		</CoreProvider>
	);
};
