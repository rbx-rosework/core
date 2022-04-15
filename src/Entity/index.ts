// Entity
// Top-level class to handle all communication for Rosework subentities
// ro_seau


// Imports
import { SubEntity, SubEntityInfo, SubEntityType } from "./SubEntity"

// Types
export type SubEntitiesMetadata = Record<SubEntityType,SubEntityInfo>

export interface EntityMetadata {
    SubEntities: SubEntitiesMetadata
}

// Classes
export class Entity {
    readonly SubEntities: SubEntity[] = []
    readonly Metadata: EntityMetadata

    public constructor(EntityModule: ModuleScript) {
        this.Metadata = require(EntityModule) as EntityMetadata
    }
}