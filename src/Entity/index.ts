// Entity
// Top-level class to handle all communication for Rosework subentities
// ro_seau


// Imports
import { SubEntity } from "./SubEntity"



export class Entity {
    readonly SubEntities: SubEntity[] = []

    public constructor(EntityModule: ModuleScript) {
    }
}