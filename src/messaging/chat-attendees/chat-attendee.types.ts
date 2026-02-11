import { type Static, Type } from '@sinclair/typebox';
import { TypeCompiler } from '@sinclair/typebox/compiler';
import { ChatAttendeeSchema } from './ressource.types.js';

// --------------------------------------------------------------------------
// RESPONSE
// --------------------------------------------------------------------------

/**
 *
 */
export const ChatAttendeeResponseSchema = Type.Composite([
	ChatAttendeeSchema,
	Type.Object({
		object: Type.Literal('ChatAttendee'),
	}),
]);

export type ChatAttendeeResponse = Static<typeof ChatAttendeeResponseSchema>;

// export const getChatAttendeeResponseOpenApiSchema = makeOpenApiSchemaGetter(
//   ChatAttendeeResponseSchema
// );

/**  */
export const ChatAttendeeResponseValidator = TypeCompiler.Compile(ChatAttendeeResponseSchema);
