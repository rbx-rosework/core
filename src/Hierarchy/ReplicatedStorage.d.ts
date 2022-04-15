// Replicated Storage
// Holds the hierarchy description for ReplicatedStorage
// ro_seau

// Declarations
declare global {
	interface ReplicatedStorage extends Instance {
		Rosework: Folder & {
			Entities: Folder
		}
	}
}

export {}