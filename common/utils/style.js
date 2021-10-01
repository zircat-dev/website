import { css } from '@emotion/react';

export const SrOnly = css({
  // ~~stolen~~ borrowed from bootstrap's excellent sr-only mixin
  position:   'absolute',
  width:      '1px',
  height:     '1px',
  padding:    '0',
  overflow:   'hidden',
  clip:       'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border:     '0',
});
