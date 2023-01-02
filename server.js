function handle(err) {
    console.log(err)
    process.exit(1)
}

process.on('uncaughtException', handle)
process.on('unhandledRejection', handle)

require('./app').listen(3000, () => console.log('running...'))