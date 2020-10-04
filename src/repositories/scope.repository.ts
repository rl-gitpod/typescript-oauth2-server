import { OAuthClient } from "../entities/client.entity";
import { OAuthScope } from "../entities/scope.entity";
import { GrantIdentifier } from "../grants/abstract/grant.interface";

export interface OAuthScopeRepository {
  getAllByIdentifiers(scopeNames: string[]): Promise<OAuthScope[]>;

  finalize(
    scopes: OAuthScope[],
    identifier: GrantIdentifier,
    client: OAuthClient,
    user_id?: string,
  ): Promise<OAuthScope[]>;
}
