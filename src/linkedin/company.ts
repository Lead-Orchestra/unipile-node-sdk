import { type Static, Type } from '@sinclair/typebox';
import { TypeCompiler } from '@sinclair/typebox/compiler';
import { LinkedinCompanyProfileSchema } from './ressource.types.js';

// --------------------------------------------------------------------------
// RESPONSE
// --------------------------------------------------------------------------

export const LinkedinCompanyProfileResponseSchema = Type.Composite([
	Type.Object({
		object: Type.Literal('CompanyProfile'),
	}),
	LinkedinCompanyProfileSchema,
]);

export type LinkedinCompanyProfileApiResponse = Static<typeof LinkedinCompanyProfileResponseSchema>;

// export const getLinkedinCompanyProfileResponseOpenApiSchema =
//   makeOpenApiSchemaGetter(LinkedinCompanyProfileResponseSchema);

/**  */
export const LinkedinCompanyProfileApiResponseValidator = TypeCompiler.Compile(
	LinkedinCompanyProfileResponseSchema
);
