// @flow
import { INSPECT } from '../../../constants/dialog-types';
import { CLIP } from '../../../constants/model-types';
import { exportJson } from '../../usecases/jsonExport';
import { deleteClip, moveToSelectedTrack } from '../../interactors/Clip';
import type { Option } from './types';
import { openDialog } from '../../interactors/Dialog';

export const clip: Option[] = [
  {
    label: 'Inspect',
    click ({ id }) {
      openDialog(INSPECT, {
        contextType: CLIP,
        contextId: id
      });
    }
  },
  {
    label: 'Export as JSON',
    async click ({ id }) {
      await exportJson(CLIP, id);
    }
  },
  {
    label: 'Delete',
    async click ({ id }) {
      await deleteClip(id);
    }
  },
  {
    label: 'Move to Selected Track',
    async click ({ id }) {
      await moveToSelectedTrack(id);
    }
  },
  {
    label: 'Set Spectrogram',
    async click ({ id }) {
    }
  }
];
