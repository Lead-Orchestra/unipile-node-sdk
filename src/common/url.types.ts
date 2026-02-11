import { TypeSystem } from '@sinclair/typebox/system';
import { type HttpUrl, isHttpUrl } from './core.types.tmp.js';

/**
 *
 */
export const HttpUrlType = TypeSystem.Type<HttpUrl>('HttpUrl', (options, value) =>
	isHttpUrl(value)
);
