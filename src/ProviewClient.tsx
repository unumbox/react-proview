import React, {Component} from 'react';

interface IProps {
	token: String,
	options?: ConfigOptions,
}

interface IState {
	loading: Boolean,
}

type CallbackFunction = (
	err?:string,
	audio?:boolean,
	video?:boolean,
	screen?:boolean,
	session_uid?:string
) => void;

interface ConfigOptions {
	debug?: boolean;
	url?: string;
	screen?: boolean;
	testMode?: boolean;
	version?: number,
	session?: string;
	skipHardwareTest?: boolean;
	initCallback?: CallbackFunction;
}

export default class ProviewClient extends Component<IProps, IState> {
	state: IState = {
		loading: true,
	}

	debubMode: Boolean = false;

	defaultConfig = {
		clear: true,
		screen: false,
		session: `v4${Math.random()}`,
		skipHardwareTest: false,
		initCallback: () => {},
		flash: false,
	}

	componentDidMount(): void {
		const {options = {}, token} = this.props;
		if (!token) {
			this.warn(' Token is required in init()');
			return;
		}
		this.debubMode = options.debug ?? false;
	}

	componentWillUnmount(): void {
		
	}

	warn = (val: any) => {
		console.warn('[react-proview]', val);
	}

	log = (val: any) => {
		console.info('[react-proview]', val);
	}

	render() {
		if (this.state.loading) {
			return <></>
		} else {
			return this.props.children
		}
	}
}
