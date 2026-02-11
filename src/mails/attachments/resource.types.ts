import type { Readable } from 'stream';
import { TypeSystem } from '@sinclair/typebox/system';

/**
 *
 */
export const BufferType = TypeSystem.Type<Buffer>('Buffer', (options, value) =>
	Buffer.isBuffer(value)
);

/**
 *
 */
export const ReadableType = TypeSystem.Type<Readable>('Readable', (options, value) => !!value);
