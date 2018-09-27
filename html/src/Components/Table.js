import React, { Component } from 'react';

class Table extends Component {
	render() {
		return (
			<div>
				<section className="table-section">
					<table>
						<tr>
							<th>First Name</th>
							<th>Middle Name</th>
							<th>Last Name</th>
						</tr>
						<tr>
							<td>Won</td>
							<td>Maung</td>
							<td>Thein</td>
						</tr>
					</table>
				</section>
			</div>
		);
	}
}

export default Table;
