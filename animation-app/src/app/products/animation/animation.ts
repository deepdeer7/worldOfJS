import { animate, state, style, transition, trigger } from '@angular/animations';

export const ON_OFF_ANIMATION =
	trigger('onOffTrigger', [
		state('off', style({
		  display: 'none',
		})),
		state('on',   style({
		  display: 'block',
		  width: '500px',
		  height: '100%',
		  backgroundColor: 'blue'
		})),
		transition('off => on', animate('.6s 100ms ease-in')),
		transition('on => off', animate('.7s 100ms ease-in-out'))
	]); 