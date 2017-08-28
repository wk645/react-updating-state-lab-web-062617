import React from 'react'

export default class YoutubeDebugger extends React.Component {
		constructor() {
			super()

			this.state = {
				errors: [],
				user: null,
				settings: {
					bitrate: 8,
					video: {
						resolution: '1080p'
					}
				}
			}
		}

		Bitrate = () => {
			this.setState({
				settings: {
					...this.state.settings,
					bitrate: 12
				}
			})
		}

		Resolution = () => {
			this.setState({
				settings: {
					...this.state.settings,
					video: {
						...this.state.video,
						resolution: '720p'
					}
				}
			})
		}

		render() {
			return (
				<div>
					<button className="bitrate" onClick={this.Bitrate}>Change Bitrate</button>
					<button className="resolution" onClick={this.Resolution}>Change Resolution</button>
				</div>
			)
		}
}