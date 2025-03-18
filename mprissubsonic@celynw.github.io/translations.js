const _ = imports.gettext.domain(
	"mprissubsonic@celynw.github.io"
).gettext;

// TRANSLATORS: These are all of the translatable strings in this extension.
// Any new translatable strings will be added to the end as to not break previous translations.
var TRANSLATED = {
	// TRANSLATORS: Non proper noun part of the extension's name.
	// User visible string and used by accessibility software.
	get ["Indicator Button"]() {
		return _("Indicator Button");
	},

	// TRANSLATORS: The section of the extension's menu
	// that contains media control buttons like shuffle, previous, play pause and so on.
	// Will be prepended with the player's name.
	// Non user visible string, used by accessibility software.
	get ["Media Controls"]() {
		return _("Media Controls");
	},

	// TRANSLATORS: Button Name. Random playback order.
	// Should be very short, ideally one word. Do not add "button",
	// the name is what it does not what it is.
	// Non user visible string, used by accessibility software.
	get ["Shuffle"]() {
		return _("Shuffle");
	},

	// TRANSLATORS: Button Name. Skip back to the previous track.
	// Should be very short, ideally one word. Do not add "button",
	// the name is what it does not what it is.
	// Non user visible string, used by accessibility software.
	get ["Previous"]() {
		return _("Previous");
	},

	// TRANSLATORS: Button Name. Dual function start playback or pause playback.
	// Should be very short, ideally no more than two word but at least two words, to represent
	// the dual function. Do not add "button" the name is what it does not what it is.
	// Non user visible string, used by accessibility software.
	get ["Play Pause"]() {
		return _("Play Pause");
	},

	// TRANSLATORS: Button Name. Stop playback.
	// Should be very short, ideally one word. Do not add "button",
	// the name is what it does not what it is.
	// Non user visible string, used by accessibility software.
	get ["Stop"]() {
		return _("Stop");
	},

	// TRANSLATORS: Button Name. Skip forward to the next track.
	// Should be very short, ideally one word. Do not add "button",
	// the name is what it does not what it is.
	// Non user visible string, used by accessibility software.
	get ["Next"]() {
		return _("Next");
	},

	// TRANSLATORS: Button Name. Repeat the track or track list.
	// Should be very short, ideally one word. Do not add "button",
	// the name is what it does not what it is.
	// Non user visible string, used by accessibility software.
	get ["Repeat"]() {
		return _("Repeat");
	},

	// TRANSLATORS: The section of the extension's menu that contains the volume control.
	// Will be prepended with the player's name and appended with the volume value.
	// Non user visible string, used by accessibility software.
	get ["Volume"]() {
		return _("Volume");
	},

	// TRANSLATORS: The section of the extension's menu that contains the trackList menu.
	// TrackList is a list of tracks but not necessarily a playlist.
	// Do NOT translate this as "playlist".
	// Will be prepended with the player's name.
	// User visible string and used by accessibility software.
	get ["TrackList"]() {
		return _("TrackList");
	},

	// TRANSLATORS: The section of the extension's menu that contains the playlists menu.
	// PlayLists is a list of playlists.
	// Will be prepended with the player's name.
	// User visible string and used by accessibility software.
	get ["PlayLists"]() {
		return _("PlayLists");
	},

	// TRANSLATORS: An item in the Playlists menu.
	// Will be prepended with the player's name and appended with the playlist's name.
	// Non user visible string, used by accessibility software.
	get ["PlayList Item"]() {
		return _("PlayList Item");
	},

	// TRANSLATORS: An item in the TrackList menu.
	// Will be prepended with the player's name and appended with the TrackList Item's info.
	// Non user visible string, used by accessibility software.
	get ["TrackList Item"]() {
		return _("TrackList Item");
	},
};
