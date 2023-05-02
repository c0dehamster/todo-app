import { browser } from "$app/environment"
import { writable, derived } from "svelte/store";
import {v4 as uuidv4} from "uuid"
import type { Writable } from "svelte/store";

export interface ListItem {
    id: string
    description: string
    completed: boolean
}

let items: ListItem[] = []

if (browser) {
	let tasks = localStorage.getItem("tasks")

	if (tasks && tasks !== "undefined") items = JSON.parse(tasks)
}

const createArrayStore = (items: ListItem[]) => {
	const { set, update, subscribe }: Writable<{items: ListItem[]}> = writable({
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

	// Such a small change requires updating the entire store

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
			let itemsUpdated = store.items.filter(item => item.id !== id)

			return { ...store, items: itemsUpdated }
		})
	}

	const clearCompleted = () => {
		update(store => {
			return {
				...store,
				items: store.items.filter(item => !item.completed)
			}
		})
	}



	return {
		set,
		subscribe,
		addItem,
		toggleCompleted,
		removeItem,
		clearCompleted
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

if (browser) {
	TasksStore.subscribe(value =>
		localStorage.setItem("tasks", JSON.stringify(value.items))
	)
}
