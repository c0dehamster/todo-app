import { writable, derived } from "svelte/store";
import {v4 as uuidv4} from "uuid"
import type { Writable } from "svelte/store";

interface Item {
    id: string
    description: string
    completed: boolean
}

let items: Item[] = [
	{
		id: "testItem",
		description: "Finish the todo-app",
		completed: false
	}
]

const createArrayStore = (items: Item[]) => {
	const { set, update, subscribe }: Writable<{items: Item[]}> = writable({
		items
	})

	const addItem = (description: string) => {		
		update(store => {
            let item = {
                id: uuidv4(),
                description,
                completed: false
            }

			return {
				...store,
				items: [item, ...store.items],
			}
		})
	}

	const toggleCompleted = (id: string, completed: boolean) => {
		update(store => {
			let itemsUpdated = store.items.map(item => {
				if (item.id !== id) return item

				return {
					...item,
					completed
				}
			})

			return {
				...store,
				items: itemsUpdated
			}
		})
	}	

	const removeItem = (id: string) => {
		update(store => {
			let itemsUpdated = store.items.filter((item: Item) => item.id !== id)

			return { ...store, items: itemsUpdated }
		})
	}



	return {
		subscribe,
		addItem,
		toggleCompleted,
		removeItem,
	}
}

export const TasksStore = createArrayStore(items)
export const FilterBy: Writable<"all" | "completed" | "active"> = writable("all")

export const TasksFiltered = derived([TasksStore, FilterBy], ([$TasksStore, $FilterBy]) => {
	switch ($FilterBy) {
		case "all":
			return $TasksStore.items
			
		case "completed":
			return $TasksStore.items.filter(item => item.completed)

		case "active":
			return $TasksStore.items.filter(item => !item.completed)
	}
})