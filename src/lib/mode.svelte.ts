let is_mode_dark = $state(false);

export let mode = {
	state: () => is_mode_dark,
	toggle: (state: any = undefined) => {
		if (typeof state == 'boolean') {
			is_mode_dark = state;
		} else {
			is_mode_dark = !is_mode_dark;
		}
	}
};
