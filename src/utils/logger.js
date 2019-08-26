export default {
    errorLog(err) {
        console.error(`Error occurs: ${JSON.stringify(err)}`);
    },
    startLog(msg) {
        console.log(`Programm starts : ${JSON.stringify(msg)}`);
    },
    helloLog() {
        console.log(`Hello World`);
    }
}