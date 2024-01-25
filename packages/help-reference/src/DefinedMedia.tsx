import { PropsWithChildren } from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	TableWrapper,
} from '@ag.ds-next/react/table';
import { AlertFilledIcon, SuccessFilledIcon } from '@ag.ds-next/react/icon';
import { Flex } from '@ag.ds-next/react/flex';

const SuccessCell = () => (
	<TableCell verticalAlign="middle">
		<Flex>
			<SuccessFilledIcon color="success" />
			&nbsp;&nbsp;Yes
		</Flex>
	</TableCell>
);

const ErrorCell = () => (
	<TableCell verticalAlign="middle">
		<Flex>
			<AlertFilledIcon color="error" />
			&nbsp;&nbsp;No
		</Flex>
	</TableCell>
);

const PsuedoHeaderCell = (t: PropsWithChildren) => (
	<TableCell>{t.children}</TableCell>
);

export const definedMedia = {
	['account/account-roles-and-access-table']: () => (
		<TableWrapper>
			<Table striped>
				<TableHead>
					<TableRow>
						<TableHeader>Role and access</TableHeader>
						<TableHeader width={'15%'}>Principal Authority (Owner)</TableHeader>
						<TableHeader width={'15%'}>Manager</TableHeader>
						<TableHeader width={'15%'}>User</TableHeader>
						<TableHeader width={'15%'}>Agent</TableHeader>
					</TableRow>
				</TableHead>

				<TableBody>
					<TableRow>
						<PsuedoHeaderCell>
							Invite others to use the Export Service for a business
						</PsuedoHeaderCell>
						<SuccessCell />
						<SuccessCell />
						<ErrorCell />
						<ErrorCell />
					</TableRow>

					<TableRow>
						<PsuedoHeaderCell>Manage others&apos; access</PsuedoHeaderCell>
						<SuccessCell />
						<SuccessCell />
						<ErrorCell />
						<ErrorCell />
					</TableRow>

					<TableRow>
						<PsuedoHeaderCell>
							View who has access to a business
						</PsuedoHeaderCell>
						<SuccessCell />
						<SuccessCell />
						<SuccessCell />
						<ErrorCell />
					</TableRow>

					<TableRow>
						<PsuedoHeaderCell>
							Set and change notification preferences
						</PsuedoHeaderCell>
						<SuccessCell />
						<SuccessCell />
						<SuccessCell />
						<SuccessCell />
					</TableRow>

					<TableRow>
						<PsuedoHeaderCell>
							Receive department notifications and messages
						</PsuedoHeaderCell>
						<SuccessCell />
						<SuccessCell />
						<SuccessCell />
						<SuccessCell />
					</TableRow>
				</TableBody>
			</Table>
		</TableWrapper>
	),
	['account/establishment-roles-and-access-table']: () => (
		<TableWrapper>
			<Table striped>
				<TableHead>
					<TableRow>
						<TableHeader>Role and access</TableHeader>
						<TableHeader width={'15%'}>Principal Authority (Owner)</TableHeader>
						<TableHeader width={'15%'}>Manager</TableHeader>
						<TableHeader width={'15%'}>User</TableHeader>
						<TableHeader width={'15%'}>Agent</TableHeader>
					</TableRow>
				</TableHead>

				<TableBody>
					<TableRow>
						<PsuedoHeaderCell>
							Make changes to establishment operations
						</PsuedoHeaderCell>
						<SuccessCell />
						<SuccessCell />
						<SuccessCell />
						<SuccessCell />
					</TableRow>

					<TableRow>
						<PsuedoHeaderCell>Change establishment details</PsuedoHeaderCell>
						<SuccessCell />
						<SuccessCell />
						<SuccessCell />
						<SuccessCell />
					</TableRow>

					<TableRow>
						<PsuedoHeaderCell>
							Make changes to management and control
						</PsuedoHeaderCell>
						<SuccessCell />
						<SuccessCell />
						<SuccessCell />
						<SuccessCell />
					</TableRow>

					<TableRow>
						<PsuedoHeaderCell>Submit applications</PsuedoHeaderCell>
						<SuccessCell />
						<SuccessCell />
						<SuccessCell />
						<SuccessCell />
					</TableRow>
				</TableBody>
			</Table>
		</TableWrapper>
	),
} as const;

export const DefinedMedia = (t: { label: keyof typeof definedMedia }) => {
	const C = definedMedia[t.label];
	return <C />;
};
