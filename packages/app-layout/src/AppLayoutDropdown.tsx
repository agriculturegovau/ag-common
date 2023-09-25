import { VisuallyHidden } from '@ag.ds-next/react/a11y';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
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
import { Modal, ModalProps } from '@ag.ds-next/react/modal';
import { NotificationBadge } from '@ag.ds-next/react/notification-badge';
import { Text } from '@ag.ds-next/react/text';
import { useState } from 'react';
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
	focusMode?: boolean;
	onSignOutClick: () => void;
}

const ChangeBusinessModal = (props: {
	business: BusinessOption | undefined;
	onDismiss: ModalProps['onDismiss'];
}) => (
	<Modal
		isOpen={props.business !== undefined}
		onDismiss={props.onDismiss}
		title="Are you sure you want to leave this page?"
		actions={
			<ButtonGroup>
				<Button
					onClick={() => {
						props.onDismiss();
						props?.business?.setSelected?.();
					}}
				>
					Leave this page
				</Button>
				<Button variant="secondary" onClick={props.onDismiss}>
					Stay on this page
				</Button>
			</ButtonGroup>
		}
	>
		<Text as="p">You will lose all changes made since your last save.</Text>
	</Modal>
);

const LinkedBusinesses = (props: {
	businesses: BusinessOption[];
	onSelectBusiness: (business: BusinessOption) => () => void;
}) =>
	props.businesses.length === 0 ? (
		<DropdownMenuGroup label="Link a business">
			<DropdownMenuItemLink
				href="/account/link"
				endElement={<ArrowRightIcon />}
			>
				Get started
			</DropdownMenuItemLink>
		</DropdownMenuGroup>
	) : (
		<DropdownMenuGroup label="Linked businesses">
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
	const [switchingTarget, setSwitchingTarget] = useState<
		BusinessOption | undefined
	>();
	const clearBusiness = () => setSwitchingTarget(undefined);
	const setBusiness = props.focusMode
		? (option: BusinessOption) => () => setSwitchingTarget(option)
		: (option: BusinessOption) => () => option?.setSelected?.();

	const options = createBusinessOptions(props.businessDetails);

	return (
		<>
			<ChangeBusinessModal
				business={switchingTarget}
				onDismiss={clearBusiness}
			/>

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
						Profile
					</DropdownMenuItemLink>
				</DropdownMenuGroup>
				<DropdownMenuDivider />
				<DropdownMenuItem onClick={props.onSignOutClick} icon={ExitIcon}>
					Sign out
				</DropdownMenuItem>
			</DropdownMenuPanel>
		</>
	);
};

export const getBusinessSidebarLinks = <T extends Business>(
	details: BusinessDetails<T> | undefined
) =>
	details?.selectedBusiness === undefined
		? []
		: [
				[
					{
						label: 'Back to my account',
						icon: ChevronsLeftIcon,
						href: '/account',
					},
				],
				[
					{
						label: (
							<>
								<Text fontWeight="bold" fontSize="xs">
									{details.selectedBusiness.partyDisplayName}
								</Text>
								<Text color="muted" fontSize="xs">
									{details.selectedBusiness.formattedPartyExternalId}
								</Text>
							</>
						),
					},
				],
		  ];
