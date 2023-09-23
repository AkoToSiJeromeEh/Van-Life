import { useState } from "react"

const useToggle = (initialVal = false) => {

	const [state , setState] = useState(initialVal)

	const toggleElement = () => {

		setState((preval) => !preval)

	}

	return [state , toggleElement]
 
}

export default useToggle