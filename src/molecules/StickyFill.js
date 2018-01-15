import React from 'react';

export default function sticky(Component) {
	class StickyFill extends React.Component {
		constructor(props) {
			super(props);

			this.props = props;
		}
		componentDidMount() {
			console.log('component mounted');
			if (this.node) {
				import('../utils/sticky-fill').then((module) => {
					this.stickyFill = module;
					this.stickyFill.addOne(this.node);
					console.log('STICKY FILL IMPORTED');
				}).catch((e) => {
					console.log(`IMPORT CATCHED ${e}`);
				});
			}
		}
		componentWillUnmount() {
			if (this.stickyFill && this.node) {
				this.stickyFill.removeOne(this.node);
			}
		}
		render() {
			return <Component {...this.props} ref={(node) => { this.node = node; }} />;
		}
	}

	return StickyFill;
}
