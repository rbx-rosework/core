// Entity
// Top-level class to handle all communication for Rosework subentities
// ro_seau


// Imports
import { SubEntity, SubEntityInfo, SubEntityType } from "./SubEntity"

// Types
export interface EntityMetadata {
    Subentities: Record<SubEntityType,SubEntityInfo>
}

// Classes
export class Entity {
    readonly SubEntities: SubEntity[] = []
    readonly Metadata: EntityMetadata

    public constructor(EntityModule: ModuleScript) {
        this.Metadata = require(EntityModule) as EntityMetadata
    }
}