let mode_state: 0 | 1 | 2 = $state(0);

export let mode = {
	state: () => {
		if (mode_state < 2) {
			return mode_state ? true : false;
		}
	},
	toggle: (state: any = undefined) => {
		if (state == 0 || state == 1 || state == 2 || state == true || state == false) {
			mode_state = state as 0 | 1 | 2;
		} else if (mode_state < 2) {
			mode_state = mode_state == 0 ? 1 : 0;
		}
	}
};
