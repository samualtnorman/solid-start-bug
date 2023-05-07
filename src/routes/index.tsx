import { useRouteData } from "solid-start"
import { createServerAction$, createServerData$ } from "solid-start/server"

let count = 0

export const routeData = () => createServerData$(() => count)

export default () => {
	const getRouteData = useRouteData<typeof routeData>()
	const [ _, increment ] = createServerAction$(async (form: FormData) => count++)

	return <increment.Form><input type="button" value={getRouteData()}/></increment.Form>
}
