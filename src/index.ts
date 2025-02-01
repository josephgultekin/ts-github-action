import * as core from "@actions/core";
import * as github from "@actions/github";

async function run() {
  try {
    // Get inputs from action.yml
    const name = core.getInput("name");
    core.info(`Hello, ${name}!`);

    // Get GitHub context
    const context = github.context;
    core.info(`Triggered by event: ${context.eventName}`);

    // Set output
    core.setOutput("greeting", `Hello, ${name}! Welcome to GitHub Actions.`);

  } catch (error: any) {
    core.setFailed(`Action failed with error: ${error.message}`);
  }
}

run();
