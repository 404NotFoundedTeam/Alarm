import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/system';
import { useSwitch } from '@mui/base/SwitchUnstyled';

const BasicSwitchRoot = styled('span')`
  background-color: transparent;
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  margin: 0;
  padding: 0;
  border: 1.5px solid #787477;
  cursor: pointer;

  &.Switch-disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const BasicSwitchInput = styled('input')`
  cursor: inherit;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
`;

const BasicSwitchThumb = styled('span')`
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #787477;
  position: relative;
  transition: all 200ms ease;

  &.Switch-focusVisible {
    box-shadow: 0 0 2px 8px rgba(0, 0, 0, 0.25);
  }

  &.Switch-checked {
    background-color: #fbe206;
    box-shadow: 0 0 10px 0 rgba(251, 226, 6, 0.73);
    left: 20px;
  }
`;

function BasicSwitch(props) {
	const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

	const stateClasses = {
		'Switch-checked': checked,
		'Switch-disabled': disabled,
		'Switch-focusVisible': focusVisible,
	};

	return (
		<BasicSwitchRoot className={clsx(stateClasses)}>
			<BasicSwitchThumb className={clsx(stateClasses)} />
			<BasicSwitchInput {...getInputProps()} aria-label="Demo switch" />
		</BasicSwitchRoot>
	);
}

export default function UseSwitchesBasic(props) {
	return (
		<div>
			<BasicSwitch defaultChecked={props.defaultChecked} />
		</div>
	);
}
