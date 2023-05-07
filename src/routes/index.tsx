import { useRouteData } from "solid-start"
import { createServerAction$, createServerData$, redirect } from "solid-start/server"

let count = 0

export const routeData = () => createServerData$(() => count)

export default () => {
	const getRouteData = useRouteData<typeof routeData>()
	const [ _, increment ] = createServerAction$(async (form: FormData) => {
		count++
		return redirect("/")
	})

	return <increment.Form><input type="submit" value={getRouteData()}/></increment.Form>
}
