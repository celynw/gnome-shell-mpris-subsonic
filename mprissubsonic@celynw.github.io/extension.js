// No translatable strings in this file.
const Panel = imports.ui.main.panel;

const stockMpris = Panel.statusArea.dateMenu._messageList._mediaSection;
const shouldShow = stockMpris._shouldShow;
const extensionUtils = imports.misc.extensionUtils;
const { MprisSubsonic } =
	extensionUtils.getCurrentExtension().imports.widgets;

const ROLE = "mprissubsonic@celynw.github.io";

function init(extensionMeta) {
	extensionUtils.initTranslations(ROLE);
}

function enable() {
	if (!Panel.statusArea[ROLE]) {
		stockMpris.visible = false;
		stockMpris._shouldShow = () => false;
		Panel.addToStatusArea(ROLE, new MprisSubsonic());
	}
}

function disable() {
	let indicator = Panel.statusArea[ROLE];
	if (indicator) {
		stockMpris._shouldShow = shouldShow;
		stockMpris.visible = stockMpris._shouldShow();
		// Avoid - 'JS ERROR: Exception in callback for signal:
		// open-state-changed: Error: Argument 'descendant' (type interface) may not be null
		// _onMenuSet/indicator.menu._openChangedId'
		// When the Shell disables extensions on screen lock/blank and the menu happens to be open.
		// If you connect a signal you should disconnect it... GNOME devs...
		indicator.menu.disconnect(indicator.menu._openChangedId);
		indicator.destroy();
	}
}
