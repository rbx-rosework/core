// Rosework
// The Modular, Flexible Framework for Roblox
// ro_seau


// Imports
import { ReplicatedStorage } from "@rbxts/services"
import "./Hierarchy/ReplicatedStorage"
import Entity from "./Entity"
import Singleton from "./Singleton"

// Enums
enum Feature {
	Core,
	Singleton,
	Component,
	Tool,
	State,
	SMS
}

class RoseworkManager extends Singleton {
	readonly Entities: Entity[] = []
	readonly Features: Feature[] = []

	constructor() {
		super()
		this.RegisterFeature(Feature.Core)
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
	 * **RegisterFeature**
	 * 
	 * Adds a feature to the Rosework feature registry.
	 * 
	 * @param Feature The feature enum to register
	 * 
	 * @internal
	 */
	public RegisterFeature(Feature: Feature) {
		this.Features.push(Feature)
	}

	/**
	 * **Auto**
	 * 
	 * Automatically loads all entities.
	 */
	public Auto() {
		ReplicatedStorage.Rosework.Entities.GetChildren().forEach((EntityScript) => {
			if(!EntityScript.IsA("ModuleScript")) return

			this.RegisterEntity(require(EntityScript) as Entity)
		})
	}
}

export default RoseworkManager