import { Fragment } from 'react';
import { VisuallyHidden } from '@ag.ds-next/react/a11y';
import {
	DropdownMenu,
	DropdownMenuButton,
	DropdownMenuDivider,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuItemLink,
	DropdownMenuItemRadio,
	DropdownMenuPanel,
} from '@ag.ds-next/react/dropdown-menu';
import {
	ExitIcon,
	HelpIcon,
	InboxIcon,
	SettingsIcon,
} from '@ag.ds-next/react/icon';
import { NotificationBadge } from '@ag.ds-next/react/notification-badge';
import { Text } from '@ag.ds-next/react/text';
import { hrefs } from './utils';
import { CoreProvider } from '@ag.ds-next/react/core';
import { ButtonLink } from '@ag.ds-next/react/button';
import { OurDropdownMenuItem } from './OurDropdown';

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
	preventAddBusiness?: boolean;
}

export interface ProfileDropdownProps {
	unreadMessageCount?: number;
	onSignOutClick: () => void;
}

const LinkedBusinesses = (props: {
	businesses: BusinessOption[];
	onSelectBusiness: (business: BusinessOption) => () => void;
	preventAddBusiness?: boolean;
}) => (
	<>
		<DropdownMenuGroup label="Businesses">
			{props.businesses.map((business) => (
				<DropdownMenuItemRadio
					key={business.partyId}
					checked={business.selected ?? false}
					secondaryText={business.formattedPartyExternalId}
					onClick={props.onSelectBusiness(business)}
				>
					{business.partyDisplayName}
				</DropdownMenuItemRadio>
			))}

			{props?.preventAddBusiness ? null : (
				<OurDropdownMenuItem>
					<ButtonLink block variant="secondary" href={hrefs.linkBusiness}>
						Add a business
					</ButtonLink>
				</OurDropdownMenuItem>
			)}

			<OurDropdownMenuItem>
				<ButtonLink block variant="secondary" href={hrefs.acceptInvite}>
					Accept an invite
				</ButtonLink>
			</OurDropdownMenuItem>
		</DropdownMenuGroup>
	</>
);

export const ProfileDropdown = (props: ProfileDropdownProps) => {
	return (
		<DropdownMenuPanel palette="light">
			<DropdownMenuItemLink href={hrefs.profile} icon={SettingsIcon}>
				Account settings
			</DropdownMenuItemLink>

			<DropdownMenuItemLink
				href={hrefs.inbox}
				icon={InboxIcon}
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
				Inbox
			</DropdownMenuItemLink>

			<CoreProvider>
				<DropdownMenuItemLink href="/help/account" icon={HelpIcon}>
					Help
				</DropdownMenuItemLink>
			</CoreProvider>

			<DropdownMenuDivider />
			<DropdownMenuItem onClick={props.onSignOutClick} icon={ExitIcon}>
				Sign out
			</DropdownMenuItem>
		</DropdownMenuPanel>
	);
};

export const BusinessDropdown = <T extends Business>(
	props: BusinessDropdownProps<T>
) => {
	const setBusiness = (option: BusinessOption) => () => option?.setSelected?.();
	const options = createBusinessOptions(props.businessDetails);

	return (
		<DropdownMenuPanel palette="light">
			<LinkedBusinesses
				businesses={options}
				onSelectBusiness={setBusiness}
				preventAddBusiness={props.preventAddBusiness}
			/>
		</DropdownMenuPanel>
	);
};

export const getBusinessSidebarLinks = <T extends Business>(
	details: BusinessDetails<T> | undefined,
	preventAddBusiness?: boolean
) => {
	const linkedBusinesses = details?.linkedBusinesses ?? [];

	return linkedBusinesses.length === 0 ||
		details?.selectedBusiness === undefined
		? [
				{
					options: { disableGroupPadding: true },
					items: [
						{
							label: (
								<Fragment>
									{preventAddBusiness ? null : (
										<ButtonLink
											block
											variant="secondary"
											href={hrefs.linkBusiness}
										>
											Add a business
										</ButtonLink>
									)}

									<ButtonLink
										block
										variant="secondary"
										href={hrefs.acceptInvite}
									>
										Accept an invite
									</ButtonLink>
								</Fragment>
							),
						},
					],
				},
			]
		: [
				{
					options: { disableGroupPadding: true },
					items: [
						{
							label: (
								<Fragment>
									<DropdownMenu>
										<DropdownMenuButton
											css={{ display: 'flex', justifyContent: 'space-between' }}
										>
											<Text as="p" fontWeight="bold" fontSize="xs">
												{details.selectedBusiness.partyDisplayName}
											</Text>

											<Text as="p" color="muted" fontSize="xs">
												{details.selectedBusiness.formattedPartyExternalId}
											</Text>
										</DropdownMenuButton>

										<BusinessDropdown
											businessDetails={details}
											preventAddBusiness={preventAddBusiness}
										/>
									</DropdownMenu>
								</Fragment>
							),
						},
					],
				},
			];
};
