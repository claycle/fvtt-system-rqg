import { getGame, localize } from "../system/util";
import Options = FormApplication.Options;
import { systemId } from "../system/config";
import { defaultAudioCuesObject } from "../system/settings/defaultAudioCues";
import { templatePaths } from "../system/loadHandlebarsTemplates";

export enum AudioCuesEnum {
  defend = "defend",
  spiritmagic = "spiritmagic",
  runemagic = "runemagic",
}

export interface AudioCuesData {
  [AudioCuesEnum.defend]: string;
  [AudioCuesEnum.spiritmagic]: string;
  [AudioCuesEnum.runemagic]: string;
}

export class DefaultAudioCuesSettings extends FormApplication<
  FormApplication.Options,
  AudioCuesData
> {
  constructor(object: any, options?: Partial<Options>) {
    super(object, options);
  }

  static get defaultOptions(): Options {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "default-audio-cues-settings-dialog",
      title: localize("RQG.Settings.DefaultAudioCues.dialogTitle"),
      template: templatePaths.defaultAudioCuesSettings,
      classes: ["form", "default-audio-cues"],
      width: 500,
      closeOnSubmit: false,
      submitOnChange: true,
    });
  }

  protected _onSelectFile(selection: string, filePicker: FilePicker): void {
    super._onSelectFile(selection, filePicker);
    this.submit();
  }

  getData(): AudioCuesData {
    const currentSettings: any = getGame().settings.get(systemId, "defaultAudioCuesSettings");
    const settings = Object.entries(defaultAudioCuesObject).reduce((acc: any, [key, value]) => {
      acc[key] = currentSettings[key] ?? value;
      return acc;
    }, {});
    return settings;
  }

  async _updateObject(event: Event, formData?: object): Promise<void> {
    if (formData != null) {
      const data = expandObject(formData);
      await getGame().settings.set(systemId, "defaultAudioCuesSettings", data);
      this.render();
    }
  }
}
