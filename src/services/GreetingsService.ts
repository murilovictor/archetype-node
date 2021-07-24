class GreetingsService {
    async execute(name: any) {
        return {
            "greetings": `Hello, ${name}`
        }
    }
}

export {GreetingsService};
