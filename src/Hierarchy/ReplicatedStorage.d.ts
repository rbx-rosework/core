declare global {
	interface ReplicatedStorage extends Instance {
		Rosework: Folder & {
			Entities: Folder
		}
	}
}

export {}