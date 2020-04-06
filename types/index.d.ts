
type CallbackFunction = (err?:string,audio?:boolean,video?:boolean,screen?:boolean,session_uid?:string) => void;

export interface InitOptions {
  debug?: boolean;
  url?: string;
  screen?: boolean;
  testMode?: boolean;
  version: number,
  session: string;
  skipHardwareTest?: boolean;
  initCallback: CallbackFunction;
}

export function init(token: string, options?: InitOptions): void;

export function stop(callback: Function): void;