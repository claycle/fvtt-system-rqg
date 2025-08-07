import { AudioCuesEnum } from "../../applications/defaultAudioCuesSettings";

import { AudioCuesSettingsData } from "../../applications/defaultAudioCuesSettings";

// I want it to be this
/*
export const defaultAudioCuesObject: AudioCuesSettingsData = {
  [AudioCuesEnum.defend]: "public/sounds/notify.wav",
};
*/
// but that's not working, so for the moment, I hardcode

export const defaultAudioCuesObject: AudioCuesSettingsData = {
  defend: "public/sounds/notify.wav",
  spiritmagic: "public/sounds/notify.wav",
  runemagic: "public/sounds/notify.wav",
};
