const {
    Worker, isMainThread, parentPort
} = require('worker_threads');

if (isMainThread) {
    const worker =new Worker(__filename);
    worker.on('message', message =>{
        console.log('from worker', message);
        if (message == 'worker is done') {
            console.log('main jobs');
        }
    });
    
} else {
    
    console.log('woker jobs');
    parentPort.postMessage('worker is done');
}