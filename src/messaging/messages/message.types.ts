import { type Static, Type } from '@sinclair/typebox';
import { TypeCompiler } from '@sinclair/typebox/compiler';
import { MessageSchema } from './ressource.types.js';

// --------------------------------------------------------------------------
// RESPONSE
// --------------------------------------------------------------------------

/**
 *
 */
export const MessageResponseSchema = Type.Composite([
	MessageSchema,
	Type.Object({
		object: Type.Literal('Message'),
	}),
]);

export type MessageResponse = Static<typeof MessageResponseSchema>;

// export const getMessageResponseOpenApiSchema = makeOpenApiSchemaGetter(
//   MessageResponseSchema,
// );

/**  */
export const MessageResponseValidator = TypeCompiler.Compile(MessageResponseSchema);
