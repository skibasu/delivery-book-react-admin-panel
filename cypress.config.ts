import { defineConfig } from "cypress"
import fs from "fs"

export default defineConfig({
    video: true,
    defaultCommandTimeout: 6000,

    // setupNodeEvents can be defined in either
    // the e2e or component configuration
    e2e: {
        baseUrl: "http://localhost:3001",
        setupNodeEvents(on, config) {
            on(
                "after:spec",
                (spec: Cypress.Spec, results: CypressCommandLine.RunResult) => {
                    if (results && results.video) {
                        // Do we have failures for any retry attempts?
                        const failures = results.tests.some((test) =>
                            test.attempts.some(
                                (attempt) => attempt.state === "failed"
                            )
                        )
                        if (!failures) {
                            // delete the video if the spec passed and no tests retried
                            fs.unlinkSync(results.video)
                        }
                    }
                }
            )
        },
    },
})
