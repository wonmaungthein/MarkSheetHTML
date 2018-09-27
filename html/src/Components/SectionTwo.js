import React, { Component } from 'react';

class SectionTwo extends Component {
	render() {
		return (
			<div>
				<section className="section-two">
					<article>
						<h1>Famous football quotes</h1>
						<p>
							Sir <strong>Alex Ferguson</strong> once said about Filipo Inzaghi:
							<q>"That lad must have been born offside"</q>.
						</p>
						<p>
							When criticized by John Carew, <strong>Zlatan Ibrahimovic</strong> replied:{' '}
							<q>"What Carew does with a football, I can do with an orange"</q>.
						</p>
						<p>
							<strong>George Best</strong> said
							<q>
								"I spent a lot of money on booze, birds and fast cars. The rest I just squandered."
							</q>{' '}
							when asked about his lifestyle.
						</p>
						<output>
							<q> (to display the result of a calculation) </q>
						</output>
						<code> Write codes </code>
					</article>
				</section>
			</div>
		);
	}
}

export default SectionTwo;
