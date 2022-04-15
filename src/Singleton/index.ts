// Singleton
// Abstract class to handle singletons (not at all related to Rosework/Singleton)
// ro_seau


// Variables
const CreatedSingletons: Record<string,Singleton> = {}

export abstract class Singleton {
    constructor() {
        const Name: string = (this as unknown as { constructor: {name: string}}).constructor.name

        if(CreatedSingletons[Name]) {
            return CreatedSingletons[Name]
        }
        CreatedSingletons[Name] = this
    }
}