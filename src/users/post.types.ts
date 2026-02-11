import { type Static, Type } from '@sinclair/typebox';
import { TypeCompiler } from '@sinclair/typebox/compiler';
import { PostSchema } from './ressource.types.js';

export const UserPostApiResponseSchema = Type.Composite([
	PostSchema,
	Type.Object({
		object: Type.Literal('Post'),
	}),
]);

export type UserPostApiResponse = Static<typeof UserPostApiResponseSchema>;

/**  */
export const UserPostApiResponseValidator = TypeCompiler.Compile(UserPostApiResponseSchema);
