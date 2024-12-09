import { Fragment } from 'react';
import { VisuallyHidden } from '@ag.ds-next/react/a11y';
import {
	DropdownMenuDivider,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuItemLink,
	DropdownMenuItemRadio,
	DropdownMenuPanel,
} from '@ag.ds-next/react/dropdown-menu';
import {
	ArrowRightIcon,
	AvatarIcon,
	ChevronsLeftIcon,
	EmailIcon,
	ExitIcon,
} from '@ag.ds-next/react/icon';
import { NotificationBadge } from '@ag.ds-next/react/notification-badge';
import { Text } from '@ag.ds-next/react/text';
import { hrefs } from './utils';

export interface Business {
	partyId: number;
	partyDisplayName: string;
	formattedPartyExternalId: string;
	roleDisplayName: string;
}

export interface BusinessOption extends Business {
	selected?: boolean;
	setSelected?: () => void;
}

export interface BusinessDetails<T extends Business> {
	selectedBusiness?: T;
	linkedBusinesses?: T[];
	setSelectedBusiness: (business: T) => void;
}

const createBusinessOptions = <T extends Business>(
	details: BusinessDetails<T>
): BusinessOption[] => {
	return (
		details?.linkedBusinesses?.map((business) => ({
			...business,
			selected: details?.selectedBusiness?.partyId === business.partyId,
			setSelected: () => details.setSelectedBusiness(business),
		})) ?? []
	);
};

export interface BusinessDropdownProps<T extends Business> {
	businessDetails: BusinessDetails<T>;
	unreadMessageCount?: number;
	onSignOutClick: () => void;
}

const LinkedBusinesses = (props: {
	businesses: BusinessOption[];
	onSelectBusiness: (business: BusinessOption) => () => void;
}) =>
	props.businesses.length === 0 ? (
		<DropdownMenuGroup label="Get started">
			<DropdownMenuItemLink href={hrefs.linkBusiness}>
				Add a business to the Export Service
			</DropdownMenuItemLink>
			<DropdownMenuItemLink href={hrefs.acceptInvite}>
				Accept an invite
			</DropdownMenuItemLink>
		</DropdownMenuGroup>
	) : (
		<DropdownMenuGroup label="Businesses">
			{props.businesses.slice(0, 3).map((business) => (
				<DropdownMenuItemRadio
					key={business.partyId}
					checked={business.selected ?? false}
					secondaryText={business.formattedPartyExternalId}
					onClick={props.onSelectBusiness(business)}
				>
					{business.partyDisplayName}
				</DropdownMenuItemRadio>
			))}
			{props.businesses.length > 3 ? (
				<DropdownMenuItemLink href="/account" endElement={<ArrowRightIcon />}>
					View all businesses
				</DropdownMenuItemLink>
			) : null}
		</DropdownMenuGroup>
	);

export const BusinessDropdown = <T extends Business>(
	props: BusinessDropdownProps<T>
) => {
	const setBusiness = (option: BusinessOption) => () => option?.setSelected?.();
	const options = createBusinessOptions(props.businessDetails);

	return (
		<DropdownMenuPanel palette="light">
			<LinkedBusinesses businesses={options} onSelectBusiness={setBusiness} />
			<DropdownMenuDivider />
			<DropdownMenuGroup label="My account">
				<DropdownMenuItemLink
					href={hrefs.messages}
					icon={EmailIcon}
					endElement={
						typeof props.unreadMessageCount === 'number' &&
						props.unreadMessageCount > 0 ? (
							<span>
								<NotificationBadge
									tone="action"
									value={props.unreadMessageCount}
									max={99}
									aria-hidden
								/>
								<VisuallyHidden>
									, {props.unreadMessageCount} unread
								</VisuallyHidden>
							</span>
						) : undefined
					}
				>
					Messages
				</DropdownMenuItemLink>
				<DropdownMenuItemLink href={hrefs.profile} icon={AvatarIcon}>
					Profile and settings
				</DropdownMenuItemLink>
			</DropdownMenuGroup>
			<DropdownMenuDivider />
			<DropdownMenuItem onClick={props.onSignOutClick} icon={ExitIcon}>
				Sign out
			</DropdownMenuItem>
		</DropdownMenuPanel>
	);
};

export const getBusinessSidebarLinks = <T extends Business>(
	details: BusinessDetails<T> | undefined
) =>
	details?.selectedBusiness === undefined
		? []
		: [
				{
					options: { disableGroupPadding: true },
					items: [
						{
							label: 'Back to my account',
							icon: ChevronsLeftIcon,
							href: '/account',
						},
					],
				},
				{
					options: { disableGroupPadding: true },
					items: [
						{
							label: (
								<Fragment>
									<Text fontWeight="bold" fontSize="xs">
										{details.selectedBusiness.partyDisplayName}
									</Text>
									<Text color="muted" fontSize="xs">
										{details.selectedBusiness.formattedPartyExternalId}
									</Text>
								</Fragment>
							),
						},
					],
				},
		  ];
