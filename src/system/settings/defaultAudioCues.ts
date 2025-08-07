import { AudioCuesEnum } from "../../applications/defaultAudioCuesSettings";

import { AudioCuesSettingsData } from "../../applications/defaultAudioCuesSettings";

// I want it to be this
/*
export const defaultAudioCuesObject: AudioCuesSettingsData = {
  [AudioCuesEnum.defend]: "sounds/notify.wav",[AudioCuesEnum.spiritmagic]: "sounds/notify.wav",[AudioCuesEnum.runemagic]: "sounds/notify.wav",
};
*/
// but that's not working, so for the moment, I hardcode

export const defaultAudioCuesObject: AudioCuesSettingsData = {
  defend: "sounds/notify.wav",
  spiritmagic: "sounds/notify.wav",
  runemagic: "sounds/notify.wav",
};
