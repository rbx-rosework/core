// Entity Metadata Decorator
// Decorator for entity metadata classes
// ro_seau


// Imports
import { EntityMetadata } from "../Entity"

// Functions
export function EntityMetadataDecorator() {
    return <U extends EntityMetadata>(constructor: U) => {constructor};
}
