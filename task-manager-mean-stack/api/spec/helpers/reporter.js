class CustomReporter {
    constructor() {
        this.specs = [];
    }

    specStarted(result) {
        this.specs.push(result);
    }

    specDone(result) {
        console.log(`Spec: ${result.description} - Status: ${result.status}`);
        result.failedExpectations.forEach(failure => {
            console.log(`Failure: ${failure.message}`);
        });
    }

    jasmineDone() {
        console.log('All specs completed.');
    }
}

jasmine.getEnv().addReporter(new CustomReporter());