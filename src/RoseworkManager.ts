// Rosework Manager
// Keeps track of all entities and subentities
// ro_seau


// Imports
import { ReplicatedStorage } from "@rbxts/services"
import { Entity } from "./Entity"
import { Singleton } from "./Singleton"

// Enums
export enum SubEntityType {
	Core,
	Singleton,
	Component,
	Tool,
	State,
	SMS
}

export class RoseworkManager extends Singleton {
	readonly Entities: Entity[] = []
	readonly LoadedSubEntities: SubEntityType[] = []

	constructor() {
		super()
		this.RegisterSubEntity(SubEntityType.Core)
	}

	/**
	 * **RegisterEntity**
	 * 
	 * Adds an entity to the Rosework entity registry.
	 * 
	 * @param Entity The entity to register
	 * 
	 * @internal
	 */
	public RegisterEntity(Entity: Entity): void {
		this.Entities.push(Entity)
	}

	/**
	 * **RegisterSubEntity**
	 * 
	 * Adds a sub entity type to the Rosework sub entity registry.
	 * 
	 * @param Type The SubEntityType enum to register
	 * 
	 * @internal
	 */
	public RegisterSubEntity(Type: SubEntityType) {
		this.LoadedSubEntities.push(Type)
	}

	/**
	 * **Start**
	 * 
	 * Starts up Rosework.
	 */
	public Start() {
		ReplicatedStorage.Rosework.Entities.GetChildren().forEach((EntityScript) => {
			if(!EntityScript.IsA("ModuleScript")) return

			this.RegisterEntity(new Entity(EntityScript))
		})
	}
}