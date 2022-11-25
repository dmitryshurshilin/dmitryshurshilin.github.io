enum Servers {
    server1 = 'Server 1',
    server2 = 'Server 2',
}

class Connector {
    connect(server: Servers): void {
        console.log(`Connected to ${server}`)
    }
}

class Starter {
    start(): void {
        console.log('Started')
    }
}

enum DataTypes {
    type1 = 'Data Type 1',
    type2 = 'Data Type 2',
}

class Loader {
    loadData(dataType: DataTypes): void {
        console.log(`Data ${dataType} loaded`)
    }
}

class AppFacade {
    start(server: Servers) {
        new Connector().connect(server)
        new Starter().start()
    }
    load(dataType: DataTypes) {
        new Loader().loadData(dataType)
    }
}

const app = new AppFacade()
app.start(Servers.server1)
app.load(DataTypes.type1)
