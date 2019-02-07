console.log("hello world")
project_id = "brigade-9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c"
const { events, Job } = require("brigadier")

events.on("exec", () => {
    var job = new Job("test-ml-job", "ektaagrawal29/mlapp")
    //job.resourceRequests.memory = "2Gi";
    //job.resourceRequests.cpu = "500m";
    //job.resourceLimits.memory = "3Gi";
    //job.resourceLimits.cpu = "1";
    job.run()
})
