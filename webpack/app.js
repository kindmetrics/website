import { Application } from "stimulus"
import { Dropdown } from "tailwindcss-stimulus-components"

const application = Application.start()
application.register('dropdown', Dropdown)
