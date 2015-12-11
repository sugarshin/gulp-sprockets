/**
 * @fileoverview CSS stream.
 */

import stream    from 'event-stream';
import builder   from '../builders/scss';
import directive from '../directives/css';
import { transformation } from '../transformer';

function defaultOptions() {
  return { precompile: false };
}

/**
 * @params {Object} options .
 */
export default function (options) {
  options = Object.assign(defaultOptions(), options);

  return stream.through(function(vFile) {
    if (!vFile.isNull()) {
      vFile = transformation(
          [builder, directive], vFile, options);
    }
    this.emit('data', vFile);
  });
}
