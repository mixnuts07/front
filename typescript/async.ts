function taskA() {
    console.log("execute Task A", Date.now())
}
function taskB() {
    console.log("execute Task B", Date.now())
}
function BlockTime(timeout: number) {
    const startTime = Date.now()
    while(true) {
        const diffTime = Date.now() - startTime
        if(diffTime >= timeout) {
            return
        }
    }
}
taskA()
BlockTime(1000)
taskB()

function taskAsync() {
    console.log("execute async task", Date.now())
}
taskA()
setTimeout(()=> {
    taskAsync(), 1000
})
taskB()

const promise = new Promise((resolve, reject) => {
})
const onResolve = () => {
    console.log("resolve")
}
const onReject = () => {
    console.log("reject")
}
promise.then(onResolve, onReject)